"use client";
import { useState } from "react";
import "./aboutus.css";

function AboutUs() {
    const [activeCard, setActiveCard] = useState(0);

    const methodologyImages = [
        "/office.jpg",
        "/office1.jpg",
        "/office2.jpg",
        "/office3.jpg",
        "/office4.jpg",
        "/office5.jpg",
    ];

    const teamMembers = [
        {
            image: "user.png",
            name: "Jerin",
            designation: "Founder & CEO",
        },
        {
            image: "user.png",
            name: "Majith",
            designation: "Vedio Editor",
        },
        {
            image: "user.png",
            name: "Amrutha",
            designation: "Software Developer",
        },
    ];


    const drivenCards = [
        {
            number: "01",
            title: "Innovation Drives",
            description:
                "We embrace new technologies and creative thinking to build innovative software solutions for modern businesses.",
            icon: "bi-lightbulb",
        },
        {
            number: "02",
            title: "Excellence is Our Standard",
            description:
                "We focus on quality, performance, and thoughtful design to deliver reliable and scalable digital solutions.",
            icon: "bi-stars",
        },
        {
            number: "03",
            title: "Client-Centric at Heart",
            description:
                "We understand your business needs and develop customized solutions that create meaningful value.",
            icon: "bi-people",
        },
        {
            number: "04",
            title: "Collaboration Powers Us",
            description:
                "We believe in teamwork, transparent communication, and strong partnerships to turn ideas into reality.",
            icon: "bi-rocket-takeoff",
        },
    ];
    return (
        <>
            <section className="about-us">
                <div className="container">
                    <div className="about-top">
                        <div className="small-title">ABOUT US</div>
                        <h1>The team powering the next <br />generation of <span>digital innovation</span></h1>
                        <div className="small-desc">At RayLoop, we transform ideas into powerful digital solutions <br />through innovative technology and thoughtful design.
                            From web and mobile <br />applications to custom software, we help businesses grow, evolve, and stay ahead.</div>
                    </div>
                </div>
                <div className="our-mission">
                    <div className="small-title">
                        OUR MISSION
                    </div>
                    <div className="mission-desc">To empower businesses with innovative, reliable, and <br />scalable technology solutions that simplify operations, <br />drive growth, and turn ideas into meaningful digital experiences.</div>
                </div>
                <div className="container driven-data">
                    <div className="driven-class">
                        <span className="driven-label">
                            <i className="bi bi-hourglass-split"></i>
                            Who We Are
                        </span>

                        <h2>
                            Driven By <span>Innovation</span>, Defined By
                            <br />
                            <span>Excellence.</span>
                        </h2>
                    </div>


                    <div
                        className="driven-cards"
                        onMouseLeave={() => setActiveCard(0)}
                    >
                        {drivenCards.map((card, index) => (
                            <div
                                className={`driven-card ${activeCard === index ? "active" : ""
                                    }`}
                                key={card.number}
                                onMouseEnter={() => setActiveCard(index)}
                                onFocus={() => setActiveCard(index)}
                                tabIndex={0}
                            >
                                <span className="driven-number">{card.number}</span>

                                <div className="driven-card-content">
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>

                                <div className="driven-icon">
                                    <i className={`bi ${card.icon}`}></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container core-values">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="about-left-img">
                                <img src="graph.jpg"></img>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 contain-about">
                            <div className="about-right">
                                <h2>Core Values</h2>
                                <div className="values-desc">
                                    At RayLoop, collaboration, trust, and integrity are the foundation of everything
                                    we do. From the initial idea to project delivery and ongoing support, we are
                                    committed to building lasting partnerships, delivering reliable solutions,
                                    and helping businesses navigate their digital transformation journey with confidence.<br /><br />

                                    We believe meaningful progress comes from combining innovative thinking,
                                    advanced technology, and talented people. Driven by a passion for excellence
                                    and continuous improvement, our team develops smart, scalable, and future-ready
                                    software solutions that empower businesses to grow, adapt, and succeed in an
                                    ever-evolving digital world.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container methadology">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 contain-about">
                            <div className="about-right">
                                <h2>Our Methodology</h2>
                                <div className="values-desc">
                                    At RayLoop, our methodology is built on flexibility, innovation,
                                    and a commitment to delivering the right solutions for every business.
                                    We understand that every project comes with unique requirements,
                                    challenges, and goals, which is why we adapt our
                                    development approach to suit the specific needs of each client.<br /><br />

                                    By combining Agile practices, structured planning, continuous testing,
                                    and collaborative development, we ensure transparency and efficiency
                                    throughout the entire project lifecycle. From understanding business
                                    requirements and designing intuitive solutions to development, deployment,
                                    and ongoing support, our approach focuses on delivering reliable, scalable,
                                    and future-ready software that drives meaningful business growth.
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="about-left-img">
                                <img src="methodology.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container life-rayloop">
                    <h1>Life @ Rayloop</h1>
                    <p>A glimpse into our culture, moments, and milestones</p>

                    <div className="row">
                        {methodologyImages.map((image, index) => (
                            <div className="col-lg-4 col-md-4 col-12" key={index}>
                                <div className="image-card">
                                    <img
                                        src={image}
                                        alt={`RayLoop Methodology ${index + 1}`}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container meet-team">
                    <div className="small-title">
                        <i className="bi bi-microsoft-teams"></i>
                        THE TEAM
                    </div>
                    <h1>Meet Our <span>Team</span></h1>


                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div
                                className="col-lg-4 col-md-6 col-12"
                                key={`${member.name}-${index}`}
                            >
                                <div className="team-card">
                                    <div className="profile-img">
                                        <img
                                            src={`/${member.image}`}
                                            alt={member.name}
                                        />
                                    </div>

                                    <div className="nam-designation">
                                        <h3>{member.name}</h3>
                                        <p>{member.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container get-today">
                    <div className="get-today-left">
                        <h1>Get started <span>Today</span></h1>
                        <div className="get-desc">
                            RayLoop builds innovative, scalable software solutions and digital <br />
                            platforms that empower businesses to streamline operations, <br />
                            enhance productivity, and accelerate digital transformation through modern technologies.
                        </div>
                    </div>

                    <div className="get-today-right">
                        <button>Contact us <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>



            </section>
        </>
    )
}

export default AboutUs;