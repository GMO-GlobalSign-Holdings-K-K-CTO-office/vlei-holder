<template>
  <v-dialog v-model="keyRotationDialog" max-width="30%">
    <template v-slot:activator="{ props }">
      <div class="float-button-wrapper">
        <v-btn
          v-bind="props"
          size="large"
          icon
          color="accent"
          class="mr-3 mb-3"
        >
          <v-icon>mdi-rotate-right</v-icon>
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-toolbar color="accent" class="px-4 text-white">{{
        TITLE_ON_ROTATION
      }}</v-toolbar>
      <v-card-text class="pa-4">
        <span class="text-glay">{{ MESSAGE_ON_ROTATION }}</span>
      </v-card-text>
      <v-card-actions class="mb-1">
        <v-spacer></v-spacer>
        <v-btn
          :loading="keyRotationLoader"
          color="accent"
          variant="flat"
          @click="rotateKey()"
        >
          OK
        </v-btn>
        <v-btn color="accent" variant="text" @click="cancelRotation()">
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Signifies } from "@/modules/repository";

const TITLE_ON_ROTATION = "Key Rotation";
const MESSAGE_ON_ROTATION = "Are you sure to rotate the key?";

const emit = defineEmits<{
  (e: "keyRotated"): void;
}>();

const keyRotationDialog = ref(false);
const keyRotationLoader = ref(false);

const rotateKey = async () => {
  keyRotationLoader.value = true;

  const repository = await Signifies.getInstance();
  await repository.rotateKey();

  keyRotationLoader.value = false;
  keyRotationDialog.value = false;
  emit("keyRotated");
};

const cancelRotation = () => {
  keyRotationDialog.value = false;
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
