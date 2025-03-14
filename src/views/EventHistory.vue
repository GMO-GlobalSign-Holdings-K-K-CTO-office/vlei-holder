<template>
  <div>
    <template v-if="renderReady">
      <v-row justify="center" class="ma-5">
        <v-timeline>
          <v-timeline-item
            dot-color="success"
            v-for="(event, index) in eventHistory"
            :key="index"
          >
            <template v-slot:icon>
              <v-icon>{{
                keyEventTypeIconMap[event.ked.t] ?? "mdi-help"
              }}</v-icon>
            </template>
            <template v-slot:default>
              <v-card
                variant="outlined"
                :color="keyEventTypeColorMap[event.ked.t] ?? 'primary'"
              >
                <v-card-text>
                  Sequence Number: {{ event.ked.s }} <br />
                  Event Type: {{ keyEventTypeLabelMap[event.ked.t] }}
                  <br />
                  <span v-if="event.ked.k">
                    Pub Keys: {{ event.ked.k.join(",") }} <br />
                  </span>
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
          location="bottom left"
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
import { Signifies, type KeyEvent, KeyEventType } from "@/modules/repository";
const renderReady = ref(false);
const MESSAGE_AFTER_KEY_ROTATION = "Key rotation has been completed.";

const eventHistory: Ref<KeyEvent[] | null> = ref(null);

const keyEventTypeColorMap: Record<KeyEventType, string> = {
  icp: "primary",
  ixn: "secondary",
  rot: "accent",
};

const keyEventTypeIconMap: Record<KeyEventType, string> = {
  icp: "mdi-key-star",
  ixn: "mdi-database",
  rot: "mdi-rotate-3d-variant",
};

const keyEventTypeLabelMap: Record<KeyEventType, string> = {
  icp: "Key Creation",
  ixn: "Transaction",
  rot: "Key Rotation",
};

const showEventHistory = async () => {
  const repository = await Signifies.getInstance();
  eventHistory.value = await repository.getEventHistory();

  // for debugging purpose only
  // await repository.inspect();
};

const noticeAfterKeyRotation = ref(false);
const onKeyRotated = async () => {
  noticeAfterKeyRotation.value = true;
  await showEventHistory();
};

const emit = defineEmits<{
  (e: "pageName", pageName: string): void;
}>();
onMounted(async () => {
  await showEventHistory();
  emit("pageName", "Event History");
  renderReady.value = true;
});
</script>
<style scoped></style>
