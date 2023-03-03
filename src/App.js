import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/posts",
    element: (
      <div className="flex">
        <SideNav />
        <div className="flex-col w-full px-24">
          <SearchHeader />
          <Outlet />
        </div>
      </div>
    ),
    children: [{ index: true, element: <Posts /> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
