
"use client";

import Link from "next/link";
import { useState } from "react";
import "./header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [industriesOpen, setIndustriesOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Technologies", href: "/technologies" },
        { name: "About Us", href: "/about-us" },
    ];

    const services = [
        {
            title: "Web App Development",
            description: "Modern and responsive web applications.",
            icon: "bi bi-code-slash",
            href: "/services/web-app-development",
        },
        {
            title: "Mobile App Development",
            description: "Powerful apps for Android and iOS.",
            icon: "bi bi-phone",
            href: "/services/mobile-app-development",
        },
        {
            title: "Ecommerce Development",
            description: "Secure and scalable online shopping experiences.",
            icon: "bi bi-cart3",
            href: "/services/ecommerce-development",
        },
        {
            title: "Edu Tech Solutions",
            description: "Digital learning platforms for education.",
            icon: "bi bi-mortarboard",
            href: "/services/edu-tech-solutions",
        },
        {
            title: "Digital Marketing",
            description: "Strategies to grow your online presence.",
            icon: "bi bi-graph-up-arrow",
            href: "/services/digital-marketing",
        },
        {
            title: "Graphic Designing",
            description: "Creative branding and visual design solutions.",
            icon: "bi bi-palette",
            href: "/services/graphic-designing",
        },
    ];

    const industries = [
        {
            title: "Healthcare & Medical",
            description: "Digital solutions for healthcare and medical services.",
            icon: "bi bi-heart-pulse",
            href: "/industries/healthcare-medical",
        },
        {
            title: "Education & E-Learning",
            description: "Smart platforms for learning and education.",
            icon: "bi bi-mortarboard",
            href: "/industries/education-e-learning",
        },
        {
            title: "Manufacturing",
            description: "Technology solutions for modern manufacturing.",
            icon: "bi bi-gear-wide-connected",
            href: "/industries/manufacturing",
        },
        {
            title: "Retail & Ecommerce",
            description: "Digital experiences for retail and online businesses.",
            icon: "bi bi-shop",
            href: "/industries/retail-ecommerce",
        },
        {
            title: "FSM Service",
            description: "Streamlining field service operations with smart digital solutions.",
            icon: "bi bi-tools",
            href: "/industries/fsm-service",
        },
        {
            title: "Travel & Hospitality",
            description: "Technology that enhances travel and guest experiences.",
            icon: "bi bi-airplane",
            href: "/industries/travel-hospitality",
        },
        {
            title: "Real Estate",
            description: "Digital platforms for property and real estate businesses.",
            icon: "bi bi-buildings",
            href: "/industries/real-estate",
        },
    ];

    const closeMenus = () => {
        setMenuOpen(false);
        setServicesOpen(false);
        setIndustriesOpen(false);
    };

    return (
        <header className="rayloop-header">
            <div className="rayloop-header-container">
                <Link
                    href="/"
                    className="rayloop-logo"
                    onClick={closeMenus}
                >
                    <img src="/logo.webp" alt="RayLoop Logo" />
                </Link>

                <button
                    className={`rayloop-menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    type="button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`rayloop-nav ${menuOpen ? "active" : ""}`}>
                    <Link
                        href="/"
                        className="rayloop-nav-link"
                        onClick={closeMenus}
                    >
                        Home
                    </Link>

                    <div
                        className={`rayloop-services-dropdown ${servicesOpen ? "services-open" : ""
                            }`}
                        onMouseEnter={() => {
                            if (window.innerWidth > 992) {
                                setServicesOpen(true);
                            }
                        }}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button
                            type="button"
                            className="rayloop-nav-link rayloop-services-trigger"
                            onClick={() => {
                                setServicesOpen(!servicesOpen);
                                setIndustriesOpen(false);
                            }}
                            aria-expanded={servicesOpen}
                        >
                            Services
                            <i className="bi bi-chevron-down services-chevron"></i>
                        </button>

                        <div className="rayloop-services-menu">
                            <div className="rayloop-services-grid">
                                {services.map((service) => (
                                    <Link
                                        key={service.title}
                                        href={service.href}
                                        className="rayloop-service-item"
                                        onClick={closeMenus}
                                    >
                                        <span className="rayloop-service-icon">
                                            <i className={service.icon}></i>
                                        </span>

                                        <span className="rayloop-service-content">
                                            <span className="rayloop-service-title">
                                                {service.title}
                                            </span>
                                            <span className="rayloop-service-description">
                                                {service.description}
                                            </span>
                                        </span>

                                        <i className="bi bi-arrow-up-right rayloop-service-arrow"></i>
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="/services"
                                className="rayloop-all-services"
                                onClick={closeMenus}
                            >
                                Explore All Services
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`rayloop-industries-dropdown ${industriesOpen ? "industries-open" : ""
                            }`}
                        onMouseEnter={() => {
                            if (window.innerWidth > 992) {
                                setIndustriesOpen(true);
                            }
                        }}
                        onMouseLeave={() => setIndustriesOpen(false)}
                    >
                        <div className="rayloop-industries-heading">
                            <Link
                                href="/industries"
                                className="rayloop-nav-link rayloop-industries-link"
                                onClick={closeMenus}
                            >
                                Industries
                            </Link>

                            <button
                                type="button"
                                className="rayloop-industries-toggle"
                                onClick={() => {
                                    setIndustriesOpen(!industriesOpen);
                                    setServicesOpen(false);
                                }}
                                aria-label="Toggle industries menu"
                                aria-expanded={industriesOpen}
                            >
                                <i className="bi bi-chevron-down industries-chevron"></i>
                            </button>
                        </div>

                        <div className="rayloop-industries-menu">
                            <div className="rayloop-industries-grid">
                                {industries.map((industry) => (
                                    <Link
                                        key={industry.title}
                                        href={industry.href}
                                        className="rayloop-industry-item"
                                        onClick={closeMenus}
                                    >
                                        <span className="rayloop-industry-icon">
                                            <i className={industry.icon}></i>
                                        </span>

                                        <span className="rayloop-industry-content">
                                            <span className="rayloop-industry-title">
                                                {industry.title}
                                            </span>

                                            <span className="rayloop-industry-description">
                                                {industry.description}
                                            </span>
                                        </span>

                                        <i className="bi bi-arrow-up-right rayloop-industry-arrow"></i>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {navLinks.slice(1).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="rayloop-nav-link"
                            onClick={closeMenus}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="rayloop-contact-btn"
                        onClick={closeMenus}
                    >
                        Contact Us
                        <span className="rayloop-contact-arrow">↗</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
