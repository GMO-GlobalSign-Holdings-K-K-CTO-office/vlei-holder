<template>
  <div
    class="d-flex align-center flex-column"
    style="width: 100%; height: 90vh"
  >
    <v-img src="/Error.png" width="30rem" />
    <v-btn class="mt-10" color="primary" variant="text" plain @click="goBack()"
      >戻る</v-btn
    >
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => {
  router.push("/");
};
</script>
