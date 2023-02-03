<script setup>
import { ref } from "vue";
import { useApplicationStore } from "../stores/applications";

const application_store = useApplicationStore();
const total_applicants = ref(application_store.applications.length);
</script>

<template>
  <div class="w-full h-full flex flex-col font-roboto">
    <h1 class="text-[#666666] text-2xl ml-9">Dashboard</h1>
    <div
      class="bg-[#065601] w-[1130px] h-[55px] flex items-center px-5 rounded mx-auto mt-24"
    >
      <p class="text-white px-5 text-lg">
        Total Dormitory Applications: {{ total_applicants }}
      </p>
    </div>
  </div>
</template>
