<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="w-full h-fit" v-if="$route.path.includes('/')">
    <router-view />
  </div>
</template>
