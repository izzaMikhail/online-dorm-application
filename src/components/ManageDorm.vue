<script setup>
import { ref, onMounted, computed, watch } from "vue";

import { useDormStore } from "../stores/dorms";

//Code to show and hide modal
const showModal = ref(false);
const toggleModal = () => {
  showModal.value = !showModal.value;
};

const editModal = ref(false);
const toggleEditModal = () => {
  editModal.value = !editModal.value;
};
//end code for modal

// new code with pinia storage
const dorm_store = useDormStore();
const dorm_input = ref({
  dorm_name: "",
  dorm_occupant: null,
  dorm_location: null,
  monthly_rental: "",
  bed_capacity: "",
  no_of_rooms: "",
  available_beds: "",
});

const CreateDorm = () => {
  if (
    !dorm_input.value.dorm_name ||
    !dorm_input.value.dorm_occupant ||
    !dorm_input.value.dorm_location ||
    !dorm_input.value.bed_capacity ||
    !dorm_input.value.monthly_rental ||
    !dorm_input.value.no_of_rooms ||
    !dorm_input.value.available_beds
  ) {
    return alert("Please enter all information needed");
  }
  dorm_store.create(dorm_input.value);

  dorm_input.value = {
    dorm_name: "",
    dorm_occupant: null,
    dorm_location: null,
    monthly_rental: "",
    bed_capacity: "",
    no_of_rooms: "",
    available_beds: "",
  };

  toggleModal();
};
const DeleteDorm = (id) => {
  dorm_store.delete(id);
  alert("Dorm has been deleted with ID: " + id);
};

const changeDormIdChosen = ref(null);
const dormId = (newId) => {
  changeDormIdChosen.value = newId;
};

const currentDorm = computed(() =>
  dorm_store.dorms?.find((d) => d.id == changeDormIdChosen.value)
);

