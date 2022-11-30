import React, { useEffect, useState } from "react";
import "./Registrasi.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";

function Registrasi() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [jenis, setJenis] = useState("");
  const navigate = useNavigate();
  const [change, setChange] = useState("password");
  const [isiregist, setIsiRegist] = useState([]);

  const getpassword = () => {
    setChange("text");
    console.log(change);
  };

  const hidepassword = () => {
    setChange("password");
  };
  const getRegister = () => {
    const formData = localStorage.getItem("userRegist");
    setIsiRegist(JSON.parse(formData));
  };

  const setUser = async () => {
    if (name === "" || email === "" || password === "" || role === "" || jenis === undefined) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Data tidak boleh kosong atau data yang anda masukkan salah",
      });
    } else {
      Swal.fire({
        title: "Sweet!",
        text: "Selamat anda berhasil Registrasi",
        icon: "success",
        confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
      });
      navigate("/");
      let dataRegist = {
        name,
        email,
        password,
        role,
        jenis,
      };

      fetch("https://631cc4864fa7d3264cb66955.mockapi.io/UserRegist", {
        method: "POST",
        body: JSON.stringify(dataRegist),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => JSON.parse(response))
        .then((data) => setIsiRegist(data));
      // if (isiregist === null) {
      //   setIsiRegist([dataRegist]);
      //   localStorage.setItem("userRegist", JSON.stringify([dataRegist]));
      // } else {
      //   localStorage.setItem("userRegist", JSON.stringify([...isiregist, dataRegist]));
      //   setIsiRegist([...isiregist, dataRegist]);
      // }
    }
  };
  useEffect(() => {
    getRegister();
  }, []);

  useEffect(() => {
    console.log(isiregist);
  }, [isiregist]);

  return (
    <>
      <Navbar />
      <div id="containerRegistrasi" className="mb-3">
        <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <div id="services">
            <h1 className="section-heading">Register</h1>
            <h5 className="section-subheading">Silahkan Registrasi terlebih dahulu!</h5>
            <hr />
          </div>
        </div>
      </div>
      <div className="form-body">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Register Today</h3>
              <p>Fill in the data below.</p>
              <form className="requires-validation" noValidate>
                <div className="col-md-12">
                  <input className="form-control" change="text" name="name" placeholder="Full Name" required onChange={(e) => setName(e.target.value)} />
                  <div className="valid-feedback">Username field is valid!</div>
                </div>

                <div className="col-md-12">
                  <input className="form-control" type="email" name="email" placeholder="E-mail Address" required onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="col-md-12">
                  <select className="form-select mt-3" required onChange={(e) => setRole(e.target.value)}>
                    <option value="Dokter" selected disabled>
                      Position
                    </option>
                    <option value="Dokter">Dokter</option>
                    <option value="User">User</option>
                  </select>
                  <div className="valid-feedback">You selected a position!</div>
                </div>

                <div className="col-md-12">
                  {change === "password" && (
                    <>
                      <input className="form-control" type="password" name="password" id="password-input" placeholder="Password" required onChange={(e) => setPassword(e.target.value, setChange(e.target.type))} />
                      <button className="btn-tombol mt-4" onClick={(e) => getpassword(e.preventDefault())}>
                        Show Password
                      </button>
                    </>
                  )}
                  {change === "text" && (
                    <>
                      <input className="form-control" type="text" name="password" id="password-input" placeholder="Password" value={password} />
                      <button className="btn-tombol mt-4" onClick={(e) => hidepassword(e.preventDefault())}>
                        Delete Password
                      </button>
                    </>
                  )}
                </div>
                <div className="col-md-12 mt-3">
                  <label className="mb-3 mr-1 jenis" htmlFor="gender">
                    Gender :
                  </label>

                  <input type="radio" className="btn-check" name="gender" id="Laki-laki" autoComplete="off" required onChange={(e) => setJenis(e.target.id)} />
                  <label className="btn btn-sm btn-outline-primary jenis" htmlFor="Laki-laki">
                    Male
                  </label>

                  <input type="radio" className="btn-check" name="gender" id="Perempuan" autoComplete="off" required onChange={(e) => setJenis(e.target.id)} />
                  <label className="btn btn-sm btn-outline-primary jenis" htmlFor="Perempuan">
                    Female
                  </label>

                  <div className="valid-feedback mv-up">You selected a gender!</div>
                  <div className="invalid-feedback mv-up">Please select a gender!</div>
                </div>
                <div className="text-center mt-2">
                  <label className="form-check-label">
                    <b>I confirm that all data are correct and can be responsible</b>{" "}
                  </label>
                </div>
                <div className="form-button mt-3">
                  <button id="submit" type="submit" className="noselect" onClick={(e) => setUser(e.preventDefault())}>
                    Register
                  </button>
                </div>
                <div className="col-md-12 mt-3">
                  <h6 style={{ color: "black" }}>
                    Already have an account?
                    <a style={{ textDecoration: "none" }} href="/Login">
                      Login
                    </a>
                  </h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrasi;
