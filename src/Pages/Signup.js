import React from "react";

function Signup() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=1400&q=80')",
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
          backgroundColor: "rgba(255, 255, 255, 0.85)", // glass effect
        }}
      >
        <h4 className="fw-bold text-center mb-4 text-warning">Sign Up</h4>

        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              style={{
                borderRadius: "10px",
                padding: "10px",
              }}
            />
          </div>

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
            Create Account
          </button>
        </form>

        <p className="text-center mt-3 text-secondary" style={{ fontSize: "14px" }}>
          Already have an account?{" "}
          <a href="#" className="text-warning fw-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
