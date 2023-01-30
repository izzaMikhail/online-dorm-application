import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useApplicationStore = defineStore("applications", {
  state: () => {
    return {
      applications: [],
    };
  },
  actions: {
    create(application) {
      this.applications.push({
        id: uuid(),
        ...application,
      });
    },
    delete(id) {
      this.applications = this.applications.filter(
        (application) => application.id !== application
      );
    },
  },
  persist: true,
});
