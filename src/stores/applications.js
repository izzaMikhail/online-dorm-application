import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useApplicationStore = defineStore("applications", {
  state: () => {
    return {
      applications: [],
      approved: [],
      declined: [],
    };
  },
  actions: {
    create(application) {
      this.applications.push({
        id: uuid(),
        ...application,
      });
    },
    approvedApplication(id) {
      let indexToFind = this.applications.findIndex(
        (application) => application.id === id
      );
      if (indexToFind > -1) {
        let approve = this.applications[indexToFind];
        this.approved.push(approve);
        this.applications.splice(indexToFind, 1);
      }
    },
    declinedApplication(id) {
      let indexToFind = this.applications.findIndex(
        (application) => application.id === id
      );
      if (indexToFind > -1) {
        let decline = this.applications[indexToFind];
        this.declined.push(decline);
        this.applications.splice(indexToFind, 1);
      }
    },
    deleteApproved(id) {
      this.approved = this.approved.filter((approve) => approve.id !== id);
    },
    deleteDeclined(id) {
      this.declined = this.declined.filter((decline) => decline.id !== id);
    },
  },
  persist: true,
});
