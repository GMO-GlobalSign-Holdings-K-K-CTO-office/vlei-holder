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
        <v-app-bar-title class="white--text">Start Session</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container>
        <v-row>
          <v-card class="mx-auto my-2" variant="flat" style="width: 50vw">
            <v-card-subtitle class="mt-3"
              >Please input a holder's OOBI</v-card-subtitle
            >
            <v-spacer></v-spacer>
            <v-form ref="holderRegisterForm" class="px-4 py-2">
              <v-text-field
                prepend-icon="mdi-pencil"
                color="accent"
                v-model="uiState.lei"
                label="Legal Entity Identifier"
                :rules="uiState.leiRule"
                variant="outlined"
              ></v-text-field>
              <v-textarea
                clearable
                label="OOBI"
                prepend-icon="mdi-pencil"
                variant="outlined"
                v-model="uiState.oobi"
                :rules="uiState.oobiRule"
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
                @click="registerHolder()"
              >
                Register
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
import { Signifies } from "@/modules/repository";

const holderRegisterForm: Ref<any> = ref(null);
const uiState: {
  dialog: boolean;
  loader: boolean;
  lei: string | undefined;
  oobi: string | undefined;
  leiRule: [(v: string) => boolean | string];
  oobiRule: [(v: string) => boolean | string];
} = reactive({
  dialog: false,
  loader: false,
  lei: undefined,
  oobi: undefined,
  leiRule: [(v: string) => !!v || "LEI is required."],
  oobiRule: [(v: string) => !!v || "OOBI is required."],
});

const closeDialog = () => {
  uiState.dialog = false;
};

const emit = defineEmits<{
  (e: "sessionStarted"): void;
}>();

const registerHolder = async () => {
  if ((await holderRegisterForm.value.validate()).valid) {
    uiState.loader = true;

    const oobi = uiState.oobi as string;
    const lei = uiState.lei as string;

    const repository = await Signifies.getInstance();
    await repository.addHolder(oobi, lei);

    uiState.loader = false;
    uiState.dialog = false;

    emit("sessionStarted");
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
