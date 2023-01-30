<script setup>
import { ref, onMounted, computed } from "vue";
import { useApplicationStore } from "../stores/applications";
import { useDormStore } from "../stores/dorms";
import { useRoute } from "vue-router";

const application_store = useApplicationStore();
const dorm_store = useDormStore();

const route = useRoute();
const dormId = computed(() => route.params.id);

const currentDorm = computed(() =>
  dorm_store.dorms?.find((d) => d.id == dormId.value)
);
//console.log("Current Dorm: ", currentDorm.value);

const dormApplication_input = ref({
  dorm_id: dormId.value,
  mode_of_payment: "",
  semester: "",
});
console.log("Dorm Application: ", dormApplication_input.value);

const CreateDormApplication = () => {
  if (
    !dormApplication_input.value.dorm_id ||
    !dormApplication_input.value.mode_of_payment ||
    !dormApplication_input.value.semester
  ) {
    return alert("Please enter all information needed");
  }
  application_store.create(dormApplication_input.value);

  dormApplication_input.value = {
    dormId: "",
    semester: "",
    mode_of_payment: "",
  };
  // console.log(dormApplication_store.dormApplications.value);
};
</script>

<template>
  <div class="w-full h-full font-roboto">
    <h1 class="text-[#666666] text-2xl ml-9">Dorm Application</h1>
    <router-link to="/main/dorm-application">
      <img
        src="/back-icon.png"
        class="bg-white py-2 px-4 ml-12 mt-6 rounded shadow-xl"
      />
    </router-link>
    <div class="w-full h-fit flex justify-center mt-20">
      <form
        @submit.prevent="CreateDormApplication"
        class="w-1/3 h-fit px-5 bg-white flex flex-col items-center justify-center rounded shadow-xl"
      >
        <div
          class="w-[98%] h-[40px] bg-[#065601] relative -mt-3 flex items-center justify-center rounded shadow-xl"
        >
          <span class="text-white text-lg">{{ currentDorm.dorm_name }}</span>
        </div>
        <div class="w-full h-full py-7 px-5">
          <ul class="w-full h-fit flex flex-col space-y-5">
            <li class="space-x-6">
              <span>Select Semester:</span>
              <select
                v-model="dormApplication_input.semester"
                class="w-1/2 px-3 py-1 border-2 border-gray-400 rounded outline-none bg-[#EEEEEE]"
              >
                <option value="Upper">Upper</option>
                <option value="Lower">Lower</option>
              </select>
            </li>
            <li class="space-x-9 flex">
              <p>Available Beds:</p>
              <span>{{ currentDorm.available_beds }}</span>
            </li>
            <li class="space-x-4">
              <span>Mode of Payment:</span>
              <select
                v-model="dormApplication_input.mode_of_payment"
                class="w-1/2 px-3 py-1 border-2 border-gray-400 rounded outline-none bg-[#EEEEEE]"
              >
                <option value="First Semester">Cash</option>
                <option value="Second Semester">Gcash</option>
              </select>
            </li>
            <li class="py-5">
              <input
                type="submit"
                value="submit"
                class="uppercase border-2 border-green-600 text-green-600 hover:text-white hover:bg-green-600 px-8 py-1 rounded flex mx-auto"
              />
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>
