import React from "react";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", background: "#f8f9fa" }}>
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h4 className="fw-bold text-center mb-3 text-warning">Login</h4>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button className="btn btn-warning w-100 fw-semibold text-dark">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
