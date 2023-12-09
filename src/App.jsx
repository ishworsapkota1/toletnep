import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";
import Homes from "./assets/homefolder/Homes";
import WishList from "./assets/wishlist/WishList";
import Settings from "./assets/settings/Settings";
import Layouts from "./assets/homefolder/Layouts";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Homes />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
// // ----------------------------------------------------------------
