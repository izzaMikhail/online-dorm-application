<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";
const routeName = computed(() => {
  return useRouter().currentRoute.value.name;
});
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
          <ul class="flex flex-col w-full text-sm text-white">
            <li class="flex justify-start">
              <router-link
                :class="
                  routeName == 'dashboard'
                    ? 'active-tab-class'
                    : 'inactive-tab-class'
                "
                to="/main/dashboard"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 px-4 outline-none"
              >
                <img src="/dashboard-icon.png" class="w-6 h-6" />
                <span class="ml-4">Dashboard</span>
              </router-link>
            </li>
            <li class="flex justify-start">
              <router-link
                :class="
                  routeName == 'profile'
                    ? 'active-tab-class'
                    : 'inactive-tab-class'
                "
                to="/main/profile"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 px-4 outline-none"
              >
                <img src="/profile-icon.png" class="w-6 h-6" />
                <span class="ml-4">User Profile</span>
              </router-link>
            </li>
            <li class="flex justify-start">
              <router-link
                to="#"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 px-4 outline-none"
              >
                <img src="/class-icon.png" class="w-6 h-5" />
                <span class="ml-4">My Class</span>
              </router-link>
            </li>
            <li class="flex justify-start">
              <router-link
                to="#"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 px-4 outline-none"
              >
                <img src="/chart.png" class="w-9 h-8" />
                <span class="ml-3">Grades</span>
              </router-link>
            </li>
            <li class="flex justify-start">
              <router-link
                to="#"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 px-4 outline-none"
              >
                <img src="/payment-icon.png" class="w-7 h-6" />
                <span class="ml-4">Payments</span>
              </router-link>
            </li>
            <li class="flex justify-start">
              <router-link
                to="#"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 px-4 outline-none"
              >
                <img src="/settings-icon.png" class="w-6 h-6" />
                <span class="ml-4">Enrollment</span>
              </router-link>
            </li>
            <li class="flex justify-start">
              <router-link
                to="#"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 px-4 outline-none"
              >
                <img src="/settings-icon.png" class="w-6 h-6" />
                <span class="ml-4">Medical Appointment</span>
              </router-link>
            </li>
            <li class="flex justify-start">
              <router-link
                :class="
                  routeName == 'dorm-application'
                    ? 'active-tab-class'
                    : 'inactive-tab-class'
                "
                to="/main/dorm-application"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 px-4 outline-none"
              >
                <img src="/application-icon.png" class="w-7 h-7" />
                <span class="ml-4">Dorm Application</span>
              </router-link>
            </li>
            <li class="flex justify-start">
              <router-link
                to="#"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 px-4 outline-none"
              >
                <img src="/settings-icon.png" class="w-6 h-6" />
                <span class="ml-4">TPES</span>
              </router-link>
            </li>
            <li class="flex justify-start">
              <router-link
                to="/login"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 px-2 outline-none"
              >
                <img src="/logout-icon.png" class="w-8 h-8" />
                <span class="ml-4">Logout</span>
              </router-link>
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
