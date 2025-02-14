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
            <tr v-for="(value, key) in profile" :key="key">
              <td>{{ key }}</td>
              <td>
                {{ value }}
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-row>

      <!-- TODO: this is only mockup-->
      <v-row justify="center" class="ma-5">
        <v-timeline style="width: 50%">
          <v-timeline-item
            dot-color="secondary"
            v-for="(history, index) in rotationHistory"
            :key="index"
          >
            <!-- <template v-slot:icon>
              <v-icon>mdi-clock</v-icon>
            </template> -->
            <template v-slot:default>
              <v-card>
                <v-card-title>
                  {{ history.createdDate }}
                </v-card-title>
                <v-card-text>
                  {{ history.publicKey }}
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
import {
  Signifies,
  type Profile,
  type RotationHistory,
} from "@/modules/repository";
const renderReady = ref(false);
const profile: Ref<Profile | null> = ref(null);
const rotationHistory: Ref<RotationHistory[] | null> = ref(null);

const MESSAGE_AFTER_KEY_ROTATION = "Key rotation has been completed.";

const showProfile = async () => {
  const repository = await Signifies.getInstance();
  profile.value = await repository.getProfile();
  rotationHistory.value = await repository.getRotationHistory();

  // for debugging purpose only
  await repository.inspect();
};

onMounted(async () => {
  await showProfile();
  renderReady.value = true;
});

const noticeAfterKeyRotation = ref(false);
const onKeyRotated = async () => {
  noticeAfterKeyRotation.value = true;
  await showProfile();
};
</script>
<style scoped></style>
