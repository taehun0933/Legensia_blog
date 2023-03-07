import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AdminNav from "./components/AdminNav";
import Protected from "./components/Protected";
import SearchHeader from "./components/SearchHeader";
import SideNav from "./components/SideNav";
import Admin from "./pages/Admin";
import AdminBackground from "./pages/AdminBackground";
import AdminCategory from "./pages/AdminCategory";
import AdminPosting from "./pages/AdminPosting";
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
        <div className="flex-col w-full px-24 max-md:px-12">
          <SearchHeader />
          <Outlet />
        </div>
      </div>
    ),
    children: [{ index: true, element: <Posts /> }],
  },
  {
    path: "/admin",
    element: (
      <>
        <AdminNav />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Admin /> },
      {
        path: "background",
        element: (
          <Protected>
            <AdminBackground />
          </Protected>
        ),
      },
      {
        path: "category",
        element: (
          <Protected>
            <AdminCategory />
          </Protected>
        ),
      },
      {
        path: "posting",
        element: (
          <Protected>
            <AdminPosting />
          </Protected>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
