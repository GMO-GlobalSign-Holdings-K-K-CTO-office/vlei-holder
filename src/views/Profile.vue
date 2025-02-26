<template>
  <div>
    <template v-if="renderReady">
      <div>
        <v-container>
          <v-row justify="center" class="mt-5">
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
        </v-container>
      </div>
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
import { Signifies, type Profile } from "@/modules/repository";
const renderReady = ref(false);

const profile: Ref<Profile | null> = ref(null);
const showProfile = async () => {
  const repository = await Signifies.getInstance();
  profile.value = await repository.getProfile();

  // for debugging purpose only
  // await repository.inspect();
};

const emit = defineEmits<{
  (e: "pageName", pageName: string): void;
}>();
onMounted(async () => {
  await showProfile();
  emit("pageName", "Profile");
  renderReady.value = true;
});
</script>
<style scoped></style>
