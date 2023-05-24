import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import AllContext from "./context/AllContext";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/HomeThree/HomeThree";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ShopDetails from "./pages/ShopDetails/ShopDetails/ShopDetails";
import ShopPage from "./pages/ShopPage/ShopPage/ShopPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import DoctorDetails from "./pages/Doctors/DoctorDetails/DoctorDetails";
import ProviderLandingPage from "./pages/ProviderLandingPage/ProviderLandingPage";
import PatientLandingPage from "./pages/PatientLandingPage/PatientLandingPage";

function App() {
  return (
    <>
      <AllContext>
        <BrowserRouter>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doctorDetails" element={<DoctorDetails />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shopDetails" element={<ShopDetails />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notMatch" element={<NotFound />} />
            <Route
              path="/ProviderLandingPage"
              element={<ProviderLandingPage />}
            />
            <Route
              path="/patientlandingpage"
              element={<PatientLandingPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AllContext>
    </>
  );
}

export default App;
