import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useUserStore = defineStore("users", {
  state: () => {
    return {
      users: [
        {
          id: uuid(),
          name: "Franco Mikhail C. Lubaton",
          username: "20-1-00751",
          password: "prangko2001",
          gender: "Male",
          user_type: "student",
        },
        {
          id: uuid(),
          name: "Juana Dela Cruz",
          username: "20-1-00752",
          password: "1234",
          gender: "Female",
          user_type: "student",
        },
        {
          id: uuid(),
          name: "Admin 123",
          username: "admin",
          password: "admin",
          gender: "Male",
          user_type: "admin",
        },
      ],
      currentUser: {},
    };
  },
  actions: {
    auth(findUser) {
      let indexToFind = this.users.findIndex(
        (user) =>
          user.username === findUser.username &&
          user.password === findUser.password
      );
      if (indexToFind > -1) {
        this.currentUser = this.users[indexToFind];
      } else {
        alert("INCORRECT USERNAME OR PASSWORD!");
      }
    },
    deleteCurrentUser() {
      this.currentUser = null;
    },
  },
  persist: true,
});
