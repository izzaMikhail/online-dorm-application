<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useDormStore } from "../stores/dorms";
import { useApplicationStore } from "../stores/applications";

const applications_store = useApplicationStore();
console.log(applications_store.applications.semester);

// const DeleteDormApplication = (id) => {
//   dorm_store.deleteApplication(id);
//   alert("Dorm has been deleted with ID: " + id);
// };
</script>

<template>
  <div class="h-full flex flex-col font-roboto">
    <h1 class="text-[#666666] text-2xl ml-9">Applications</h1>
    <div class="w-full h-full flex justify-center mt-20">
      <div
        class="w-[90%] h-fit bg-white flex flex-col items-center shadow-xl rounded"
      >
        <div
          class="w-[96%] h-[60px] bg-[#065601] relative -mt-3 shadow-xl flex items-center rounded"
        >
          <h2 class="px-5 text-white text-lg font-semibold">
            Dorm Applications
          </h2>
        </div>
        <div class="w-full min-h-20 py-8 flex items-center justify-center">
          <ul class="w-full h-full flex justify-center text-center flex-col">
            <li
              class="w-full h-full flex text-center font-bold text-base ml-16 space-x-9"
            >
              <span class="h-10 w-1/6">Applicant</span>
              <span class="h-10 w-1/6">Dorm Name</span>
              <span class="h-10 w-1/6">Semester</span>
            </li>
            <li
              class="w-full h-full flex justify-center text-center font-regular text-sm"
              v-for="application in applications_store.dormApplications"
            >
              <span class="h-10 w-1/5 flex justify-center items-center"
                >Franco Mikhail C. Lubaton</span
              >
              <span class="h-10 w-1/5 flex justify-center items-center">{{
                application.dorm_name
              }}</span>
              <span class="h-10 w-1/6 flex justify-center items-center">{{
                application.semester
              }}</span>

              <div
                class="h-10 w-1/3 text-white space-x-10 text-base flex justify-center items-center"
              >
                <button class="bg-[#065601] px-6 py-1 rounded shadow-xl">
                  Approve
                </button>
                <button class="bg-[#FF0000] px-7 py-1 rounded shadow-xl">
                  Decline
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
