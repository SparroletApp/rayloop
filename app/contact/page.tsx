
"use client";

import { useState } from "react";
import "./contact.css";

function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        try {
            alert("Thank you for contacting RayLoop!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="rayloop-contact-page">
            <section className="rayloop-contact-section">
                <div className="rayloop-contact-container">
                    <div className="rayloop-contact-left">
                        <div className="rayloop-contact-heading">
                            <span className="rayloop-contact-label">
                                <i className="bi bi-telephone"></i>
                                Contact Us
                            </span>

                            <h1>
                                Get In <span>Touch</span>
                            </h1>

                            <p>
                                Have a project in mind or looking for the right
                                software solution? We would love to hear from you.
                                Let&apos;s discuss how RayLoop can help your
                                business grow with innovative technology.
                            </p>
                        </div>

                        <div className="rayloop-location-card">
                            <div className="rayloop-location-content">
                                <span className="rayloop-location-tag">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    Our Location
                                </span>

                                <h3>
                                    Kochi, <span>Kerala</span>
                                </h3>

                                <p className="rayloop-location-description">
                                    Visit our office in Kochi, Kerala, and
                                    discover how we can turn your ideas into
                                    powerful digital solutions.
                                </p>

                                <div className="rayloop-location-address">
                                    <i className="bi bi-geo-alt-fill"></i>

                                    <div>
                                        <strong>Office Address</strong>

                                        <p>
                                            Rayloop Private Limited,
                                            <br />
                                            Corrazone, Panadans, University Road,
                                            <br />
                                            Vidya Nagar Colony, Thrikkakara,
                                            <br />
                                            Kalamassery, Kochi, Kerala 682022.
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Rayloop+Private+Limited+Corrazone+Panadans+University+Road+Vidya+Nagar+Colony+Thrikkakara+Kalamassery+Kochi+Kerala+682022"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rayloop-map-link"
                                >
                                    View on Google Maps
                                    <i className="bi bi-arrow-up-right"></i>
                                </a>
                            </div>

                            <div className="rayloop-location-decoration">
                                <i className="bi bi-geo-alt-fill"></i>
                            </div>
                        </div>
                        <div className="rayloop-contact-info-grid">
                            <a
                                href="mailto:info@rayloop.com"
                                className="rayloop-contact-info-card"
                            >
                                <div className="rayloop-contact-info-icon">
                                    <i className="bi bi-envelope"></i>
                                </div>

                                <div className="rayloop-contact-info-content">
                                    <span>Email Us</span>
                                    <h4>info@rayloop.com</h4>
                                </div>

                                <i className="bi bi-arrow-up-right rayloop-info-arrow"></i>
                            </a>

                            <a
                                href="tel:+916282089962"
                                className="rayloop-contact-info-card"
                            >
                                <div className="rayloop-contact-info-icon">
                                    <i className="bi bi-telephone"></i>
                                </div>

                                <div className="rayloop-contact-info-content">
                                    <span>Call Us</span>
                                    <h4>+91 6282 089 962</h4>
                                </div>

                                <i className="bi bi-arrow-up-right rayloop-info-arrow"></i>
                            </a>
                        </div>
                        <div className="rayloop-contact-bottom-links">
                            <a href="/privacy-policy">Privacy Policy</a>
                            <span></span>
                            <a href="/terms">Terms &amp; Conditions</a>
                        </div>
                    </div>
                    <div className="rayloop-contact-form-wrapper">
                        <div className="rayloop-form-heading">
                            <span className="rayloop-form-label">
                                LET&apos;S TALK
                            </span>

                            <h2>
                                Send us a <span>message</span>
                            </h2>

                            <p>
                                Tell us about your requirements. Our team will
                                get in touch with you to discuss your project.
                            </p>
                        </div>

                        <form
                            className="rayloop-contact-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="rayloop-form-row">
                                <div className="rayloop-form-group">
                                    <label htmlFor="contact-name">
                                        First Name <span>*</span>
                                    </label>

                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="firstName"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        autoComplete="firstName"
                                        required
                                    />
                                </div>

                                <div className="rayloop-form-group">
                                    <label htmlFor="contact-name">
                                        First Name <span>*</span>
                                    </label>

                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="lastName"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        autoComplete="lastName"
                                        required
                                    />
                                </div>


                            </div>

                            <div className="rayloop-form-row">
                                <div className="rayloop-form-group">
                                    <label htmlFor="contact-phone">
                                        Phone Number
                                    </label>

                                    <input
                                        id="contact-phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 XXXXX XXXXX"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        autoComplete="tel"
                                    />
                                </div>
                                <div className="rayloop-form-group">
                                    <label htmlFor="contact-email">
                                        Email Address <span>*</span>
                                    </label>

                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="rayloop-form-group">
                                <label htmlFor="contact-message">
                                    Your Message <span>*</span>
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us about your project and how we can help..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="rayloop-submit-button"
                                disabled={loading}>
                                {loading ? "Please wait..." : "Send Message"}

                                <i className="bi bi-arrow-right"></i>
                            </button>

                            <p className="rayloop-form-note">
                                <i className="bi bi-shield-check"></i>
                                Your information is important to us.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ContactUs;
