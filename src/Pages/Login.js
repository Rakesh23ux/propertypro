import React from "react";
import logo from "../images/logo.jpg"; // ✅ update this path based on where your image is saved
function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://t3.ftcdn.net/jpg/06/32/02/52/360_F_632025216_WMXXsXoI2c8ZSPkwsFBSH4BMqm9LumdP.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="card p-4 shadow-lg border-0"
        style={{
          width: "400px",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(248, 241, 176, 0.85)",
          textAlign: "center",
        }}
      >
        {/* 🖼️ Logo + Title Heading */}
        <div className="d-flex justify-content-center align-items-center mb-4">
          <img
            src={logo}
            alt="Login Logo"
            style={{
              width: "850px",
              height: "170px",
              objectFit: "contain",
              marginRight: "10px",
            }}
          />
          <h3
            className="fw-bold"
            style={{
              color: "#5A4FCF", // purple text color (like your uploaded example)
              fontFamily: "'Cinzel Decorative', cursive",
              margin: 0,
            }}
          >
          </h3>
        </div>

        {/* 🧾 Login Form */}
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              style={{
                borderRadius: "10px",
                padding: "10px",
              }}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              style={{
                borderRadius: "10px",
                padding: "10px",
              }}
            />
          </div>

          <button
            className="btn btn-warning w-100 fw-semibold text-dark"
            style={{ borderRadius: "10px" }}
          >
            Login
          </button>
        </form>

        <p
          className="text-center mt-3 text-secondary"
          style={{ fontSize: "14px" }}
        >
          Don’t have an account?{" "}
          <a href="#" className="text-primary fw-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
