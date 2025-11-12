import React from "react";

function Services() {
  return (
    <div className="container py-5 text-center">
      <h1 className="text-warning fw-bold mb-3">Our Services</h1>
      <p className="lead text-muted">
        End-to-end assistance from buying, renting, to property management.
      </p>
      <div className="row mt-5 g-4">
        {[
          "Property Valuation",
          "Virtual Tours",
          "Legal Assistance",
          "Home Loans",
        ].map((service, i) => (
          <div key={i} className="col-md-3">
            <div className="card shadow-lg p-4 border-0">
              <h5 className="fw-semibold text-warning">{service}</h5>
              <p className="small text-muted">
                Professional guidance to make your real estate journey easier.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
