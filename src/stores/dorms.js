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
  },
  persist: true,
});
