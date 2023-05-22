import DashboardPages from "./Pages/DashboardPages";
import ReportsPages from "./Pages/ReportsPages";
import UserManagerPages from "./Pages/UserManagerPages";

export let Routes = [
    { path: '/' , element: <DashboardPages />},
    { path: '/userManager' , element: <UserManagerPages />},
    { path: '/reports' , element: <ReportsPages />}

]