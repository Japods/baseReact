import Home from "../views/Home/HomeView";
import Contents from "../views/Contents/Contents";
import Counters from "../views/Counters/Counters";
import HomeLayout from "../layouts/Home/Home";
import ContentDetails from "../views/Contents/Components/ContentDetails";

const routes = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        name: "Home",
        path: "/",
        element: Home,
      },

      {
        name: "Contents",
        path: "contents",
        element: Contents,
      },
      {
        name: "Details",
        path: "contents/details/:id",
        element: ContentDetails,
      },
      {
        name: "Counters",
        path: "counters",
        element: Counters,
      },
    ],
  },
];

export default routes;
