<template>
  <div>
    <!--  Header -->
    <v-app-bar color="primary" app>
      <!-- Left Part -->
      <v-app-bar-nav-icon
        color="white"
        @click.stop="navDrawn = !navDrawn"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">{{ pageName }}</v-toolbar-title>
      <!-- Right Part -->
      <v-btn
        :loader="oobiLoader"
        class="text-white mx-3"
        variant="outlined"
        @click="getOobi"
        >Get Invitation</v-btn
      >
      <v-btn
        class="text-white"
        variant="outlined"
        @click="router.push('/profile')"
        >Profile</v-btn
      >
      <span class="white--text mx-3">{{ myAid }}</span>
    </v-app-bar>

    <!-- Menu(Left Side) -->
    <v-navigation-drawer v-model="navDrawn" app temporary>
      <v-list-item class="my-3">
        <v-list-item-title class="text-h6">ACDC Holder</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item
          v-for="(menu, i) in menus"
          :key="`menu-${i}`"
          link
          @click="closeMenu()"
          :to="menu.to"
          :prepend-icon="menu.icon"
          color="primary"
        >
          <v-list-item-title>{{ menu.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-snackbar
      v-model="oobiSnackbar"
      color="primary"
      class="text-white"
      vertical
    >
      {{ oobi }}
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="oobiSnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Main Area -->
    <v-main>
      <router-view @pageName="setPageName" />
    </v-main>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";
import { type PageName, type PagePath } from "@/types";
import { Signifies } from "@/modules/repository";
import router from "@/router";

const myAid: Ref<string | null> = ref(null);
onMounted(async () => {
  const repository = await Signifies.getInstance();
  myAid.value = await repository.createOrRetrieveAid();
  // myAid.value = (await repository.createOrRetrieveAid())
  //   .substring(0, 30)
  //   .concat("...");

  // for debugging purpose only
  // repository.inspect();
});

// Menu Section (Left Side)
const menusRaw: { icon: string; text: PageName; to: PagePath }[] = [
  { icon: "mdi-collage", text: "Session List", to: "/session-list" },
];

const menus = ref(menusRaw);
const navDrawn = ref(false);
const closeMenu = () => {
  navDrawn.value = false;
};

// ------

// Header Section
const pageName: Ref<string | null> = ref(null);
// handling emitted event
const setPageName = (pageNameHandled: string) => {
  pageName.value = pageNameHandled;
};

const oobi = ref("");
const oobiLoader = ref(false);
const oobiSnackbar = ref(false);
const getOobi = async () => {
  oobiLoader.value = true;
  const repository = await Signifies.getInstance();
  oobi.value = await repository.createOobi();
  oobiSnackbar.value = true;
  oobiLoader.value = false;

  // for debugging purpose only
  repository.inspect();
};
</script>
<style scoped></style>
