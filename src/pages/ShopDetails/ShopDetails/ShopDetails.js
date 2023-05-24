import React from "react";
import Footer from "../../../components/Shared/Footer";
import ShopDetailsBanner from "./ShopDetailsBanner/ShopDetailsBanner";
import ShopDetailsDesc from "./ShopDetailsDesc/ShopDetailsDesc";
import { useLocation } from "react-router-dom";
import HomeThreeNavBar from "../../HomeThree/HomeThreeNavBar/HomeThreeNavBar";

const ShopDetails = () => {
  const { state } = useLocation();
  const { image, speciality, pname, price, discount } = state;
  console.log("1==>", pname);
  const data = {
    image: image,
    speciality: speciality,
    pname: pname,
    price: price,
    discount: discount,
  };
  return (
    <>
      <HomeThreeNavBar />
      <ShopDetailsBanner data={data} />
      <ShopDetailsDesc />
      <Footer />
    </>
  );
};

export default ShopDetails;
