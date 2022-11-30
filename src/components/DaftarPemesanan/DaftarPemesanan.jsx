import React from "react";
import { useState, useEffect } from "react";
import { List } from "react-bootstrap-icons";
import "./DaftarPemesanan.css";

function DaftarPemesanan() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data1 = localStorage.getItem("listpembayaran");
    setData(JSON.parse(data1));
  }, []);

  if (data) {
    return (
      <>
        <div class="container bootstrap snippets bootdeys" style={{ marginBottom: "5rem" }}>
          <div class="row d-flex justify-content-center">
            {data.map((nama) => (
              <>
                <div className="container haikal mb-3">
                  <div className="row d-flex justify-content-center">
                    <div class="content text-start d-flex justify-content-center">
                      <div className="col-lg-3 col-md-4 col-sm-4 me-4">
                        <p className="list">Nama : {nama.nama}</p>

                        <p className="list">No Hp : {nama.nohp}</p>

                        <p className="list">Alamat : {nama.alamat}</p>

                        <p className="list">Metode : {nama.metode}</p>
                      </div>

                      <div className="col-lg-3 col-md-4 col-sm-4 text-end">
                        <p className="list">Rincian Pemesanan</p>
                        <p className="list">Detail</p>
                        <p className="list">Jumlah Barang : {nama.jumlahtotal}</p>
                        <p className="list">Harga Barang : Rp. {nama.hargatotal}</p>
                      </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                      <>
                        {nama.detail.map((list) => (
                          <div className="col-lg-2 col-sm-4 mb-2" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                            <div className="card h-100 shadow-sm mt-2 mb-2">
                              <img src={list.url} className="card-img-top" alt="..." />
                              <div className="card-body">
                                <div className="clearfix mb-2">
                                  <span className="float-start badge rounded-pill bg-primary">{list.kategori}</span>
                                  <span className="float-end price-hp">Rp. {list.harga}</span>
                                </div>
                                <h5 className="card-title text-center">{list.title}</h5>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="container justify-content-center konsul">
        <div className="row d-flex justify-content-center">
          <h4 className="text-center pesan">Belum ada riwayat Pemesanan</h4>
        </div>
      </div>
    );
  }
}

export default DaftarPemesanan;
