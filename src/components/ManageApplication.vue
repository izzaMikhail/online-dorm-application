<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useDormStore } from "../stores/dorms";
import { useApplicationStore } from "../stores/applications";
import { useUserStore } from "../stores/users";

const applications_store = useApplicationStore();
const user_store = useUserStore();
const dorm_store = useDormStore();

const Approved = (id) => {
  applications_store.approvedApplication(id);
  dorm_store.decrement(id);
};
const Declined = (id) => {
  applications_store.declinedApplication(id);
};

const approvedDorms = computed(() => applications_store.approved);
const declinedDorms = computed(() => applications_store.declined);
const DeleteApprovedApplication = (id) => {
  applications_store.deleteApproved(id);
  alert("application has been deleted with ID: " + id);
};
const DeleteDeclinedApplication = (id) => {
  applications_store.deleteDeclined(id);
  alert("application has been deleted with ID: " + id);
};
</script>

<template>
  <div class="h-full flex flex-col font-roboto">
    <h1 class="text-[#666666] text-2xl ml-9">Applications</h1>
    <div
      class="w-full h-fit pb-32 flex flex-col justify-center items-center mt-20 space-y-24"
    >
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
            <li class="w-full h-full flex text-center font-bold text-base">
              <span class="h-10 w-1/6 ml-5">Applicant</span>
              <span class="h-10 w-1/6 ml-12">Dorm Name</span>
              <span class="h-10 w-1/6 ml-3">Semester</span>
              <span class="h-10 w-1/6 ml-2">Mode of Payment</span>
            </li>
            <span
              v-if="applications_store.applications.length === 0"
              class="text-xl py-10"
              >No data yet...</span
            >
            <li
              class="w-full h-full flex justify-center text-center font-regular text-sm"
              v-for="app in applications_store.applications"
            >
              <div class="w-full flex my-2">
                <span class="h-10 w-1/5 flex justify-center items-center">{{
                  app.applicant_name
                }}</span>
                <span class="h-10 w-1/5 flex justify-center items-center">{{
                  app.dorm_name
                }}</span>
                <span class="h-10 w-1/6 flex justify-center items-center">{{
                  app.semester
                }}</span>
                <span class="h-10 w-1/6 flex justify-center items-center">{{
                  app.mode_of_payment
                }}</span>

                <div
                  class="h-10 w-1/4 text-white space-x-5 text-base flex justify-center items-center"
                >
                  <button
                    class="bg-[#065601] px-6 py-1 rounded shadow-xl"
                    @:click="Approved(app.id)"
                  >
                    Approve
                  </button>
                  <button
                    class="bg-[#FF0000] px-7 py-1 rounded shadow-xl"
                    @:click="Declined(app.id)"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!--APPROVED APPLICATION-->
      <div
        class="w-[90%] h-fit bg-white flex flex-col items-center shadow-xl rounded"
      >
        <div
          class="w-[96%] h-[60px] bg-[#065601] relative -mt-3 shadow-xl flex items-center rounded"
        >
          <h2 class="px-5 text-white text-lg font-semibold">
            Approved Dorm Applications
          </h2>
        </div>
        <div class="w-full min-h-20 py-8 flex items-center justify-center">
          <ul class="w-full h-full flex justify-center text-center flex-col">
            <li class="w-full h-full flex text-center font-bold text-base">
              <span class="h-10 w-1/6 ml-5">Applicant</span>
              <span class="h-10 w-1/6 ml-12">Dorm Name</span>
              <span class="h-10 w-1/6 ml-3">Semester</span>
              <span class="h-10 w-1/6 ml-2">Mode of Payment</span>
            </li>
            <span v-if="approvedDorms.length === 0" class="text-xl py-10"
              >No data yet...</span
            >
            <li
              class="w-full h-full flex justify-center text-center font-regular text-sm"
              v-for="approve in approvedDorms"
            >
              <div class="w-full flex my-2 ml-5">
                <span class="h-10 w-1/5 flex justify-center items-center">{{
                  approve.applicant_name
                }}</span>
                <span class="h-10 w-1/5 flex justify-center items-center">{{
                  approve.dorm_name
                }}</span>
                <span class="h-10 w-1/6 flex justify-center items-center">{{
                  approve.semester
                }}</span>
                <span class="h-10 w-1/6 flex justify-center items-center">{{
                  approve.mode_of_payment
                }}</span>

                <div
                  class="h-10 w-1/5 text-white space-x-5 text-base flex justify-center items-center"
                >
                  <button
                    class="bg-[#FF0000] px-7 py-1 rounded shadow-xl"
                    @:click="DeleteApprovedApplication(approve.id)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--END-->

      <!--DECLINED APPLICATION-->
      <div
        class="w-[90%] h-fit bg-white flex flex-col items-center shadow-xl rounded"
      >
        <div
          class="w-[96%] h-[60px] bg-[#065601] relative -mt-3 shadow-xl flex items-center rounded"
        >
          <h2 class="px-5 text-white text-lg font-semibold">
            Declined Dorm Applications
          </h2>
        </div>
        <div class="w-full min-h-20 py-8 flex items-center justify-center">
          <ul class="w-full h-full flex justify-center text-center flex-col">
            <li class="w-full h-full flex text-center font-bold text-base">
              <span class="h-10 w-1/6 ml-5">Applicant</span>
              <span class="h-10 w-1/6 ml-12">Dorm Name</span>
              <span class="h-10 w-1/6 ml-3">Semester</span>
              <span class="h-10 w-1/6 ml-2">Mode of Payment</span>
            </li>
            <span v-if="declinedDorms.length === 0" class="text-xl py-10"
              >No data yet...</span
            >
            <li
              class="w-full h-full flex justify-center text-center font-regular text-sm"
              v-for="decline in declinedDorms"
            >
              <div class="w-full flex my-2 ml-5">
                <span class="h-10 w-1/5 flex justify-center items-center">{{
                  decline.applicant_name
                }}</span>
                <span class="h-10 w-1/5 flex justify-center items-center">{{
                  decline.dorm_name
                }}</span>
                <span class="h-10 w-1/6 flex justify-center items-center">{{
                  decline.semester
                }}</span>
                <span class="h-10 w-1/6 flex justify-center items-center">{{
                  decline.mode_of_payment
                }}</span>

                <div
                  class="h-10 w-1/5 text-white space-x-5 text-base flex justify-center items-center"
                >
                  <button
                    class="bg-[#FF0000] px-7 py-1 rounded shadow-xl"
                    @:click="DeleteDeclinedApplication(decline.id)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--END-->
    </div>
  </div>
</template>
