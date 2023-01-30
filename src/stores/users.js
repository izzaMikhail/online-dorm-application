import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

import { ref } from "vue";

export const useUserStore = defineStore("users", () => {
  const users = ref([
    {
      username: "20-1-00751",
      password: "prangko2001",
      gender: "male",
      user_type: "student",
    },
    {
      username: "20-1-00752",
      password: "1234",
      gender: "female",
      user_type: "student",
    },
    {
      username: "admin",
      password: "admin",
      gender: "male",
      user_type: "admin",
    },
  ]);
  return { users };
});
