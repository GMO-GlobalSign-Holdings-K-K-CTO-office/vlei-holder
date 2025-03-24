<template>
  <v-dialog v-model="deletionDialog" max-width="30%">
    <template v-slot:activator="{ props }">
      <div class="float-button-wrapper">
        <v-btn
          v-bind="props"
          size="large"
          icon
          color="accent"
          class="mr-3 mb-3"
        >
          <v-icon>mdi-file-document-remove</v-icon>
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-toolbar color="accent" class="px-4 text-white">{{
        TITLE_ON_DELETION
      }}</v-toolbar>
      <v-card-text class="pa-4">
        <span class="text-glay">{{ MESSAGE_ON_DELETION }}</span>
      </v-card-text>
      <v-card-actions class="mb-1">
        <v-spacer></v-spacer>
        <v-btn
          :loading="deletionLoader"
          color="accent"
          variant="flat"
          @click="deleteCredential()"
        >
          OK
        </v-btn>
        <v-btn color="accent" variant="text" @click="cancelDeletion()">
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Signifies } from "@/modules/repository";

const TITLE_ON_DELETION = "Credential Deletion";
const MESSAGE_ON_DELETION = "Are you sure to delete this credential?";

const props = defineProps({
  credentialId: {
    type: String,
    required: true,
  },
  issuerId: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "credentialDeleted"): void;
}>();

const deletionDialog = ref(false);
const deletionLoader = ref(false);

const deleteCredential = async () => {
  deletionLoader.value = true;

  const repository = await Signifies.getInstance();
  await repository.deleteCredential(props.credentialId, props.issuerId);

  deletionLoader.value = false;
  deletionDialog.value = false;
  emit("credentialDeleted");
};

const cancelDeletion = () => {
  deletionDialog.value = false;
};
</script>
<style scoped>
.float-button-wrapper {
  width: 5vw;
  left: 85vw;
  height: 5vh;
  top: 95vh;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