const EditDorm = () => {
  dorm_store.edit(currentDorm.value);

  toggleEditModal();
};
</script>
<template>
  <div class="w-full h-fit font-roboto">
    <div class="w-full flex items-center space-x-10">
      <h1 class="text-[#666666] text-2xl ml-9">Dormitories</h1>
      <button @:click="toggleModal()">
        <span class="flex text-[#065601] items-center justify-center"
          ><img src="/add-icon.png" class="w-4 h-4 mr-2" /> Add
          Dormitories</span
        >
      </button>
    </div>
    <div class="flex flex-col w-full h-fit items-center py-24 space-y-24">
      <div
        class="w-[90%] h-fit bg-white flex flex-col items-center shadow-xl rounded"
      >
        <div
          class="w-[96%] h-[60px] bg-[#065601] relative -mt-3 shadow-xl flex items-center rounded"
        >
          <h2 class="px-5 text-white text-lg w-4/5">Male Dormitories</h2>
        </div>
        <div
          class="w-full min-h-20 py-8 px-5 xl:px-0 flex items-center justify-center"
        >
          <ul
            class="w-full h-full flex justify-center item-center text-center flex-col"
          >
            <li
              class="w-full h-full flex justify-center font-bold text-base space-x-4 mb-2"
            >
              <span class="h-10 w-32 flex justify-center items-center"
                >Male Dormitory</span
              >
              <span class="h-10 w-32 flex justify-center items-center"
                >Monthly Rental</span
              >
              <span class="h-10 w-32 flex justify-center items-center"
                >Bed Capacity</span
              >
              <span class="h-10 w-32 flex justify-center items-center"
                >No. of Rooms</span
              >
              <span class="h-10 w-32 flex justify-center items-center"
                >Available Beds</span
              >
              <span class="h-10 w-32 flex justify-center items-center"
                >Edit</span
              >
              <span class="h-10 w-32 flex justify-center items-center"
                >Delete</span
              >
            </li>
            <div class="w-full h-fit" v-for="dorm in dorm_store.dorms">
              <li
                class="w-full h-full py-2 flex justify-center text-center font-regular text-sm"
                v-if="dorm.dorm_occupant == 'Male'"
              >
                <div
                  class="w-[90%] h-full flex justify-center space-x-4 border-b"
                >
                  <span class="h-10 w-32 flex justify-center items-center">
                    {{ dorm.dorm_name }}
                  </span>
                  <span class="h-10 w-32 flex justify-center items-center">
                    ₱ {{ dorm.monthly_rental }}</span
                  >
                  <span class="h-10 w-32 flex justify-center items-center">
                    {{ dorm.bed_capacity }}</span
                  >
                  <span class="h-10 w-32 flex justify-center items-center">
                    {{ dorm.no_of_rooms }}
                  </span>
                  <span class="h-10 w-32 flex justify-center items-center">
                    {{ dorm.available_beds }}</span
                  >
                  <span class="h-10 w-32 flex justify-center items-center"
                    ><button @:click="toggleEditModal(), dormId(dorm.id)">
                      <img src="/edit-icon.png" /></button
                  ></span>

                  <button
                    @click="DeleteDorm(dorm.id)"
                    class="h-10 w-32 flex justify-center items-center"
                  >
                    <img src="/delete-icon.png" />
                  </button>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div
        class="w-[90%] h-fit bg-white flex flex-col items-center shadow-xl rounded"
      >
        <div
          class="w-[96%] h-[60px] bg-[#065601] relative -mt-3 shadow-xl flex items-center rounded"
        >
          <h2 class="px-5 text-white text-lg w-4/5">Female Dormitories</h2>
        </div>
        <div
          class="w-full min-h-20 py-8 px-5 xl:px-0 flex items-center justify-center"
        >
          <ul
            class="w-full h-full flex justify-center item-center text-center flex-col"
          >
            <li
              class="w-full h-full flex justify-center font-bold text-base space-x-4 mb-2"
            >
              <span class="h-10 w-32 flex justify-center items-center"
                >Female Dormitory</span
              >
              <span class="h-10 w-32 flex justify-center items-center"
                >Monthly Rental</span
              >
              <span class="h-10 w-32 flex justify-center items-center"
                >Bed Capacity</span
              >
              <span class="h-10 w-32 flex justify-center items-center"
                >No. of Rooms</span
              >
              <span class="h-10 w-32 flex justify-center items-center"
                >Available Beds</span
              >
              <span class="h-10 w-32 flex justify-center items-center"
                >Edit</span
              >
              <span class="h-10 w-32 flex justify-center items-center"
                >Delete</span
              >
            </li>
            <div class="w-full h-fit" v-for="dorm in dorm_store.dorms">
              <li
                class="w-full h-full py-2 flex justify-center text-center font-regular text-sm"
                v-if="dorm.dorm_occupant == 'Female'"
              >
                <div
                  class="w-[90%] h-full flex justify-center space-x-4 border-b"
                >
                  <span class="h-10 w-32 flex justify-center items-center">
                    {{ dorm.dorm_name }}
                  </span>
                  <span class="h-10 w-32 flex justify-center items-center">
                    ₱ {{ dorm.monthly_rental }}</span
                  >
                  <span class="h-10 w-32 flex justify-center items-center">
                    {{ dorm.bed_capacity }}</span
                  >
                  <span class="h-10 w-32 flex justify-center items-center">
                    {{ dorm.no_of_rooms }}
                  </span>
                  <span class="h-10 w-32 flex justify-center items-center">
                    {{ dorm.available_beds }}</span
                  >
                  <span class="h-10 w-32 flex justify-center items-center"
                    ><button @:click="toggleEditModal(), dormId(dorm.id)">
                      <img src="/edit-icon.png" /></button
                  ></span>

                  <button
                    @click="DeleteDorm(dorm.id)"
                    class="h-10 w-32 flex justify-center items-center"
                  >
                    <img src="/delete-icon.png" />
                  </button>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex shadow-2xl"
    >
      <div class="relative w-auto my-6 mx-auto max-w-xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
          >
            <h3 class="text-xl font-medium w-full flex justify-center">
              Add Dormitory
            </h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="toggleModal()"
            >
              <img src="/close-icon.png" class="w-4 h-4" />
            </button>
          </div>
          <!--body-->
          <div class="w-full h-full">
            <form
              @submit.prevent="CreateDorm"
              class="p-12 space-y-5"
              ref="addForm"
            >
              <div class="flex">
                <h4 class="w-48">Dorm Occupants:</h4>
                <select
                  v-model="dorm_input.dorm_occupant"
                  class="w-48 outline-none border border-gray-700 rounded"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="flex">
                <h4 class="w-48">Dorm Location:</h4>
                <select
                  v-model="dorm_input.dorm_location"
                  class="w-48 outline-none border border-gray-700 rounded"
                >
                  <option value="Upper">Upper</option>
                  <option value="Lower">Lower</option>
                </select>
              </div>
              <div class="flex">
                <h4 class="w-48">Dorm Name:</h4>
                <input
                  v-model="dorm_input.dorm_name"
                  class="w-48 px-1 outline-none border border-gray-700 rounded"
                  placeholder="Enter Dorm Name"
                />
              </div>
              <div class="flex">
                <h4 class="w-48">Monthly Rental:</h4>
                <input
                  v-model="dorm_input.monthly_rental"
                  class="w-48 px-1 outline-none border border-gray-700 rounded"
                  placeholder="Enter Monthly Rental"
                />
              </div>
              <div class="flex">
                <h4 class="w-48">Bed Capacity:</h4>
                <input
                  v-model="dorm_input.bed_capacity"
                  class="w-48 px-1 outline-none border border-gray-700 rounded"
                  placeholder="Enter Bed Capacity"
                />
              </div>
              <div class="flex">
                <h4 class="w-48">No. of Rooms:</h4>
                <input
                  v-model="dorm_input.no_of_rooms"
                  class="w-48 px-1 outline-none border border-gray-700 rounded"
                  placeholder="Enter No. of Rooms"
                />
              </div>
              <div class="flex">
                <h4 class="w-48">Available Beds:</h4>
                <input
                  v-model="dorm_input.available_beds"
                  class="w-48 px-1 outline-none border border-gray-700 rounded"
                  placeholder="Enter Available Beds"
                />
              </div>
              <div class="w-full flex justify-center space-x-5">
                <button
                  class="uppercase border-2 border-red-600 hover:bg-red-600 px-6 py-2 rounded text-red-600 hover:text-white"
                  @:click="toggleModal()"
                >
                  cancel
                </button>
                <input
                  type="submit"
                  value="save"
                  class="uppercase border-2 border-green-600 hover:bg-green-600 px-6 py-2 rounded text-green-600 hover:text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!--MODAL FOR EDIT-->
    <div
      v-if="editModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex shadow-2xl"
    >
      <div class="relative w-auto my-6 mx-auto max-w-xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
          >
            <h3 class="text-xl font-medium w-full flex justify-center">
              Add Dormitory
            </h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="toggleEditModal()"
            >
              <img src="/close-icon.png" class="w-4 h-4" />
            </button>
          </div>
          <!--body-->
          <div class="w-full h-full">
            <form
              @submit.prevent="EditDorm"
              class="p-12 space-y-5"
              ref="addForm"
            >
              <div class="flex">
                <h4 class="w-48">Dorm Occupants:</h4>
                <select
                  v-model="currentDorm.dorm_occupant"
                  class="w-48 outline-none border border-gray-700 rounded"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="flex">
                <h4 class="w-48">Dorm Location:</h4>
                <select
                  v-model="currentDorm.dorm_location"
                  class="w-48 outline-none border border-gray-700 rounded"
                >
                  <option value="Upper">Upper</option>
                  <option value="Lower">Lower</option>
                </select>
              </div>
              <div class="flex">
                <h4 class="w-48">Dorm Name:</h4>
                <input
                  v-model="currentDorm.dorm_name"
                  class="w-48 px-1 outline-none border border-gray-700 rounded"
                  placeholder="Enter Dorm Name"
                />
              </div>
              <div class="flex">
                <h4 class="w-48">Monthly Rental:</h4>
                <input
                  v-model="currentDorm.monthly_rental"
                  class="w-48 px-1 outline-none border border-gray-700 rounded"
                  placeholder="Enter Monthly Rental"
                />
              </div>
              <div class="flex">
                <h4 class="w-48">Bed Capacity:</h4>
                <input
                  v-model="currentDorm.bed_capacity"
                  class="w-48 px-1 outline-none border border-gray-700 rounded"
                  placeholder="Enter Bed Capacity"
                />
              </div>
              <div class="flex">
                <h4 class="w-48">No. of Rooms:</h4>
                <input
                  v-model="currentDorm.no_of_rooms"
                  class="w-48 px-1 outline-none border border-gray-700 rounded"
                  placeholder="Enter No. of Rooms"
                />
              </div>
              <div class="flex">
                <h4 class="w-48">Available Beds:</h4>
                <input
                  v-model="currentDorm.available_beds"
                  class="w-48 px-1 outline-none border border-gray-700 rounded"
                  placeholder="Enter Available Beds"
                />
              </div>
              <div class="w-full flex justify-center space-x-5">
                <button
                  class="uppercase border-2 border-red-600 hover:bg-red-600 px-6 py-2 rounded text-red-600 hover:text-white"
                  @:click="toggleEditModal()"
                >
                  cancel
                </button>
                <input
                  type="submit"
                  value="save"
                  class="uppercase border-2 border-green-600 hover:bg-green-600 px-6 py-2 rounded text-green-600 hover:text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
