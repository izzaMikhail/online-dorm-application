<script setup></script>

<template>
  <div class="w-fit h-full px-8 flex flex-col font-roboto">
    <h1 class="text-[#666666] text-2xl">Dashboard</h1>
    <div class="w-full h-full flex ml-10 space-x-16 mt-28">
      <div class="bg-[#353535] w-96 h-28 flex flex-col items-center rounded">
        <div
          class="bg-[#065601] rounded w-[90%] h-[55px] flex items-center px-5 py-8 -mt-5"
        >
          <p class="text-white text-2xl">Student Status</p>
        </div>
        <p class="text-white italic text-2xl font-thin mt-6">REGULAR</p>
      </div>
      <div class="bg-white w-[580px] h-[55px] flex items-center px-5 rounded">
        <p>Adviser's Message</p>
      </div>
    </div>
  </div>
</template>
