import React, { useEffect, useState } from "react";
import "./BuatTips.css";
import Aos from "aos";
import Swal from "sweetalert2";
import Navbar from "../../components/Layout/Navbar";
import { useNavigate } from "react-router-dom";

function BuatTips() {
  Aos.init();
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [layanan, setLayanan] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [isikonsul, setIsikonsul] = useState([]);

  const gettip = () => {
    const formData = localStorage.getItem("formkonsul");
    setIsikonsul(JSON.parse(formData));
  };

  const formhandle = () => {
    let datakonsul = {
      nama,
      layanan,
      phonenumber,
      keluhan,
    };
    if (nama === "" || phonenumber === "" || layanan === "" || keluhan === "") {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Data tidak boleh kosong atau data yang anda masukkan salah",
      });
    } else {
      // if (isikonsul === null) {
      //   setIsikonsul([datakonsul]);
      //   localStorage.setItem("formkonsul", JSON.stringify([datakonsul]));
      // } else {
      //   localStorage.setItem("formkonsul", JSON.stringify([...isikonsul, datakonsul]));
      //   setIsikonsul([...isikonsul, datakonsul]);
      // }
      fetch("https://631cc4864fa7d3264cb66955.mockapi.io/UserKonsul", {
        method: "POST",
        body: JSON.stringify(datakonsul),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => JSON.parse(response))
        .then((data) => setIsikonsul(data));

      Swal.fire({
        title: "Sweet!",
        text: "Data Berhasil terkirim",
        icon: "success",
        confirmButtonText: "Lengakpi Kebutuhan Si Kecil",
      });
      navigate("/BabyShop");
    }
  };
  useEffect(() => {
    gettip();
  }, []);

  useEffect(() => {
    console.log(isikonsul);
  }, [isikonsul]);
  return (
    <>
      <Navbar />
      <div id="containerBuatTips" className="mb-3">
        <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <div id="services">
            <h1 id="tagline" className="section-heading">
              BuatTips
            </h1>
            <h5 className="section-subheading">Anda menyampaikan kami mendengarkan</h5>
            <hr />
          </div>
        </div>
      </div>
      <div className="form-body">
        <div className="form-holder">
          <div className="form-content" id="formlogin">
            <div className="form-items">
              <h3>Konsul</h3>
              <h3 className="section-subheading" style={{ color: "red" }}>
                GRATIS!!! GRATIS!!! GRATIS!!!
              </h3>
              <form className="requires-validation" noValidate>
                <div className="col-md-12">
                  <input className="form-control" type="text" name="name" placeholder="Full Name" onChange={(e) => setNama(e.target.value)} />
                </div>

                <div className="col-md-12 mt-3">
                  <input className="form-control" type="number" name="number" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
                  <div className="valid-feedback">Password field is valid!</div>
                </div>

                <div className="col-md-12 mb-3">
                  <select className="form-select text-center" aria-label="Default select example" onChange={(e) => setLayanan(e.target.value)}>
                    <option selected>Pelayanan </option>
                    <option value="Konsultasi">Konsultasi</option>
                    <option value="Posyandu">Posyandu</option>
                    <option value="MPASI">MPASI</option>
                    <option value="Playground">Playground</option>
                    <option value="BabySpa">Baby Spa</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ceritakan keluhan si kecil" onChange={(e) => setKeluhan(e.target.value)}></textarea>
                </div>
                <div className="text-center mt-4">
                  <label className="form-check-label">
                    <b>I confirm that all data are correct and can be responsible</b>
                  </label>
                </div>
                <div className="form-button mt-3">
                  <button id="submit" type="submit" className="noselect" onClick={(e) => formhandle(e.preventDefault())}>
                    Kirimkan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default BuatTips;
