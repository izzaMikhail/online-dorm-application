<template>
  <div
    class="flex items-center justify-center h-screen w-full bg-[#EEEEEE] font-roboto"
  >
    <div
      class="w-[350px] h-[570px] 2xl:h-fit bg-white shadow-md rounded-md mt-10 pb-5"
    >
      <div
        class="bg-[#065601] w-[325px] h-[95] xl:h-[105px] mx-auto rounded -mt-5 px-3.5 py-1"
      >
        <div class="w-full h-full flex flex-col justify-center items-center">
          <img src="user-white.png" class="p-6 lg:p-7 -mt-3 lg:-mt-5" />
          <p class="text-white text-lg">VSU Student Portal</p>
        </div>
      </div>
      <form class="px-7 mt-7 2xl:mt-7 space-around" @submit.prevent="AuthUser">
        <div class="space-y-4">
          <div
            class="mt-2 flex items-center relative w-72 border-2 border-gray-300 rounded px-2.5 pb-2 2xl:pb-2.5 pt-3 2x:pt-4"
          >
            <input
              type="text"
              id="default_outlined"
              class="block w-full text-sm bg-transparent outline-none text-black focus:ring-0 peer"
              v-model="user.username"
            />
            <label
              for="default_outlined"
              class="absolute text-sm text-gray-500 bg-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >Username <span class="text-red-500">*</span></label
            >
            <img src="user-black.png" class="w-5 h-5" />
          </div>

          <div
            class="flex items-center relative w-72 border-2 border-gray-300 rounded px-2.5 pb-2 2xl:pb-2.5 pt-3 2x:pt-4"
          >
            <input
              type="password"
              id="default_outlined1"
              class="block w-full text-sm bg-transparent outline-none text-black focus:ring-0 peer"
              v-model="user.password"
            />
            <label
              for="default_outlined1"
              class="absolute text-sm text-gray-500 bg-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >Password <span class="text-red-500">*</span></label
            >
            <img src="key.png" class="w-5 h-5" />
          </div>
        </div>
        <div class="mt-8 2xl:mt-10 flex">
          <input
            type="submit"
            value="LOGIN"
            class="flex mx-auto bg-[#065601] text-white py-1 2x:py-2 px-6 2x:px-7 rounded"
          />
        </div>
        <div class="flex justify-center items-center p-5 opacity-60">
          <hr class="w-5 h-px bg-black border-0" />
          <span> OR </span>
          <hr class="w-5 h-px bg-black border-0" />
        </div>
        <div
          class="flex mx-auto w-fit py-1 2xl:py-2 px-5 rounded shadow-xl text-right"
        >
          <img src="google-logo.png" class="mr-2" />

          <router-link to="#"
            ><input
              type="submit"
              value="Signin with Google"
              class="text-blue-500"
          /></router-link>
        </div>
        <div class="mt-7 text-center">
          <hr class="w-3/4 h-px bg-black flex mx-auto my-3" />
          <router-link to="#" class="text-[#5D915A] text-sm"
            >REGISTER HERE</router-link
          >

          <hr class="w-1/2 h-px bg-black flex mx-auto my-3" />
          <router-link to="#" class="text-[#5D915A] text-sm"
            >FORGOT PASSWORD?</router-link
          >
          <hr class="w-3/4 h-px bg-black flex mx-auto my-3" />
          <p class="text-sm opacity-60 my-2">
            Don't have your registration key yet?
          </p>
          <router-link to="#" class="text-[#5D915A] text-sm"
            >Request a key!</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";

import { useUserStore } from "../stores/users";

const user = ref({
  username: "",
  password: "",
});

const user_store = useUserStore();

const AuthUser = () => {
  user_store.auth(user.value);

  // console.log(user_store.currentUser.user_type);

  if (user_store.currentUser.user_type == "student") {
    router.push("/main/dashboard");
  } else if (user_store.currentUser.user_type == "admin") {
    router.push("/admin/dashboard");
  } else {
    alert("INCORRECT USERNAME OR PASSWORD!");
  }
};
</script>
