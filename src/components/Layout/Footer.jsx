import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <section id="footer">
        <footer className="footer text-center fixed-bottom">
          <div className="container px-2 pt-2">
            <div className="d-flex justify-content-center">
              <div className="ml-36">
                <img style={{ width: 30 }} className="text-left" src={require("../../assets/brand.png")} alt="" />
              </div>
              <div className="text-center">© 2022 Copyright : TanyaDokter-FEBE20</div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
