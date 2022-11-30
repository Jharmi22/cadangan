import React from "react";
import Aos from "aos";
import Navbar from "../../components/Layout/Navbar";
import "./Artikel.css";
import DaftarArtikel from "../../components/DaftarArtikel/DaftarArtikel";
import { Search } from "react-bootstrap-icons";

function Artikel() {
  Aos.init();
  return (
    <>
      <Navbar />
      <section className="page-section" id="artikel">
        <div className="container">
          <div className="text-center">
            <h2 id="tagline" className="section-heading">
              Artikel Kesehatan
            </h2>
            <h5 className="section-subheading">Kami menyediakan artikel yang menarik mengenai kesehatan</h5>
            <hr />
          </div>
          <div className="container">
            <div data-aos="zoom-in" data-aos-duration="2000">
              <DaftarArtikel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Artikel;
