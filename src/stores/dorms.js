import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useDormStore = defineStore("dorms", {
  state: () => {
    return {
      dorms: [],
    };
  },
  actions: {
    create(dorm) {
      this.dorms.push({
        id: uuid(),
        ...dorm,
      });
    },
    delete(id) {
      this.dorms = this.dorms.filter((dorm) => dorm.id !== id);
    },

    edit(updatedDorm) {
      let indexToUpdate = this.dorms.findIndex(
        (dorm) => dorm.id === updatedDorm.id
      );
      if (indexToUpdate > -1) {
        this.dorms[indexToUpdate] = updatedDorm;
      }
    },
    decrement(id) {
      let indexToUpdate = this.dorms.findIndex((dorm) => dorm.id === id);
      console.log("To update", id);
      if (indexToUpdate > -1) {
        let num = Number(this.dorms[indexToUpdate].available_beds);
        console.log("Available Beds: ", num);
        num -= 1;
        this.dorms[indexToUpdate].available_beds = num;
      }
    },
  },
  persist: true,
});
