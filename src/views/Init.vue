<template>
  <div class="d-flex justify-center align-center login-container">
    <v-card rounded="lg">
      <v-img
        src="/login-img.jpg"
        width="30rem"
        class="text-white align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-card-title>ACDC Holder</v-card-title>
      </v-img>
      <v-form ref="form" class="mx-5 mt-2">
        <v-text-field
          v-model="masterSecret"
          variant="underlined"
          autocomplete
          :type="secretHidden ? 'password' : 'text'"
          label="Master Secret"
          prepend-icon="mdi-lock"
          :append-icon="secretHidden ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append="secretHidden = !secretHidden"
          color="accent"
          :rules="secretRules"
        ></v-text-field>

        <v-card-actions class="d-flex align-center flex-column">
          <v-btn
            class="mt-1 mb-2"
            variant="outlined"
            color="accent"
            @click="init"
            :loading="initLoader"
            >Start</v-btn
          >
          <v-btn
            class="my-3"
            color="accent"
            @click="createMasterSecret"
            :loading="secretCreationLoader"
            >Create Secret</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
  <v-snackbar
    v-model="newSecretSnackbar"
    color="accent"
    multi-line
    timeout="10000"
    variant="outlined"
  >
    {{ masterSecret }}
    <template v-slot:actions>
      <v-btn icon @click="copySecretText">
        <v-icon size="small">mdi-content-copy</v-icon>
      </v-btn>
      <v-btn color="accent" variant="text" @click="newSecretSnackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-snackbar
    v-model="secretCopiedSnackbar"
    location="center"
    color="accent"
    timeout="2000"
  >
    <div class="d-flex justify-center">Secret Copied!</div>
  </v-snackbar>
</template>
<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";
import { useRouter } from "vue-router";
import { Signifies } from "@/modules/repository";
import { ErrorMessage } from "@/types";
const router = useRouter();

const form: Ref<any> = ref(null);

const masterSecret = ref("");
const secretHidden = ref(true);
const secretRules = [
  (v: string): boolean | ErrorMessage => !!v || "Master secret is required",
];

const initLoader = ref(false);

onMounted(async () => {});

const init = async () => {
  if ((await form.value.validate()).valid) {
    initLoader.value = true;

    const signifyRepository = await Signifies.getInstanceWithSecret(
      masterSecret.value,
    );

    await signifyRepository.createOrRetrieveAid();
    await signifyRepository.createVcRegistry();
    await signifyRepository.importVcSchema();

    // for development purpose
    // await signifyRepository.inspect();
  }

  router.push("/");
};

const secretCreationLoader = ref(false);
const newSecretSnackbar = ref(false);
const createMasterSecret = async () => {
  secretCreationLoader.value = true;
  masterSecret.value = await Signifies.generateMasterSecret();
  secretCreationLoader.value = false;
  newSecretSnackbar.value = true;
};

const secretCopiedSnackbar = ref(false);
const copySecretText = () => {
  navigator.clipboard.writeText(masterSecret.value);
  secretCopiedSnackbar.value = true;
};
</script>
<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to left, rgb(var(--v-theme-on-primary)), #0075a9);
}
</style>
