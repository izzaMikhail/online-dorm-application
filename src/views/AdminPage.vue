<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useUserStore } from "../stores/users";

const routeName = computed(() => {
  return useRouter().currentRoute.value.name;
});
//console.log("Active route: ", routeName.value);
const user_store = useUserStore();

const Logout = () => {
  user_store.deleteCurrentUser();

  // console.log(!null);

  if (user_store.currentUser == null) {
    router.push("/login");
  }
};
</script>

<template>
  <div
    class="flex flex-1 overflow-hidden h-screen w-full bg-[#EEEEEE] fixed font-roboto"
  >
    <aside
      class="hidden lg:block bg-sidebar bg-no-repeat bg-center bg-cover w-72 overflow-y-auto"
    >
      <section
        class="h-full w-full bg-black p-5 opacity-80 overflow-auto xl:overflow-hidden"
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
                  routeName == 'admin-dashboard'
                    ? 'active-tab-class'
                    : 'inactive-tab-class'
                "
                to="/admin/dashboard"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 ml-2 outline-none"
              >
                <img src="/dashboard-icon.png" class="w-6 h-6" />
                <span class="ml-4">Dashboard</span>
              </router-link>
            </li>
            <li class="flex justify-start">
              <router-link
                :class="
                  routeName == 'admin-profile'
                    ? 'active-tab-class'
                    : 'inactive-tab-class'
                "
                to="/admin/profile"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 ml-1 outline-none"
              >
                <img src="/profile-icon.png" class="w-6 h-6" />
                <span class="ml-4">User Profile</span>
              </router-link>
            </li>
            <li class="flex justify-start">
              <router-link
                :class="
                  routeName == 'manage-application'
                    ? 'active-tab-class'
                    : 'inactive-tab-class'
                "
                to="/admin/manage-application"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 ml-1 outline-none"
              >
                <img src="/settings-icon.png" class="w-6 h-6" />
                <span class="ml-4">Manage Application</span>
              </router-link>
            </li>
            <li class="flex justify-start">
              <router-link
                :class="
                  routeName == 'manage-dorm'
                    ? 'active-tab-class'
                    : 'inactive-tab-class'
                "
                to="/admin/manage-dorm"
                class="flex flex-row items-center border-transparent rounded w-full h-11 2xl:h-12 p-3 mb-1 2xl:mb-3 ml-1 outline-none"
              >
                <img src="/settings-icon.png" class="w-6 h-6" />
                <span class="ml-4">Manage Dorms</span>
              </router-link>
            </li>
            <li
              class="flex justify-start rounded h-11 2xl:h-12 p-1 mb-1 2xl:mb-3"
            >
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
      <section class="w-full h-screen">
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
