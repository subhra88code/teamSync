import MyTask from '../features/employee module/My Tesk/ui/pages/MyTask'
import Attendance from '../features/employee module/attandance/ui/pages/Attandance'
import Profile from '../features/employee module/Profile/ui/pages/Profile'

export let employeeRoutes = [
  {
    path: "/home/myTask",
    element: <MyTask />,
  },

  {
    path: "/home/attendance",
    element: <Attendance />,
  },

  {
    path: "/home/profile",
    element: <Profile />,
  },
];
