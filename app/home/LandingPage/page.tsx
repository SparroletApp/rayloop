"use client";

import "./landingpage.css";

function LandingPage() {
    const clients = [
        { name: "Client 1", logo: "/logo.webp" },
        { name: "Client 2", logo: "/amazing.png" },
        { name: "Client 3", logo: "/logo.webp" },
        { name: "Client 4", logo: "/amazing.png" },
        { name: "Client 5", logo: "/logo.webp" },
        { name: "Client 6", logo: "/amazing.png" },
    ];

    return (
        <main className="rayloop-landing">
            <section className="rayloop-hero">
                <div className="rayloop-light rayloop-light-left"></div>
                <div className="rayloop-light rayloop-light-right"></div>
                <div className="rayloop-light rayloop-light-bottom"></div>

                <div className="rayloop-hero-content">
                    <span className="rayloop-eyebrow">
                        SMARTER FIELD SERVICE MANAGEMENT
                    </span>

                    <h1>
                        Simplify Service.
                        <br />
                        <span>Amplify Performance.</span>
                    </h1>

                    <p className="rayloop-hero-description">
                        RayLoop empowers service businesses to manage jobs,
                        track technicians, automate maintenance, and deliver
                        exceptional customer experiences — all from one
                        intelligent platform.
                    </p>

                    <div className="rayloop-hero-actions">
                        <a href="/contact-us" className="rayloop-primary-btn">
                            GET IN TOUCH
                            <span className="rayloop-btn-arrow">→</span>
                        </a>

                        <a href="/about-us" className="rayloop-secondary-btn">
                            Explore RayLoop
                            <span>↗</span>
                        </a>
                    </div>

                    <div className="rayloop-hero-features">
                        <div className="rayloop-feature">
                            <span className="rayloop-feature-icon">✓</span>
                            <span>Real-Time Job Tracking</span>
                        </div>

                        <div className="rayloop-feature">
                            <span className="rayloop-feature-icon">✓</span>
                            <span>Smart Scheduling</span>
                        </div>

                        <div className="rayloop-feature">
                            <span className="rayloop-feature-icon">✓</span>
                            <span>Connected Field Teams</span>
                        </div>
                    </div>
                </div>

                <div className="rayloop-hero-bottom">
                    <p className="rayloop-trusted-label">
                        Trusted by service teams and businesses
                    </p>

                    <div className="rayloop-client-marquee">
                        <div className="rayloop-client-track">
                            {[...clients, ...clients].map((client, index) => (
                                <div
                                    className="rayloop-client-item"
                                    key={`${client.name}-${index}`}
                                >
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="rayloop-client-logo"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;