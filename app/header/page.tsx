"use client";

import Link from "next/link";
import { useState } from "react";
import "./header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Industries", href: "/industries" },
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


    return (
        <header className="rayloop-header">
            <div className="rayloop-header-container">
                <Link
                    href="/"
                    className="rayloop-logo"
                    onClick={() => setMenuOpen(false)}
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
                        onClick={() => {
                            setMenuOpen(false);
                            setServicesOpen(false);
                        }}
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
                            onClick={() => setServicesOpen(!servicesOpen)}
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
                                        onClick={() => {
                                            setMenuOpen(false);
                                            setServicesOpen(false);
                                        }}
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
                                onClick={() => {
                                    setMenuOpen(false);
                                    setServicesOpen(false);
                                }}
                            >
                                Explore All Services
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>

                    {navLinks.slice(1).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="rayloop-nav-link"
                            onClick={() => {
                                setMenuOpen(false);
                                setServicesOpen(false);
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="rayloop-contact-btn"
                        onClick={() => {
                            setMenuOpen(false);
                            setServicesOpen(false);
                        }}
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