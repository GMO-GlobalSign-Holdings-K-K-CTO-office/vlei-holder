<template>
  <template v-if="renderReady">
    <v-list>
      <v-list-item v-for="(holder, i) in holders" :key="`list-${i}`">
        <v-list-item-title class="font-weight-bold">
          {{ holder.name }}
        </v-list-item-title>
        <span>{{ holder.pre }}</span>
        <template v-slot:append>
          <v-list-item-action>
            <v-btn
              variant="outlined"
              color="secondary"
              @click="navigateToHolderDetail(holder.pre)"
              >Detail</v-btn
            >
          </v-list-item-action>
          <v-list-item-action>
            <v-btn
              variant="outlined"
              color="accent"
              :disabled="!canIpexStateProceed(holder.state)"
              :loading="ipexProgressing"
              @click="progressIpex(holder)"
              >{{ oobiIpexButtonTextMap.get(holder.state) }}</v-btn
            >
          </v-list-item-action>

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
        <v-divider></v-divider>
      </v-list-item>
    </v-list>
    <holder-register-dialog @holderRegistered="holderRegistered" />
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
      v-model="noticeAfterHolderRegistered"
      centered
      variant="tonal"
      location="center"
      close-on-content-click
      color="primary"
    >
      {{ MESSAGE_ON_HOLDER_REGISTERED }}
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
import { Signifies, type Contact } from "@/modules/repository";
import { ref, onMounted, type Ref } from "vue";
import { useRouter } from "vue-router";
import HolderRegisterDialog from "@/components/HolderRegisterDialog.vue";
import { OobiIpexState } from "@/modules/oobi-ipex";

const renderReady = ref(false);
const holders: Ref<Contact[]> = ref([]);

const emit = defineEmits<{
  (e: "pageName", pageName: string): void;
}>();

onMounted(async () => {
  await showHolders();
  emit("pageName", "Session List");
  renderReady.value = true;
});

const showHolders = async () => {
  const repository = await Signifies.getInstance();
  holders.value = await repository.getHolders();

  // for debugging purpose only
  repository.inspect();
};

const router = useRouter();
const navigateToHolderDetail = async (pre: string) => {
  router.push({ name: "HolderDetail", params: { pre } });
};

const noticeAfterIpex = ref(false);
const ipexProgressing = ref(false);
const MESSAGE_ON_IPEX_PROGRESS = "Done processing.";
const progressIpex = async (holder: Contact) => {
  ipexProgressing.value = true;
  const repository = await Signifies.getInstance();
  await repository.progressIpex(holder);

  await showHolders();
  ipexProgressing.value = false;
  noticeAfterIpex.value = true;

  // for debugging purpose only
  repository.inspect();
};

const noticeAfterHolderRegistered = ref(false);
const MESSAGE_ON_HOLDER_REGISTERED = "New holder registered.";
const holderRegistered = async () => {
  noticeAfterHolderRegistered.value = true;
  await showHolders();
};

const oobiIpexButtonTextMap: Map<OobiIpexState, string> = new Map();
oobiIpexButtonTextMap.set("1_init", "Init");
oobiIpexButtonTextMap.set("2_1_challenge_received", "Send Response");
oobiIpexButtonTextMap.set("2_2_response_sent", "Response Sent");
oobiIpexButtonTextMap.set("2_3_response_validated", "Send Challenge");
oobiIpexButtonTextMap.set("3_1_challenge_sent", "Challenge Sent");
oobiIpexButtonTextMap.set("3_2_response_received", "Validate Response");
oobiIpexButtonTextMap.set("3_3_response_validated", "Reseponse Validated");
oobiIpexButtonTextMap.set(
  "4_1_credential_received",
  "Accept Issued Credential",
);
oobiIpexButtonTextMap.set("4_2_credential_accepted", "Credential Accepted");

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
<style scoped></style>
