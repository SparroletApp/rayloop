"use client";

import Link from "next/link";
import Image from "next/image";
import "./product.css";
import "../footer/footer.css";

function Products() {
    const products = [
        {
            number: "01",
            name: "RayLoop FSM",
            subtitle: "Field Service Management",
            description:
                "Simplify your field service operations with an intelligent management platform. Manage customers, service requests, technicians, assets, and recurring maintenance from one centralized system.",
            icon: "bi bi-tools",
            image: "/fsm.jpg",
            imageAlt: "RayLoop Field Service Management application",
            features: [
                "Job & Work Order Management",
                "Technician Tracking",
                "Customer & Asset Management",
                "Recurring Service Reminders",
            ],
            tags: ["Web Application", "Mobile Application", "Cloud Based"],
            link: "/products/fsm",
        },
        {
            number: "02",
            name: "Tour Package Management",
            subtitle: "Travel & Tourism Management",
            description:
                "Streamline your travel business with a powerful tour package management application. Organize tour packages, manage customer bookings, plan itineraries, and simplify your day-to-day travel operations.",
            icon: "bi bi-airplane",
            image: "/tour.jpg",
            imageAlt: "Tour Package Management application",
            features: [
                "Tour Package Management",
                "Booking & Customer Management",
                "Travel Itinerary Planning",
                "Tour Scheduling & Coordination",
            ],
            tags: [
                "Web Application",
                "Booking Management",
                "Travel Solutions",
            ],
            link: "/products/tour-package-management",
        },
    ];

    return (
        <section className="product-section">
            <div className="product-container">
                <div className="product-heading">
                    <span className="product-eyebrow">
                        OUR PRODUCTS
                    </span>

                    <h2>
                        Smart Software for
                        <span> Growing Businesses</span>
                    </h2>

                    <p>
                        Discover our innovative software products designed
                        to simplify operations, improve productivity, and
                        help businesses work smarter.
                    </p>
                </div>

                <div className="row product-grid">
                    {products.map((product) => (
                        <div
                            className="col-lg-4 col-md-4 col-12 product-card"
                            key={product.number}
                        >
                            <Link
                                href={product.link}
                                className="product-image-link"
                                aria-label={`Explore ${product.name}`}
                            >
                                <div className="product-image-wrapper">
                                    <Image
                                        src={product.image}
                                        alt={product.imageAlt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 550px"
                                        className="product-image"
                                    />

                                    <div className="product-image-overlay">
                                        <span className="product-image-label">
                                            {product.subtitle}
                                        </span>

                                        <span className="product-image-number">
                                            {product.number}
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            <div className="product-card-content">
                                <div className="product-card-top">
                                    <div className="product-icon">
                                        <i className={product.icon}></i>
                                    </div>

                                    <span className="product-number">
                                        {product.number}
                                    </span>
                                </div>

                                <span className="product-subtitle">
                                    {product.subtitle}
                                </span>

                                <h3>{product.name}</h3>

                                <p className="product-description">
                                    {product.description}
                                </p>

                                <div className="product-features">
                                    {product.features.map((feature) => (
                                        <div
                                            className="product-feature"
                                            key={feature}
                                        >
                                            <i className="bi bi-check-circle-fill"></i>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="product-tags">
                                    {product.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>

                                <Link
                                    href={product.link}
                                    className="product-link"
                                >
                                    Explore Product
                                    <i className="bi bi-arrow-up-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="rl-footer-banner">
                <div className="rl-footer-banner-content">
                    <span className="rl-footer-badge">
                        <span className="rl-status-dot"></span>
                        LET&apos;S BUILD SOMETHING GREAT
                    </span>

                    <h3>
                        Have an idea?
                        <span> Let&apos;s make it happen.</span>
                    </h3>

                    <p>
                        Turn your vision into a powerful digital experience
                        with RayLoop.
                    </p>
                </div>

                <Link
                    href="/contact"
                    className="rl-footer-banner-btn"
                >
                    Start a Project
                    <i className="bi bi-arrow-right"></i>
                </Link>
            </div>
        </section>
    );
}

export default Products;