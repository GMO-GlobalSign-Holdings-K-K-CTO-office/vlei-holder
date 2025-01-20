<template>
  <di class="d-flex justify-center align-center login-container">
    <v-card rounded="lg">
      <v-img
        src="/login-img.jpg"
        width="30rem"
        class="text-white align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-card-title>ACDC Holder</v-card-title>
      </v-img>
      <v-form ref="form">
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
            class="my-5"
            variant="outlined"
            color="accent"
            @click="init"
            :loading="initLoader"
            >Start</v-btn
          >
          <v-btn
            class="my-5"
            variant="outlined"
            color="accent"
            @click="createMasterSecret"
            :loading="secretCreationLoader"
            >Create Secret</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card>
  </di>
  <v-snackbar v-model="newSecretSnackbar" color="primary" multi-line="true">
    Your master secret is {{ masterSecret }}
    <template v-slot:actions>
      <v-btn color="accent" variant="text" @click="newSecretSnackbar = false">
        Close
      </v-btn>
    </template>
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
const secretCreationLoader = ref(false);
const newSecretSnackbar = ref(false);

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
    await signifyRepository.inspect();
  }

  router.push("/");
};
// Note: OOBI URLの作り方
// const oobi = await client.oobis().get("myAid", "agent");
// console.log(JSON.stringify(oobi, null, 2));

// Rotation周り
// const x = await client.identifiers().rotate("myAid");

// Note: VC周り
// const y = await client.credentials().xxx()

// Note: IPEX周り
// const z = await client.ipex().admit()

// ------

const createMasterSecret = async () => {
  secretCreationLoader.value = true;
  masterSecret.value = await Signifies.generateMasterSecret();
  secretCreationLoader.value = false;
  newSecretSnackbar.value = true;
};
</script>
<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to left, rgb(var(--v-theme-on-primary)), #4bbfc3);
}
</style>
