import React from "react";
import { useNavigate } from "react-router-dom"; // import navigation hook

function Signup() {
  const navigate = useNavigate(); // initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    // 👉 you can also add form validation or API call here
    alert("Signup successful!");

    // after signup, redirect to login page
    navigate("/login");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://img.lovepik.com/photo/40191/1328.jpg_wh860.jpg')",
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
          backgroundColor: "rgba(255, 255, 255, 0.1)", // glass effect
        }}
      >
        <h4 className="fw-bold text-center mb-4 text-warning">Sign Up</h4>

        {/* form submit handled here */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              style={{
                borderRadius: "10px",
                padding: "10px",
              }}
              required
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
              required
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
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100 fw-semibold text-dark"
            style={{ borderRadius: "10px" }}
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-3 text-dark" style={{ fontSize: "16px" }}>
          Already have an account?{" "}
          <a
            href="#"
            className="text-warning fw-semibold"
            onClick={() => navigate("/login")} // also navigate when clicking link
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
