// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";

import { istioAppDesignation } from "variables/general.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard - App 1",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    isExternal: false
  },
  {
    path: "/table",
    name: "Daily Checklists - App 2",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: () => {
      window.location.href = `${process.env.PUBLIC_URL.replace(istioAppDesignation, "/app2")}/admin/table`; 
      return null;
    },
    layout: "/admin",
    isExternal: true
  },
  {
    path: "/user",
    name: "User Profile - App 3",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    isExternal: true
  }
];

export default dashboardRoutes;
