<script setup>
import { ref } from "vue";
const student = ref([
  {
    name: "Franco Mikhail C. Lubaton",
    student_ID: "20-1-00751",
    course: "Computer Science",
    gender: "Male",
    status: "regular",
  },
]);
</script>

<template>
  <div class="w-fit h-full px-8 flex flex-col font-roboto">
    <h1 class="text-[#666666] text-2xl">User Profile</h1>
    <div class="w-full h-full flex ml-1 space-x-7 mt-20">
      <div
        class="bg-white w-96 h-fit flex flex-col items-center rounded shadow-xl pb-5"
      >
        <img
          src="/profile.jpg"
          class="rounded-full w-[300px] h-[300px] flex items-center -mt-14 shadow-2xl"
        />
        <p class="text-gray-400 italic text-sm font-thin mt-6">
          20-1-00751 - BSCS
        </p>
        <p
          class="text-gray-600 text-lg font-thin mt-4 text-ellipsis overflow-hidden px-5 text-center"
        >
          LUBATON, FRANCO MIKHAIL CACAFRANCA
        </p>

        <hr class="w-[90%] mt-6" />
        <p class="text-gray-500 font-thin text-[14px] mt-3">
          Adviser: Instrutor Eugene Val D. Mangaoang
        </p>
        <span
          class="text-[#2F957E] font-thin text-[14px] mt-3 flex justify-center"
        >
          <img src="/email-icon.png" class="mr-3 w-4 h-4" />
          emangaoang@vsu.edu.ph
        </span>
        <span
          class="text-[#2F957E] font-thin text-[14px] mt-1 flex justify-center"
        >
          <img src="/phone-icon.png" class="mr-3 w-4 h-4" />
          09612245994
        </span>
      </div>
      <div
        class="bg-white w-[785px] h-[250px] flex flex-col items-center rounded"
      >
        <div
          class="bg-[#065601] w-[97%] h-[70px] -mt-5 rounded-sm px-5 shadow-xl flex items-center"
        >
          <img src="/profile-icon.png" class="w-5 h-5 ml-3" />
          <p class="text-white text-[12px] ml-2 font-thin">PERSONAL INFO</p>
        </div>
        <div class="w-full h-full px-3 grid grid-cols-2 gap-4">
          <div class="py-5">
            <span class="flex items-center ml-2">
              <img src="/black-email-icon.png" class="w-4 h-4" />
              <p class="text-gray-800 text-sm ml-2 font-thin">prangko2001</p>
            </span>
            <span class="flex items-center ml-2 mt-1">
              <img src="/contact-us.png" class="w-4 h-4" />
              <p class="text-gray-800 text-sm ml-2 font-thin">09510343235</p>
            </span>
            <span class="flex items-center ml-2 mt-1">
              <img src="/at-icon.png" class="w-4 h-4" />
              <p class="text-gray-800 text-sm ml-2 font-thin">
                20-1-00751@vsu.edu.ph
              </p>
            </span>
            <span class="flex items-center ml-2 mt-1">
              <img src="/location-icon.png" class="w-4 h-4" />
              <p class="text-gray-800 text-sm ml-2 font-thin">
                Brgy. Libertad, Upper Coob, Ormoc City, Leyte
              </p>
            </span>
            <span class="flex items-center ml-2 mt-7">
              <img src="/location-icon.png" class="w-4 h-4" />
              <p class="text-gray-800 text-sm ml-2 font-thin">
                Free WIFI Password: 46ac461c
              </p>
            </span>
            <span class="flex items-center ml-9 mt-3 space-x-6 text-[#2F957E]">
              <p class="text-sm font-thin">Edit</p>
              <p class="text-sm font-thin">Change Password</p>
            </span>
          </div>
          <div class="flex justify-center p-6">
            <span class="flex justify-center text-[#2F957E]">
              <p class="text-md font-extralight">Generate QR Code</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
