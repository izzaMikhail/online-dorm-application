<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useUserStore } from "../stores/users";
import router from "../router";
const routeName = computed(() => {
  return useRouter().currentRoute.value.name;
});

const user_store = useUserStore();

const Logout = () => {
  user_store.deleteCurrentUser();

  // console.log(!null);

  if (user_store.currentUser == null) {
    router.push("/login");
  }
};
//console.log("Active route: ", routeName.value);
</script>

<template>
  <div
    class="flex flex-1 overflow-hidden h-screen w-full bg-[#EEEEEE] fixed font-roboto"
  >
    <aside
      class="hidden lg:block bg-sidebar bg-no-repeat bg-center bg-cover w-72 overflow-y-auto"
    >
      <section
        class="h-full w-full bg-black opacity-80 p-5 overflow-auto xl:overflow-hidden"
      >
        <div class="flex justify-center -ml-8">
          <img src="/cumulusone_green.png" class="w-8 h-5 mr-1 mt-1" />
          <h1 class="text-white text-lg font-medium">MYVSU PORTAL</h1>
        </div>
        <div class="py-5">
          <hr class="opacity-50" />
        </div>
        <div class="flex justify-center">
          <h2 class="text-white text-md font-normal">Main Campus</h2>
        </div>
        <div class="flex text-white mt-8">
          <ul class="flex flex-col w-full text-sm text-white px-2 space-y-3">
            <li
              class="w-full h-12 flex items-center rounded"
              :class="
                routeName == 'dashboard'
                  ? 'active-tab-class'
                  : 'inactive-tab-class'
              "
            >
              <router-link to="/main/dashboard" class="flex items-center">
                <img src="/dashboard-icon.png" class="w-6 h-6 ml-4" />
                <span class="ml-4">Dashboard</span>
              </router-link>
            </li>
            <li
              class="w-full h-12 flex items-center rounded"
              :class="
                routeName == 'profile'
                  ? 'active-tab-class'
                  : 'inactive-tab-class'
              "
            >
              <router-link to="/main/profile" class="flex items-center">
                <img src="/profile-icon.png" class="w-6 h-6 ml-4" />
                <span class="ml-4">User Profile</span>
              </router-link>
            </li>
            <li class="w-full h-12 flex items-center rounded">
              <router-link to="" class="flex items-center">
                <img src="/class-icon.png" class="w-6 h-6 ml-4" />
                <span class="ml-4">My Class</span>
              </router-link>
            </li>
            <li class="w-full h-12 flex items-center rounded">
              <router-link to="" class="flex items-center">
                <img src="/chart.png" class="w-8 h-8 ml-3" />
                <span class="ml-4">Grades</span>
              </router-link>
            </li>
            <li class="w-full h-12 flex items-center rounded">
              <router-link to="" class="flex items-center">
                <img src="/payment-icon.png" class="w-6 h-6 ml-3" />
                <span class="ml-4">Payments</span>
              </router-link>
            </li>
            <li class="w-full h-12 flex items-center rounded">
              <router-link to="" class="flex items-center">
                <img src="/settings-icon.png" class="w-6 h-6 ml-3" />
                <span class="ml-4">Enrollment</span>
              </router-link>
            </li>
            <li class="w-full h-12 flex items-center rounded">
              <router-link to="" class="flex items-center">
                <img src="/settings-icon.png" class="w-6 h-6 ml-3" />
                <span class="ml-4">Medical Appointment</span>
              </router-link>
            </li>
            <li
              class="w-full h-12 flex items-center rounded"
              :class="
                routeName == 'dorm-application'
                  ? 'active-tab-class'
                  : 'inactive-tab-class'
              "
            >
              <router-link
                to="/main/dorm-application"
                class="flex items-center"
              >
                <img src="/application-icon.png" class="w-6 h-6 ml-3" />
                <span class="ml-4">Dorm Application</span>
              </router-link>
            </li>
            <li class="w-full h-12 flex items-center rounded">
              <router-link to="" class="flex items-center">
                <img src="/settings-icon.png" class="w-6 h-6 ml-3" />
                <span class="ml-4">TPES</span>
              </router-link>
            </li>
            <li class="w-full h-12 flex items-center rounded">
              <button class="flex items-center" @:click="Logout()">
                <img src="/logout-icon.png" class="w-8 h-8 ml-1" />
                <span class="ml-4">Logout </span>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </aside>

    <main class="flex flex-col w-full overflow-y-auto paragraph">
      <header class="w-full h-16 flex items-center px-9 py-10">
        <ul class="flex w-full">
          <li class="flex items-center w-1/2">
            <img src="/profile.jpg" class="h-8 mr-3 rounded-full" />
            <span class="text-xl text-gray-500 font-normal"
              >SY 2022 - 2023 / First Semester</span
            >
          </li>
          <li class="w-1/2 grid justify-items-end">
            <img src="/bell-icon.png" class="w-6 h-6" />
          </li>
        </ul>
      </header>
      <section class="w-full h-full">
        <router-view />
      </section>
    </main>
  </div>
</template>
<style>
.active-tab-class {
  background-color: #065601;
}
</style>
