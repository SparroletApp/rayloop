"use client";

import { useState } from "react";
import "./contact.css";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const service = formData.get("service") as string;
        const message = formData.get("message") as string;

        const subject = encodeURIComponent(`New enquiry from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
        );

        window.location.href = `mailto:info@rayloop.in?subject=${subject}&body=${body}`;

        setSubmitted(true);
        form.reset();
    };

    return (
        <section className="home-contact">
            <div className="contact-glow contact-glow-one"></div>
            <div className="contact-glow contact-glow-two"></div>

            <div className="home-contact-container">
                <div className="home-contact-content">
                    <span className="contact-eyebrow">
                        <span className="contact-eyebrow-dot"></span>
                        LET'S BUILD SOMETHING
                    </span>

                    <h2>
                        Have an idea?
                        <br />
                        <span>Let's make it happen.</span>
                    </h2>

                    <p className="contact-description">
                        Tell us a little about your project. We’ll help you
                        find the right digital solution for your business.
                    </p>

                    <div className="contact-bottom-note">
                        <span className="contact-note-icon">
                            <i className="bi bi-lightning-charge-fill"></i>
                        </span>
                        <div>
                            <strong>Have a project in mind?</strong>
                            <p>Let’s turn your vision into reality.</p>
                        </div>
                    </div>
                </div>

                <div className="home-contact-form-wrap">
                    <div className="contact-form-heading">
                        <div>
                            <span className="contact-form-label">
                                QUICK ENQUIRY
                            </span>
                            <h3>Tell us about it</h3>
                        </div>

                        <span className="contact-form-icon">
                            <i className="bi bi-arrow-up-right"></i>
                        </span>
                    </div>

                    <form className="home-contact-form" onSubmit={handleSubmit}>
                        <div className="contact-input-row">
                            <div className="contact-field">
                                <label htmlFor="contact-name">Your name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-email">Email address</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    placeholder="john@company.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-service">
                                What do you need?
                            </label>
                            <select
                                id="contact-service"
                                name="service"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Choose a service
                                </option>
                                <option value="Web Development">
                                    Web Development
                                </option>
                                <option value="Mobile App Development">
                                    Mobile App Development
                                </option>
                                <option value="UI/UX Design">
                                    UI/UX Design
                                </option>
                                <option value="Custom Software">
                                    Custom Software
                                </option>
                                <option value="Other">
                                    Something else
                                </option>
                            </select>
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-message">
                                Your message
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows={3}
                                placeholder="Tell us a little about your project..."
                                required
                            />
                        </div>

                        <button className="contact-submit-btn" type="submit">
                            <span>Send your enquiry</span>
                            <i className="bi bi-arrow-up-right"></i>
                        </button>

                        {submitted && (
                            <p className="contact-submit-note" role="status">
                                Your email app should open with your enquiry.
                                Send the email to complete your request.
                            </p>
                        )}

                        <p className="contact-form-footer">
                            <i className="bi bi-shield-check"></i>
                            Your information is only used to respond to your enquiry.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;