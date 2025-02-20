<template>
  <v-dialog
    v-model="uiState.dialog"
    persistent
    transition="dialog-bottom-transition"
    width="55vw"
  >
    <template v-slot:activator="{ props }">
      <div class="float-button-wrapper">
        <v-btn
          v-bind="props"
          size="large"
          icon
          color="accent"
          class="mr-3 mb-3"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-toolbar color="accent" clipped-right>
        <v-app-bar-title class="white--text"
          >Accept Challenge Word</v-app-bar-title
        >
        <v-spacer></v-spacer>
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container>
        <v-row>
          <v-card class="mx-auto my-2" variant="flat" style="width: 50vw">
            <v-card-subtitle class="mt-3"
              >Please input a challenge word</v-card-subtitle
            >
            <v-spacer></v-spacer>
            <v-form ref="challengeAcceptanceForm" class="px-4 py-2">
              <v-textarea
                clearable
                label="Challenge Word"
                prepend-icon="mdi-pencil"
                variant="outlined"
                v-model="uiState.challenge"
                :rules="uiState.challengeRules"
                class="mt-4"
                color="accent"
              ></v-textarea>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :loading="uiState.loader"
                class="white--text"
                color="accent"
                variant="outlined"
                @click="acceptChallenge()"
              >
                Accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref, reactive, type Ref } from "vue";
import { Signifies, type Contact } from "@/modules/repository";

const challengeAcceptanceForm: Ref<any> = ref(null);
const uiState: {
  dialog: boolean;
  loader: boolean;
  challenge: string | undefined;
  challengeRules: [(v: string) => boolean | string];
} = reactive({
  dialog: false,
  loader: false,
  challenge: undefined,
  challengeRules: [(v: string) => !!v || "OOBI is required."],
});

const closeDialog = () => {
  uiState.dialog = false;
};

const emit = defineEmits<{
  (e: "challengeAccepted"): void;
}>();

defineProps({
  contactName: {
    type: String,
    required: true,
  },
  contactPrefix: {
    type: String,
    required: true,
  },
});

const acceptChallenge = async () => {
  if ((await challengeAcceptanceForm.value.validate()).valid) {
    uiState.loader = true;

    const repository = await Signifies.getInstance();
    const contact: Contact = {
      challenge: [uiState.challenge as string],
      name: contactName,
      pre: contactPrefix,
      state: "2_1_challenge_received",
    };
    await repository.progressIpex(contact);

    uiState.loader = false;
    uiState.dialog = false;

    emit("challengeAccepted");
  }
};
</script>
<style scoped>
.float-button-wrapper {
  width: 5vw;
  left: 95vw;
  height: 5vh;
  top: 95vh;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
