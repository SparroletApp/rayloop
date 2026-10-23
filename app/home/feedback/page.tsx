"use client";

import "./feedback.css";


const reviews = [
    {
        name: "Piravom depo",
        initials: "PD",
        review:
            "RayLoop delivered a beautiful, user-friendly website that reflects my brand perfectly. Their team was professional, creative, and attentive to every detail. Highly recommended for quality website design!",
    },
    {
        name: "Sajina P K",
        initials: "SK",
        review:
            "RayLoop offers a supportive work environment and excellent leadership. The company values employees, encourages professional growth, and is committed to quality and customer satisfaction. Proud to be part of the team!",
    },
    {
        name: "Artist Sachin",
        initials: "AS",
        review:
            "My company has worked with RayLoop for over three years. Their custom software solutions have helped automate my business, with reliable service and timely delivery. Looking forward to more projects together!",
    },
    {
        name: "Shanib CK",
        initials: "SK",
        review:
            "RayLoop is an excellent company to work for, with a professional yet friendly environment. The supportive company culture makes it a great place to learn, grow, and work with a dedicated team!",
    },
];


function Feedback() {
    const marqueeReviews = [...reviews, ...reviews];

    return (
        <section className="feedback container" id="testimonials">
            <div className="feedback-container">

                <div className="feedback-top">
                    <div className="feedback-heading">
                        <span className="feedback-eyebrow">
                            <span className="feedback-eyebrow-line" />
                            CUSTOMER STORIES
                        </span>

                        <h2>
                            Don't take
                            <br />
                            <span>our word for it.</span>
                        </h2>
                    </div>

                    <div className="feedback-intro">
                        <span className="feedback-intro-symbol">↘</span>
                        <p>
                            Better service starts with better systems.
                            Discover what customers value about a
                            smarter way to work.
                        </p>
                    </div>
                </div>

                <div className="feedback-marquee-label">
                    <span>WHAT PEOPLE ARE SAYING</span>
                    <span className="feedback-live">
                        <span />
                        LIVE FEEDBACK
                    </span>
                </div>

                <div className="feedback-marquee">
                    <div className="feedback-marquee-track">
                        {marqueeReviews.map((item, index) => (
                            <article
                                className="feedback-card"
                                key={`${item.initials}-${index}`}
                            >
                                <div className="feedback-card-top">
                                    <span className="feedback-quote">
                                        “
                                    </span>

                                    <span className="feedback-stars">
                                        ★★★★★
                                    </span>
                                </div>

                                <p className="feedback-review">
                                    {item.review}
                                </p>

                                <div className="feedback-card-bottom">
                                    <div
                                        className={`feedback-avatar feedback-avatar-${item.initials.toLowerCase()}`}
                                    >
                                        {item.initials}
                                    </div>

                                    <div className="feedback-author">
                                        <h3>{item.name}</h3>
                                    </div>

                                    <span className="feedback-arrow">
                                        ↗
                                    </span>
                                </div>

                                <span className="feedback-card-number">
                                    {String((index % reviews.length) + 1).padStart(2, "0")}
                                </span>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="feedback-bottom">
                    <div className="feedback-bottom-left">
                        <span className="feedback-bottom-dot" />
                        <span>DESIGNED FOR BETTER EXPERIENCES</span>
                    </div>

                    <div className="feedback-bottom-right">
                        <span>GOOD WORK.</span>
                        <span className="feedback-bottom-orange">
                            GOOD WORDS.
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Feedback;