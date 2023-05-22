import DashboardPages from "./Pages/DashboardPages";
import UserManagerPages from "./Pages/UserManagerPages";

export let Routes = [
    { path: '/' , element: <DashboardPages />},
    { path: '/userManager' , element: <UserManagerPages />},

]