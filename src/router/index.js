import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import StudentPage from "../views/StudentPage.vue";
import AdminPage from "../views/AdminPage.vue";
import StudentProfile from "../components/StudentProfile.vue";
import StudentDashboard from "../components/StudentDashboard.vue";
import DormApplication from "../components/DormApplication.vue";
import ManageDorm from "../components/ManageDorm.vue";
import AdminProfile from "../components/AdminProfile.vue";
import AdminDashboard from "../components/AdminDashboard.vue";
import ManageApplication from "../components/ManageApplication.vue";
import DormApplicationForm from "../components/DormApplicationForm.vue";
import Template from "../components/Template.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "signin",
      component: LoginPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/main",
      name: "main",
      component: StudentPage,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: StudentDashboard,
        },
        {
          path: "profile",
          name: "profile",
          component: StudentProfile,
        },
        {
          path: "dorm-application",
          name: "dorm-application",
          component: DormApplication,
        },
        {
          path: "apply/:id",
          name: "apply",
          component: DormApplicationForm,
        },
        {
          path: "message1",
          name: "message1",
          component: Template,
        },
        {
          path: "message2",
          name: "message2",
          component: Template,
        },
        {
          path: "message3",
          name: "message3",
          component: Template,
        },
        {
          path: "message4",
          name: "message4",
          component: Template,
        },
        {
          path: "message5",
          name: "message5",
          component: Template,
        },
        {
          path: "message6",
          name: "message6",
          component: Template,
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminPage,
      children: [
        {
          path: "dashboard",
          name: "admin-dashboard",
          component: AdminDashboard,
        },
        {
          path: "manage-dorm",
          name: "manage-dorm",
          component: ManageDorm,
        },
        {
          path: "profile",
          name: "admin-profile",
          component: AdminProfile,
        },
        {
          path: "manage-application",
          name: "manage-application",
          component: ManageApplication,
        },
      ],
    },
  ],
});

export default router;
