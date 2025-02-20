<template>
  <div>
    <template v-if="renderReady">
      <v-row justify="center" class="ma-5">
        <v-timeline>
          <v-timeline-item
            dot-color="secondary"
            v-for="(event, index) in eventHistory"
            :key="index"
          >
            <!-- <template v-slot:icon>
              <v-icon>mdi-clock</v-icon>
            </template> -->
            <template v-slot:default>
              <v-card>
                <v-card-text>
                  Pub Keys: {{ event.ked.k?.join(",") }} <br />Sequence Number:
                  {{ event.ked.s }}
                </v-card-text>
              </v-card>
            </template>
          </v-timeline-item>
        </v-timeline>
        <v-snackbar
          :timeout="2000"
          v-model="noticeAfterKeyRotation"
          centered
          variant="tonal"
          location="center"
          close-on-content-click
          color="primary"
        >
          {{ MESSAGE_AFTER_KEY_ROTATION }}
        </v-snackbar>
        <key-rotation-dialog @keyRotated="onKeyRotated()" />
      </v-row>
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
import KeyRotationDialog from "@/components/KeyRotationDialog.vue";
import { Signifies, type KeyEvent } from "@/modules/repository";
const renderReady = ref(false);
const MESSAGE_AFTER_KEY_ROTATION = "Key rotation has been completed.";

const eventHistory: Ref<KeyEvent[] | null> = ref(null);
const showEventHistory = async () => {
  const repository = await Signifies.getInstance();
  eventHistory.value = await repository.getEventHistory();

  // for debugging purpose only
  await repository.inspect();
};

const emit = defineEmits<{
  (e: "pageName", pageName: string): void;
}>();
onMounted(async () => {
  await showEventHistory();
  emit("pageName", "Event History");
  renderReady.value = true;
});

const noticeAfterKeyRotation = ref(false);
const onKeyRotated = async () => {
  noticeAfterKeyRotation.value = true;
  await showEventHistory();
};
</script>
<style scoped></style>
