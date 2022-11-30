import React, { useEffect, useState } from "react";
import "./DaftarTips.css";
import { Whatsapp } from "react-bootstrap-icons";

function DaftarTips() {
  const [contentArticle, setContentArticle] = useState([]);
  // const whatssap = (nama) => {
  //   let url = `https://api.whatsapp.com/send/?phone=62${nama.phonenumber}&text=` + "Nama : " + nama.nama + "%0a" + "Layanan : " + nama.layanan + "%0a" + "Keluhan : " + nama.keluhan + "%0a" + "Jawaban Dokter : ";
  //   window.open(url);
  // };
  useEffect(() => {
    fetch("https://63517f85dfe45bbd55c1db19.mockapi.io/Artikel", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setContentArticle(data));
  }, []);

  // useEffect(() => {
  //   const formData = localStorage.getItem("formkonsul");
  //   setIsikonsul(JSON.parse(formData));
  // }, [isikonsul]);

  if (contentArticle === null) {
    return (
      <>
        <div className="container justify-content-center konsul">
          <div className="row d-flex justify-content-center">
            <h2>Belum ada Tips Kesehatan</h2>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div class="container bootstrap snippets bootdeys">
          <div class="row d-flex justify-content-center">
            {contentArticle.map((nama) => (
              <>
                <div class="col-md-4 col-sm-9 content-card mb-4">
                  <div class="card-big-shadow">
                    <div class="card card-just-text p-5" data-background="color" data-color="blue" data-radius="none">
                      <div class="content">
                        <p className="list">Judul Artikel : {nama.title}</p>
                        <p className="list">Kategori : {nama.category}</p>
                        <p className="list">Tanggal : {nama.date}</p>
                        <p className="list">Penulis : {nama.writer}</p>
                        <p className="list">Artikel : {nama.contentArticle}</p>
                        {/* <button className="tp" onClick={() => whatssap(nama)}>
                          <Whatsapp color="royalblue" size={30} />
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default DaftarTips;
