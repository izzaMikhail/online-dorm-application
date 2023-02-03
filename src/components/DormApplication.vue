<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useDormStore } from "../stores/dorms";
import { useUserStore } from "../stores/users";

const dorm_store = useDormStore();
const user = useUserStore();

const user_gender_uppercase = user.currentUser.gender.toUpperCase();
const user_gender = user.currentUser.gender;
</script>
<template>
  <div class="w-full h-screen font-roboto">
    <h1 class="text-[#666666] text-2xl ml-9">Dorm Application</h1>
    <div class="flex flex-col w-full h-fit items-center mt-20 pb-20 space-y-24">
      <div
        class="w-[90%] h-fit bg-white flex flex-col items-center shadow-xl rounded"
      >
        <div
          class="w-[96%] h-[60px] bg-[#065601] relative -mt-3 shadow-xl flex items-center rounded"
        >
          <h2 class="px-5 text-white text-lg font-semibold">
            Upper Campus Residence Hall (Mountain Side)
          </h2>
        </div>
        <div class="w-full min-h-20 py-8 flex items-center justify-center">
          <ul class="w-full h-full flex justify-center text-center flex-col">
            <li
              class="w-full h-full flex justify-center text-center font-bold text-base"
            >
              <span class="h-10 w-1/5"
                >{{ user_gender_uppercase }} Dormitory</span
              >
              <span class="h-10 w-1/5">Monthly Rental</span>
              <span class="h-10 w-1/5">Bed Capacity</span>
              <span class="h-10 w-1/5">No. of Rooms</span>
              <span class="h-10 w-1/5">Available Beds</span>
            </li>
            <li
              class="w-full h-full flex justify-center text-center font-regular text-sm px-2"
              v-for="dorm in dorm_store.dorms"
            >
              <div
                v-if="
                  dorm.dorm_occupant == user_gender &&
                  dorm.dorm_location == 'Upper'
                "
                class="w-full h-full flex justify-center space-x-4"
              >
                <span class="h-10 w-1/5 flex justify-center items-center">
                  <router-link
                    :to="{
                      name: 'apply',
                      params: { id: dorm.id },
                    }"
                    class="border-black border-b-2"
                    >{{ dorm.dorm_name }}</router-link
                  >
                </span>
                <span class="h-10 w-1/5 flex justify-center items-center">
                  ₱ {{ dorm.monthly_rental }}</span
                >
                <span class="h-10 w-1/5 flex justify-center items-center">
                  {{ dorm.bed_capacity }}</span
                >
                <span class="h-10 w-1/5 flex justify-center items-center">
                  {{ dorm.no_of_rooms }}
                </span>
                <span class="h-10 w-1/5 flex justify-center items-center">
                  {{ dorm.available_beds }}</span
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="w-[90%] h-fit bg-white flex flex-col items-center shadow-xl rounded"
      >
        <div
          class="w-[96%] h-[60px] bg-[#065601] relative -mt-3 shadow-xl flex items-center rounded"
        >
          <h2 class="px-5 text-white text-lg font-semibold">
            Lower Campus Residence Hall (Beach Side)
          </h2>
        </div>
        <div class="w-full min-h-20 py-8 flex items-center justify-center">
          <ul class="w-full h-full flex justify-center text-center flex-col">
            <li
              class="w-full h-full flex justify-center text-center font-bold text-base"
            >
              <span class="h-10 w-1/5"
                >{{ user_gender_uppercase }} Dormitory</span
              >
              <span class="h-10 w-1/5">Monthly Rental</span>
              <span class="h-10 w-1/5">Bed Capacity</span>
              <span class="h-10 w-1/5">No. of Rooms</span>
              <span class="h-10 w-1/5">Available Beds</span>
            </li>
            <li
              class="w-full h-full flex justify-center text-center font-regular text-sm"
              v-for="dorm in dorm_store.dorms"
            >
              <div
                v-if="
                  dorm.dorm_occupant == user_gender &&
                  dorm.dorm_location == 'Lower'
                "
                class="w-full h-full flex justify-center space-x-4"
              >
                <span class="h-10 w-1/5 flex justify-center items-center">
                  <router-link
                    :to="{
                      name: 'apply',
                      params: { id: dorm.id },
                    }"
                    class="border-black border-b-2"
                    >{{ dorm.dorm_name }}</router-link
                  >
                </span>
                <span class="h-10 w-1/5 flex justify-center items-center">
                  ₱ {{ dorm.monthly_rental }}</span
                >
                <span class="h-10 w-1/5 flex justify-center items-center">
                  {{ dorm.bed_capacity }}</span
                >
                <span class="h-10 w-1/5 flex justify-center items-center">
                  {{ dorm.no_of_rooms }}
                </span>
                <span class="h-10 w-1/5 flex justify-center items-center">
                  {{ dorm.available_beds }}</span
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
