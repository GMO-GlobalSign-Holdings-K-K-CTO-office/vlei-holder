<template>
  <template v-if="renderReady">
    <v-list>
      <v-list-item
        class="my-2"
        v-for="(issuer, i) in issuers"
        :key="`list-${i}`"
      >
        <v-list-item-title>
          {{ issuer.alias }}
        </v-list-item-title>
        <v-list-item-subtitle> {{ issuer.id }}</v-list-item-subtitle>
        <template v-slot:append>
          <v-chip color="primary">{{ formatState(issuer.state) }}</v-chip>
          <v-list-item-action class="ml-3">
            <v-btn
              color="accent"
              variant="outlined"
              @click="navigateToIssuerDetail(issuer)"
              >Detail</v-btn
            >
          </v-list-item-action>
          <template v-if="canIpexStateProceed(issuer.state)">
            <v-list-item-action class="ml-3">
              <v-btn
                variant="outlined"
                color="accent"
                :loading="ipexProgressing"
                @click="progressIpex(issuer)"
                >{{ oobiIpexButtonTextMap.get(issuer.state) }}</v-btn
              >
            </v-list-item-action>
          </template>

          <!-- TODO: 後でprogressIpexにYes/No Dialogつける -->
          <!-- <v-list-item-action>
            <v-dialog v-model="deletionDialogShown" max-width="30%">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon variant="flat">
                  <v-icon color="secondary">mdi-delete</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-toolbar color="accent" class="px-4 text-white"
                  >Warn!</v-toolbar
                >
                <v-card-text class="pa-4">
                  <span class="text-glay">{{ MESSAGE_ON_DELETION }}</span>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    :loading="removeLoader"
                    color="accent"
                    variant="flat"
                    @click="removeArchive(i)"
                  >
                    OK
                  </v-btn>
                  <v-btn
                    color="accent"
                    variant="text"
                    @click="cancelDeletion()"
                  >
                    キャンセル
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-list-item-action> -->
        </template>
        <v-divider class="mt-2"></v-divider>
      </v-list-item>
    </v-list>
    <div class="float-button-wrapper">
      <v-btn
        size="large"
        icon
        color="accent"
        class="mr-3 mb-3"
        @click="refreshIssuerList()"
      >
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </div>
    <issuer-register-dialog @issuerRegistered="issuerRegistered" />
    <v-snackbar
      :timeout="2000"
      v-model="noticeAfterIpex"
      centered
      variant="tonal"
      location="center"
      close-on-content-click
      color="primary"
    >
      {{ MESSAGE_ON_IPEX_PROGRESS }}
    </v-snackbar>
    <v-snackbar
      :timeout="2000"
      v-model="noticeAfterIssuerRegistered"
      centered
      variant="tonal"
      location="center"
      close-on-content-click
      color="primary"
    >
      {{ MESSAGE_ON_ISSUER_REGISTERED }}
    </v-snackbar>
  </template>
  <template v-else>
    <v-progress-linear
      indeterminate
      color="accent-lighten-2"
    ></v-progress-linear>
  </template>
</template>
<script setup lang="ts">
import { Signifies } from "@/modules/repository";
import { ref, onMounted, type Ref } from "vue";
import { useRouter } from "vue-router";
import IssuerRegisterDialog from "@/components/IssuerRegisterDialog.vue";
import { type OobiIpexState, formatState } from "@/modules/oobi-ipex";
import { ExtendedContact } from "@/modules/repository";

const renderReady = ref(false);

const emit = defineEmits<{
  (e: "pageName", pageName: string): void;
}>();

onMounted(async () => {
  await showIssuers();
  emit("pageName", "Issuer List");
  renderReady.value = true;
});

const issuers: Ref<ExtendedContact[]> = ref([]);
const showIssuers = async () => {
  const repository = await Signifies.getInstance();
  issuers.value = await repository.getIssuers();

  // for debugging purpose only
  // repository.inspect();
};

const refreshIssuerList = async () => {
  renderReady.value = false;
  setTimeout(async () => {
    await showIssuers();
    renderReady.value = true;
  }, 700);
};

const router = useRouter();
const navigateToIssuerDetail = async (issuer: ExtendedContact) => {
  router.push({
    name: "IssuerDetail",
    params: { aid: issuer.id },
  });
};

const noticeAfterIpex = ref(false);
const ipexProgressing = ref(false);
const MESSAGE_ON_IPEX_PROGRESS = "Done processing.";
const progressIpex = async (issuer: ExtendedContact) => {
  ipexProgressing.value = true;
  const repository = await Signifies.getInstance();
  await repository.progressIpex(issuer);

  await showIssuers();
  ipexProgressing.value = false;
  noticeAfterIpex.value = true;
};

const noticeAfterIssuerRegistered = ref(false);
const MESSAGE_ON_ISSUER_REGISTERED = "New issuer has been registered.";
const issuerRegistered = async () => {
  noticeAfterIssuerRegistered.value = true;
  await showIssuers();
};

const oobiIpexButtonTextMap: Map<OobiIpexState, string> = new Map();
oobiIpexButtonTextMap.set("2_1_challenge_received", "Send Response");
oobiIpexButtonTextMap.set("3_2_response_received", "Validate Response");
oobiIpexButtonTextMap.set(
  "4_1_credential_received",
  "Accept Issued Credential",
);

/**
 *  Check if the Ipex State can proceed.
 *
 * @param state Ipex State
 * @returns can proceed or not
 */
const canIpexStateProceed = (state: OobiIpexState): boolean => {
  return (
    state === "2_1_challenge_received" ||
    state === "3_2_response_received" ||
    state === "4_1_credential_received"
  );
};
</script>
<style scoped>
.float-button-wrapper {
  width: 5vw;
  left: 90vw;
  height: 5vh;
  top: 95vh;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
