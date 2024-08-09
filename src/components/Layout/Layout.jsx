import React from "react";
import Header from "./Navbar";
import Footer from "./Footer";
import "./Layout.scss";

const Layout = ({ navigation, children,isAuthFlow }) => {
  return (
    <div className="layout-container">
      <Header navigation={navigation} />
      <div className="main-content">
        <div className="outlet-main-container">{children}</div>
      </div>
      {!isAuthFlow &&(
      <Footer navigation={navigation} />
    )}
    </div>
  );
};

export default Layout;

