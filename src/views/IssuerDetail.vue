<template>
  <div>
    <template v-if="renderReady">
      <v-row justify="center" class="ma-5">
        <v-table class="elevation-2" style="width: 50%">
          <thead>
            <tr>
              <th class="text-left text-secondary">Item</th>
              <th class="text-left text-secondary">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in contact" :key="key">
              <template v-if="key !== 'challenges'">
                <td>{{ key }}</td>
                <td>
                  <template v-if="key === 'state'">
                    {{ getStateLabel(value as OobiIpexState) }}
                  </template>
                  <template v-else>
                    {{ value }}
                  </template>
                </td>
              </template>
            </tr>
          </tbody>
        </v-table>
      </v-row>

      <!-- Challenge Acceptance Part -->
      <challenge-acceptance-dialog
        :contact="contact"
        @challengeAccepted="challengeAccepted"
      />
      <v-snackbar
        v-model="challengeAcceptedSnackbar"
        close-on-content-click
        color="accent"
        timeout="2000"
        variant="tonal"
      >
        <div class="d-flex justify-center">
          Challenge Accepted & Response Sent!
        </div>
      </v-snackbar>

      <!-- Challenge Generation Part -->
      <div class="float-button-wrapper">
        <v-btn
          size="large"
          icon
          color="accent"
          class="mr-3 mb-3"
          @click="generateChallenge"
        >
          <v-icon>mdi-format-color-text</v-icon>
        </v-btn>
      </div>
      <v-snackbar
        v-model="challengeGenSnackbar"
        color="accent"
        multi-line
        vertical
        timeout="10000"
        variant="outlined"
      >
        {{ challengeWord }}
        <template v-slot:actions>
          <v-btn icon @click="copyChallengeText">
            <v-icon size="small">mdi-content-copy</v-icon>
          </v-btn>
          <v-btn
            color="accent"
            variant="text"
            @click="challengeGenSnackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <v-snackbar
        v-model="challengeCopiedSnackbar"
        location="center"
        color="accent"
        timeout="2000"
        variant="tonal"
      >
        <div class="d-flex justify-center">Challenge Word Copied!</div>
      </v-snackbar>
    </template>
    <template v-else>
      <v-progress-linear
        indeterminate
        color="accent-lighten-2"
      ></v-progress-linear>
    </template>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import { Signifies, type ExtendedContact } from "@/modules/repository";
import { type OobiIpexState } from "@/modules/oobi-ipex";
import { getStateLabel } from "@/modules/view-common";
import ChallengeAcceptanceDialog from "@/components/ChallengeAcceptanceDialog.vue";
import { IllegalStateException } from "@/modules/exception";

const renderReady = ref(false);
const contact: Ref<ExtendedContact | null> = ref(null);

const route = useRoute();

const showDetail = async () => {
  const aid = route.params.aid;

  if (Array.isArray(aid)) {
    throw new Error("Invalid AID");
  } else {
    const repository = await Signifies.getInstance();
    contact.value = await repository.getIssuer(aid);
    console.log(`Issuer: ${JSON.stringify(contact.value, null, 2)}`);
  }

  // for debugging purpose only
  // await repository.inspect();
};

// Challenge Acceptance Part
const challengeAcceptedSnackbar = ref(false);
const challengeAccepted = async () => {
  renderReady.value = false;
  await showDetail();
  renderReady.value = true;
  challengeAcceptedSnackbar.value = true;
};

// Challenge Generation Part
const challengeGenSnackbar = ref(false);
const challengeCopiedSnackbar = ref(false);
const challengeWord = ref("");

const generateChallenge = async () => {
  const repository = await Signifies.getInstance();
  challengeWord.value = await repository.generateChallenge();

  if (!contact.value) {
    throw new IllegalStateException("Contact is not defined");
  }
  Signifies.setChallengeWord(contact.value, challengeWord.value);
  challengeGenSnackbar.value = true;
};

const copyChallengeText = () => {
  navigator.clipboard.writeText(challengeWord.value);
  challengeCopiedSnackbar.value = true;
};

const emit = defineEmits<{
  (e: "pageName", pageName: string): void;
}>();

onMounted(async () => {
  await showDetail();
  emit("pageName", "Issuer Detail");
  renderReady.value = true;
});
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
