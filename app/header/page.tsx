"use client";

import Link from "next/link";
import { useState } from "react";
import "./header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Industries", href: "/industries" },
        { name: "Products", href: "/products" },
        { name: "Technologies", href: "/technologies" },
        { name: "About Us", href: "/about-us" },
    ];

    return (
        <header className="rayloop-header">
            <div className="rayloop-header-container">
                <Link href="/" className="rayloop-logo">
                    <img src="/logo.webp"></img>
                </Link>

                <button
                    className="rayloop-menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`rayloop-nav ${menuOpen ? "active" : ""}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="rayloop-nav-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/contact-us"
                        className="rayloop-contact-btn"
                        onClick={() => setMenuOpen(false)}
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