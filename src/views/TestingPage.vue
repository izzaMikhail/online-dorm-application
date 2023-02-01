<script setup>
import { computed } from "vue";
import { useApplicationStore } from "../stores/applications";
import { useDormStore } from "../stores/dorms";
import { useUserStore } from "../stores/users";

const application_store = useApplicationStore();
// const dorm_store = useDormStore();
// const user_store = useUserStore();

application_store.$reset;

const user = () => {
  if (user_store.users.username.value == "20-1-00751") {
    console.log("The user is a male student");
  }
};

// console.log("Semester: ", application_store.applications)
// console.log("Length: ", application_store.applications.length)
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center flex-col">
    <div v-for="app in application_store.applications">
      <span class="text-xl p-5"> {{ app.dorm_id }}</span>
      <span class="text-xl p-5"> {{ app.semester }}</span>
      <span class="text-xl p-5"> {{ app.mode_of_payment }}</span>
    </div>
    <!----->
    <div v-for="dorm in dorm_store.dorms">
      <span class="text-xl p-5"> {{ dorm.id }}</span>
      <span class="text-xl p-5"> {{ dorm.dorm_name }}</span>
      <span class="text-xl p-5"> {{ dorm.dorm_location }}</span>
    </div>
    <!----->
  </div>
</template>
