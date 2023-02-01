import { Home } from "../componets/pages/Home";
import { Page404 } from "../componets/pages/Page404";
import { Setting } from "../componets/pages/Setting";
import { UserManagement } from "../componets/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
