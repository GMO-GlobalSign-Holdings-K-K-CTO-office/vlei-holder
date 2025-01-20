<template>
  <div>
    <template v-if="renderReady">
      <v-row justify="center" class="ma-5">
        <v-table class="elevation-2" style="width: 50%">
          <thead>
            <tr>
              <th class="text-left">Item</th>
              <th class="text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in contact" :key="key">
              <td>{{ key }}</td>
              <td>
                {{ value }}
              </td>
            </tr>
          </tbody>
        </v-table>
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
import { useRoute } from "vue-router";
import { Signifies, type Contact } from "@/modules/repository";

const renderReady = ref(false);
const contact: Ref<Contact | null> = ref(null);

const route = useRoute();
const showDetail = async () => {
  const repository = await Signifies.getInstance();
  const prefix = route.params.pre;
  if (Array.isArray(prefix)) {
    throw new Error("Invalid pre");
  } else {
    contact.value = await repository.getHolder(prefix);
    console.log(`Contact: ${JSON.stringify(contact.value, null, 2)}`);
  }

  // for debugging purpose only
  await repository.inspect();
};

onMounted(async () => {
  await showDetail();
  renderReady.value = true;
});
</script>
<style scoped></style>
