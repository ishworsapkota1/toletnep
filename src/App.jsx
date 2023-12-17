import { Route, Routes } from "react-router-dom";
import Homes from "./assets/homefolder/Homes";
import WishList from "./assets/wishlist/WishList";
import Settings from "./assets/settings/Settings";
import Layouts from "./assets/homefolder/Layouts";
import Navbars from "./assets/dropdowns/Navbars";
import NewKycChild from "./assets/settings/settingscomponents/editprofile/NewKycChild";
function App() {
  return (
    <div>
      {/* <Homes />; */}
      <Navbars />
      <Routes>
        <Route path="/" element={<Homes />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/newkycchild" element={<NewKycChild />}></Route>
      </Routes>
      <Layouts />
    </div>
  );
}
export default App;
// // ----------------------------------------------------------------
