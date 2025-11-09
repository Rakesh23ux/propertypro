import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaHome,
    FaKey,
    FaBuilding,
    FaMapMarkedAlt,
    FaComments,
    FaTimes,
    FaPaperPlane,
    FaArrowUp,
    FaEnvelope,
} from "react-icons/fa";


// === Local Images ===
import hero from "../images/hero.jpg";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.jpg";
import project5 from "../images/project5.jpg";
import project6 from "../images/project6.jpg";
import dev1 from "../images/dev1.jpg";
import dev2 from "../images/dev2.jpg";
import dev3 from "../images/dev3.jpg";
import dev4 from "../images/dev4.jpg";
import dev5 from "../images/dev5.jpg";
import dev6 from "../images/dev6.jpg";
import seller1 from "../images/seller1.jpg";
import seller2 from "../images/seller2.jpg";
import seller3 from "../images/seller3.jpg";
import seller4 from "../images/seller4.jpg";
import seller5 from "../images/seller5.jpg";
import seller6 from "../images/seller6.jpg";
import seller7 from "../images/seller7.jpg";
import cta from "../images/cta.jpg";

function LandingPage() {
    const [showChat, setShowChat] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const toggleChat = () => setShowChat(!showChat);

    useEffect(() => {
        AOS.init({ duration: 1200, once: true, offset: 100 });

        const handleScroll = () => {
            const heroHeight = window.innerHeight * 0.8;
            setIsNavbarVisible(window.scrollY <= heroHeight);
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div style={{ fontFamily: "Poppins, sans-serif", overflowX: "hidden" }}>
            {/* ===== NAVBAR ===== */}
            <nav
                className={`navbar navbar-expand-lg navbar-dark bg-transparent fixed-top transition-navbar ${isNavbarVisible ? "visible-navbar" : "hidden-navbar"
                    }`}
                style={{ backdropFilter: "blur(10px)" }}
            >
                <div className="container">
                    <a className="navbar-brand fw-bold fs-3 text-white" href="#">
                        Property<span className="text-warning">Pro</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            {["For Buyers", "For Tenants", "For Sellers", "Services"].map((item) => (
                                <li key={item} className="nav-item mx-3">
                                    <a className="nav-link text-white" href="#">
                                        {item}
                                    </a>
                                </li>
                            ))}
                            <li className="nav-item mx-3">
                                <a
                                    className="btn btn-warning text-dark px-3 rounded-pill fw-semibold"
                                    href="#"
                                >
                                    Login / Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ===== HERO SECTION ===== */}
            <section
                className="d-flex align-items-center justify-content-center text-center text-white"
                style={{
                    height: "100vh",
                    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${hero}) center/cover no-repeat`,
                }}
            >
                <div className="container" data-aos="fade-up">
                    <h1 className="display-4 fw-bold mb-3">
                        Find Your Perfect <span className="text-warning">Home</span>
                    </h1>
                    <p className="lead mb-5">
                        Discover, buy, or rent verified properties across India’s top
                        locations.
                    </p>

                    <div className="row justify-content-center" data-aos="zoom-in">
                        <div className="col-lg-8 bg-light p-4 rounded shadow-lg">
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search city, locality, or project"
                                    />
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select">
                                        <option>Buy</option>
                                        <option>Rent</option>
                                        <option>PG / Co-living</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Budget (₹)"
                                    />
                                </div>
                                <div className="col-md-2 d-grid">
                                    <button className="btn btn-warning text-dark fw-bold">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ===== CATEGORIES ===== */}
            <section
                className="py-5 text-center"
                data-aos="fade-up"
                style={{
                    background: "linear-gradient(135deg, #fff8e1 0%, #fff3cd 40%, #ffe082 100%)",
                }}
            >
                <div className="container">
                    <h2 className="fw-bold mb-5 text-dark">Explore by Category</h2>
                    <div className="row g-4">
                        {[
                            {
                                icon: <FaHome className="text-warning fs-1 mb-3" />,
                                title: "Buy Property",
                                desc: "Verified homes and apartments ready to move in.",
                            },
                            {
                                icon: <FaKey className="text-warning fs-1 mb-3" />,
                                title: "Rent Property",
                                desc: "Affordable rentals with verified landlords.",
                            },
                            {
                                icon: <FaBuilding className="text-warning fs-1 mb-3" />,
                                title: "Commercial",
                                desc: "Shops, offices, and coworking spaces.",
                            },
                            {
                                icon: <FaMapMarkedAlt className="text-warning fs-1 mb-3" />,
                                title: "Plots & Lands",
                                desc: "Open plots and land for your dream project.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="col-sm-6 col-md-3" data-aos="zoom-in">
                                <div
                                    className="card border-0 shadow-lg p-4 h-100 hover-zoom"
                                    style={{
                                        borderRadius: "15px",
                                        background: "rgba(255,255,255,0.95)",
                                        backdropFilter: "blur(8px)",
                                    }}
                                >
                                    {item.icon}
                                    <h5 className="fw-semibold">{item.title}</h5>
                                    <p className="text-muted small">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ===== TOP PROJECTS ===== */}
            <section className="py-5 bg-light" data-aos="fade-up">
                <div className="container text-center text-warning">
                    <h2 className="fw-bold mb-5">Top Highlighted Projects</h2>
                    <div className="row g-4">
                        {[
                            {
                                img: project1,
                                title: "Skyline Residency",
                                location: "Mumbai, Maharashtra",
                                price: "From ₹85L",
                            },
                            {
                                img: project2,
                                title: "Elite Greens",
                                location: "Bengaluru, Karnataka",
                                price: "From ₹72L",
                            },
                            {
                                img: project3,
                                title: "Palm Heights",
                                location: "Pune, Maharashtra",
                                price: "From ₹65L",
                            },
                            {
                                img: project4,
                                title: "Elite PLus Resorts",
                                location: "Goa ",
                                price: "From ₹75L",
                            },
                            {
                                img: project5,
                                title: "Private Villas",
                                location: " Vizag",
                                price: "From ₹1.2cr",
                            },
                            {
                                img: project6,
                                title: "Henrry Enclavie",
                                location: "French conoly, pondicherry ",
                                price: "From ₹85L",
                            },
                        ].map((project, i) => (
                            <div key={i} className="col-md-4" data-aos="flip-up">
                                <div className="card border-0 shadow-lg h-100 hover-zoom overflow-hidden">
                                    <img
                                        src={project.img}
                                        className="card-img-top"
                                        alt={project.title}
                                        style={{ height: "250px", objectFit: "cover" }}
                                    />
                                    <div className="card-body text-start">
                                        <h5 className="fw-bold">{project.title}</h5>
                                        <p className="text-muted mb-1">{project.location}</p>
                                        <p className="fw-bold text-warning">{project.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TOP PICKS WITH VIDEOS (CAROUSEL) ===== */}
            <section
                className="py-5 text-center text-light"
                data-aos="fade-up"
                style={{
                    // background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #3b2f00 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-60px",
                        right: "-60px",
                        width: "250px",
                        height: "250px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(255,193,7,0.3), transparent 70%)",
                        filter: "blur(50px)",
                    }}
                ></div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <h2 className="fw-bold mb-3 text-warning">Top Picks with Videos</h2>
                    <p className="text-light mb-5">
                        Explore expert discussions, property walkthroughs, and housing trends from across India.
                    </p>

                    <div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {[
                                [
                                    { videoId: "UpfqTkgBnxQ", title: "Buying A Home In India", desc: "Expert tips by Housing.com" },
                                    { videoId: "H-XWL9uA5FA", title: "Home Sales Fall 19% - What’s Next?", desc: "Market insights 2025" },
                                    { videoId: "SXrBj15GqbE", title: "Real Estate 2025: Market Trends", desc: "Future of Indian housing" },
                                ],
                                [
                                    { videoId: "S4p7z7YkQnI", title: "Luxury & Sustainability", desc: "Cohesive living interiors" },
                                    { videoId: "JqBnJLLgfsw", title: "India’s Luxury Real Estate Surge", desc: "High-end property boom" },
                                    { videoId: "YMptuUcklmU", title: "Urban Living Redefined", desc: "Modern smart homes" },
                                ],
                            ].map((slide, i) => (
                                <div
                                    key={i}
                                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                                    data-bs-interval="6000"
                                >
                                    <div className="row justify-content-center">
                                        {slide.map((vid, index) => (
                                            <div key={index} className="col-md-4 mb-4">
                                                <div
                                                    className="card border-0 shadow-lg h-100 hover-zoom overflow-hidden"
                                                    style={{
                                                        background: "rgba(255, 255, 255, 0.05)",
                                                        borderRadius: "15px",
                                                        backdropFilter: "blur(8px)",
                                                    }}
                                                >
                                                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                                                        <iframe
                                                            src={`https://www.youtube.com/embed/${vid.videoId}`}
                                                            title={vid.title}
                                                            allowFullScreen
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            style={{
                                                                position: "absolute",
                                                                top: 0,
                                                                left: 0,
                                                                width: "100%",
                                                                height: "100%",
                                                                borderTopLeftRadius: "15px",
                                                                borderTopRightRadius: "15px",
                                                            }}
                                                        ></iframe>
                                                    </div>
                                                    <div className="card-body text-start text-light">
                                                        <h6 className="fw-bold text-warning">{vid.title}</h6>
                                                        <p className="small text-muted">{vid.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel Controls */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#videoCarousel"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                                style={{
                                    backgroundColor: "#ffc107",
                                    borderRadius: "50%",
                                    padding: "10px",
                                    filter: "drop-shadow(0 0 5px rgba(255,193,7,0.6))",
                                }}
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#videoCarousel"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                                style={{
                                    backgroundColor: "#ffc107",
                                    borderRadius: "50%",
                                    padding: "10px",
                                    filter: "drop-shadow(0 0 5px rgba(255,193,7,0.6))",
                                }}
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                        {/* Carousel Indicators */}
                        <div className="carousel-indicators mt-4">
                            {[0, 1].map((i) => (
                                <button
                                    key={i}
                                    type="button"
                                    data-bs-target="#videoCarousel"
                                    data-bs-slide-to={i}
                                    className={i === 0 ? "active" : ""}
                                    aria-current={i === 0 ? "true" : undefined}
                                    style={{
                                        width: "12px",
                                        height: "12px",
                                        borderRadius: "50%",
                                        backgroundColor: "#ffc107",
                                        border: "none",
                                        margin: "0 5px",
                                    }}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ===== FEATURED DEVELOPERS ===== */}
            <section
                className="py-5 text-center"
                data-aos="fade-up"
                style={{
                    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #3b2f00 100%)",
                    color: "#fff",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Subtle Gold Overlay Glow */}
                <div
                    style={{
                        position: "absolute",
                        top: "-50px",
                        right: "-50px",
                        width: "250px",
                        height: "250px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(255,193,7,0.25), rgba(0,0,0,0))",
                        filter: "blur(50px)",
                    }}
                ></div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <h2 className="fw-bold mb-3 text-warning">Featured Developers</h2>
                    <p className="text-light mb-5">
                        Trusted and Award-winning Real Estate Developers Across India
                    </p>

                    <div id="devCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {[
                                [
                                    { name: "DLF Builders", image: dev1, tagline: "Luxury Homes & Commercial Spaces" },
                                    { name: "Godrej Properties", image: dev2, tagline: "Sustainable & Green Living Spaces" },
                                    { name: "Prestige Group", image: dev3, tagline: "Delivering Excellence Since 1986" },
                                ],
                                [
                                    { name: "Sobha Developers", image: dev4, tagline: "Elegant Homes for Modern India" },
                                    { name: "Tata Realty", image: dev5, tagline: "Redefining Urban Living" },
                                    { name: "Mahindra Lifespaces", image: dev6, tagline: "Sustainable Community Builders" },
                                ],
                            ].map((slide, i) => (
                                <div
                                    key={i}
                                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                                    data-bs-interval="4000"
                                >
                                    <div className="row justify-content-center">
                                        {slide.map((dev, index) => (
                                            <div key={index} className="col-10 col-md-4 mb-4">
                                                <div
                                                    className="card border-0 shadow-lg h-100 hover-zoom overflow-hidden"
                                                    style={{
                                                        borderRadius: "15px",
                                                        background: "rgba(255, 255, 255, 0.1)",
                                                        backdropFilter: "blur(12px)",
                                                        color: "#fff",
                                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                    }}
                                                >
                                                    <img
                                                        src={dev.image}
                                                        alt={dev.name}
                                                        className="w-100"
                                                        style={{
                                                            height: "220px",
                                                            objectFit: "cover",
                                                            borderTopLeftRadius: "15px",
                                                            borderTopRightRadius: "15px",
                                                            filter: "brightness(0.9)",
                                                        }}
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="fw-bold mb-1 text-warning">{dev.name}</h5>
                                                        <p className="text-light small mb-0">{dev.tagline}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel Controls */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#devCarousel"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                                style={{
                                    backgroundColor: "#ffc107",
                                    borderRadius: "50%",
                                    padding: "10px",
                                    filter: "drop-shadow(0 0 5px rgba(255,193,7,0.6))",
                                }}
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#devCarousel"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                                style={{
                                    backgroundColor: "#ffc107",
                                    borderRadius: "50%",
                                    padding: "10px",
                                    filter: "drop-shadow(0 0 5px rgba(255,193,7,0.6))",
                                }}
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                        {/* Indicators */}
                        <div className="carousel-indicators mt-4">
                            {[0, 1].map((i) => (
                                <button
                                    key={i}
                                    type="button"
                                    data-bs-target="#devCarousel"
                                    data-bs-slide-to={i}
                                    className={i === 0 ? "active" : ""}
                                    aria-current={i === 0 ? "true" : undefined}
                                    style={{
                                        width: "12px",
                                        height: "12px",
                                        borderRadius: "50%",
                                        backgroundColor: "#ffc107",
                                        border: "none",
                                        margin: "0 5px",
                                    }}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== RECOMMENDED SELLERS ===== */}
            <section
                className="py-5 text-center text-light"
                data-aos="fade-up"
                style={{
                    // background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3b2f00 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Subtle Glow Accent */}
                <div
                    style={{
                        position: "absolute",
                        top: "-60px",
                        right: "-60px",
                        width: "250px",
                        height: "250px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(255,193,7,0.3), transparent 70%)",
                        filter: "blur(50px)",
                    }}
                ></div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <h2 className="fw-bold mb-3 text-warning">Top Rated Sellers</h2>
                    <p className="text-light mb-5">
                        Meet our trusted agents — experienced professionals helping you find the perfect property with confidence.
                    </p>

                    <div className="row g-4  justify-content-center">
                        {[
                            {
                                img: seller1,
                                name: "Katy Wilson",
                                role: "Luxury Real Estate Consultant",
                                experience: "8+ Years",
                                rating: "⭐ 4.9/5",
                                location: "Mumbai, Maharashtra",
                            },
                            {
                                img: seller2,
                                name: "Arjun Mehta",
                                role: "Commercial Property Expert",
                                experience: "10+ Years",
                                rating: "⭐ 4.8/5",
                                location: "Bengaluru, Karnataka",
                            },
                            {
                                img: seller3,
                                name: "Melina Scott",
                                role: "Premium Homes Specialist",
                                experience: "6+ Years",
                                rating: "⭐ 4.7/5",
                                location: "Pune, Maharashtra",
                            },
                            {
                                img: seller4,
                                name: "clinkara",
                                role: "Investment & Resale Expert",
                                experience: "12+ Years",
                                rating: "⭐ 4.9/5",
                                location: "Delhi NCR",
                            },
                            {
                                img: seller5,
                                name: "John Mendes",
                                role: "Property Consultant & Advisor",
                                experience: "9+ Years",
                                rating: "⭐ 4.8/5",
                                location: "Chennai, Tamil Nadu",
                            },
                            {
                                img: seller6,
                                name: " Sarah Thomas",
                                role: "Luxury Villa Specialist",
                                experience: "7+ Years",
                                rating: "⭐ 4.6/5",
                                location: "Goa, India",
                            },
                            {
                                img: seller7,
                                name: " Shopie west",
                                role: "Luxury Villa Specialist",
                                experience: "7+ Years",
                                rating: "⭐ 4.6/5",
                                location: "Goa, India",
                            },
                        ].map((seller, i) => (
                            <div key={i} className="col-md-4 col-lg-3" data-aos="zoom-in">
                                <div
                                    className="card border-0 shadow-lg text-dark h-100 hover-zoom"
                                    style={{
                                        borderRadius: "15px",
                                        background: "rgba(255, 255, 255, 0.95)",
                                        transition: "transform 0.4s ease, box-shadow 0.4s ease",
                                    }}
                                >
                                    <div className="card-body text-center p-4">
                                        <div
                                            className="mx-auto mb-3"
                                            style={{
                                                width: "110px",
                                                height: "110px",
                                                borderRadius: "50%",
                                                overflow: "hidden",
                                                boxShadow: "0 0 15px rgba(255,193,7,0.4)",
                                            }}
                                        >
                                            <img
                                                src={seller.img}
                                                alt={seller.name}
                                                className="w-100 h-100"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>

                                        <h5 className="fw-bold text-dark mb-1">{seller.name}</h5>
                                        <p className="text-muted small mb-2">{seller.role}</p>
                                        <p className="text-warning fw-semibold small mb-1">
                                            {seller.rating}
                                        </p>
                                        <p className="text-secondary small mb-2">
                                            📍 {seller.location}
                                        </p>
                                        <p className="text-muted small mb-3">
                                            Experience: <span className="fw-semibold">{seller.experience}</span>
                                        </p>

                                        <div className="d-flex justify-content-center gap-2">
                                            <button className="btn btn-warning btn-sm text-dark fw-semibold px-3 rounded-pill">
                                                View Profile
                                            </button>
                                            <button className="btn btn-outline-dark btn-sm fw-semibold px-3 rounded-pill">
                                                Contact Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ===== CHAT + CONTACT WIDGETS ===== */}
            <div
                className="position-fixed bottom-0 end-0 m-4 d-flex flex-column align-items-end"
                style={{ gap: "10px", zIndex: 1050 }}
            >
                <button
                    className="btn btn-dark rounded-circle shadow-lg p-3"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                    style={{ width: "60px", height: "60px" }}
                >
                    <FaEnvelope className="fs-4 text-warning" />
                </button>

                <button
                    onClick={toggleChat}
                    className="btn btn-warning rounded-circle shadow-lg p-3"
                    style={{ width: "60px", height: "60px" }}
                >
                    {showChat ? <FaTimes className="fs-4 text-dark" /> : <FaComments className="fs-4 text-dark" />}
                </button>

                {showChat && (
                    <div
                        className="card shadow-lg border-0 mt-3"
                        style={{ width: "320px", borderRadius: "15px", animation: "fadeIn 0.4s ease" }}
                    >
                        <div className="card-header bg-warning text-dark fw-bold d-flex justify-content-between align-items-center">
                            <span>💬 Chat with Agent</span>
                            <FaTimes onClick={toggleChat} style={{ cursor: "pointer" }} />
                        </div>
                        <div
                            className="card-body"
                            style={{ height: "250px", overflowY: "auto", background: "#f9f9f9" }}
                        >
                            <div className="text-muted small mb-2">👋 Hi there! How can I help you today?</div>
                        </div>
                        <div className="card-footer bg-light">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Type a message..." />
                                <button className="btn btn-warning">
                                    <FaPaperPlane />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* ===== CONTACT MODAL ===== */}
            <div className="modal fade" id="contactModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow-lg">
                        <div className="modal-header bg-warning text-dark">
                            <h5 className="modal-title fw-bold">📩 Contact Us</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Full Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Message</label>
                                    <textarea className="form-control" rows="4" placeholder="Your message here..."></textarea>
                                </div>
                                <button type="button" className="btn btn-dark w-100 fw-semibold">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SCROLL TO TOP ===== */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="btn btn-dark rounded-circle shadow position-fixed bottom-0 start-0 m-4 scroll-top-btn pulse"
                >
                    <FaArrowUp className="fs-5 text-warning" />
                </button>
            )}

            {/* ===== SELL PROPERTY CTA ===== */}
            <section
                className="py-5 text-dark text-center"
                style={{
                    background: `linear-gradient(rgba(255,193,7,0.9), rgba(255,193,7,0.9)), url(${cta}) center/cover no-repeat`,
                }}
                data-aos="zoom-in"
            >
                <div className="container">
                    <h2 className="fw-bold mb-3">Have a Property to Sell?</h2>
                    <p className="lead mb-4">
                        List your property with PropertyPro and connect instantly with
                        verified buyers.
                    </p>
                    <button className="btn btn-dark btn-lg rounded-pill px-4 fw-semibold">
                        List Your Property Now
                    </button>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer
                className="text-light pt-5 pb-3"
                style={{
                    background:
                        "radial-gradient(circle at top left, #111 0%, #000 80%)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Gradient Top Border */}
                <div
                    style={{
                        height: "5px",
                        background:
                            "linear-gradient(90deg, #ffc107, #ff9800, #ff5722)",
                    }}
                ></div>

                <div className="container mt-4">
                    <div className="row gy-4 text-center text-md-start">
                        {/* Brand Info */}
                        <div className="col-md-3">
                            <h3 className="fw-bold text-warning mb-3">
                                Property<span className="text-light">Pro</span>
                            </h3>
                            <p className="small text-secondary">
                                Your trusted partner for real estate — discover verified
                                homes, premium rentals, and commercial spaces with ease.
                            </p>
                            <div className="d-flex justify-content-md-start justify-content-center mt-3">
                                <a href="#" className="text-light me-3 fs-5 social-hover">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-light me-3 fs-5 social-hover">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-light me-3 fs-5 social-hover">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" className="text-light fs-5 social-hover">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>

                        {/* Explore Links */}
                        <div className="col-md-3">
                            <h6 className="fw-bold text-warning mb-3">Explore</h6>
                            <ul className="list-unstyled small">
                                <li><a href="#" className="footer-link">Buy Property</a></li>
                                <li><a href="#" className="footer-link">Rent Property</a></li>
                                <li><a href="#" className="footer-link">Commercial Spaces</a></li>
                                <li><a href="#" className="footer-link">Luxury Projects</a></li>
                                <li><a href="#" className="footer-link">Upcoming Properties</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div className="col-md-3">
                            <h6 className="fw-bold text-warning mb-3">Support</h6>
                            <ul className="list-unstyled small">
                                <li><a href="#" className="footer-link">About Us</a></li>
                                <li><a href="#" className="footer-link">FAQs</a></li>
                                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                                <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                                <li><a href="#" className="footer-link">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="col-md-3">
                            <h6 className="fw-bold text-warning mb-3">Stay Updated</h6>
                            <p className="small text-secondary">
                                Subscribe to get exclusive property updates, market insights,
                                and special offers directly to your inbox.
                            </p>
                            <form className="d-flex mt-2">
                                <input
                                    type="email"
                                    className="form-control rounded-start-pill border-0"
                                    placeholder="Your email"
                                    style={{ background: "#222", color: "#fff" }}
                                />
                                <button
                                    className="btn btn-warning rounded-end-pill fw-semibold px-3"
                                    type="button"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <hr className="border-secondary mt-5" />

                    <div className="text-center small text-secondary">
                        <p className="mb-0">
                            © {new Date().getFullYear()}{" "}
                            <span className="text-warning fw-semibold">PropertyPro</span>.
                            All Rights Reserved.
                        </p>
                        <p className="text-success">
                            Designed with ❤️ by the PropertyPro Frontend Team
                        </p>
                    </div>
                </div>

                {/* Footer Glow Animation */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "-50px",
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(255,193,7,0.15), transparent 70%)",
                        filter: "blur(40px)",
                    }}
                ></div>
            </footer>

            {/* ===== CUSTOM STYLES ===== */}
            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseGlow {
            0% { box-shadow: 0 0 0 rgba(255, 193, 7, 0.4); }
            50% { box-shadow: 0 0 15px rgba(255, 193, 7, 0.9); }
            100% { box-shadow: 0 0 0 rgba(255, 193, 7, 0.4); }
          }
          .pulse { animation: pulseGlow 1.8s infinite; }
          .hover-zoom { transition: all 0.3s ease; }
          .hover-zoom:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.15);
          }
          .transition-navbar {
            transition: opacity 0.6s ease, transform 0.6s ease;
          }
          .hidden-navbar {
            opacity: 0;
            transform: translateY(-80px);
            pointer-events: none;
          }
          .visible-navbar {
            opacity: 1;
            transform: translateY(0);
          }
          .scroll-top-btn {
            z-index: 2000 !important;
            bottom: 30px !important; /* lifts it slightly above the footer */
          }

          /* On very short pages, adjust automatically */
          @media (max-height: 700px) {
            .scroll-top-btn {
              bottom: 100px !important;
            }
          }

          .footer-link {
            color: #bbb;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .footer-link:hover {
            color: #ffc107;
          }
          .social-hover:hover {
            color: #ffc107 !important;
            transform: scale(1.2);
            transition: all 0.3s ease;
          }
        `}
            </style>


        </div>
    );
}

export default LandingPage;
