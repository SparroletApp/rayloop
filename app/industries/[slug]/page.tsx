
import Link from "next/link";
import { notFound } from "next/navigation";
import "./industries-view.css";
import { Suspense } from "react";

const industries = [
    {
        slug: "healthcare-medical",
        number: "01",
        title: "Healthcare & Medical",
        subtitle: "Smarter Technology for Better Healthcare",
        image: "/health.jpg",
        icon: "bi bi-heart-pulse",
        category: "HEALTHCARE TECHNOLOGY",
        description:
            "Transform healthcare delivery with intelligent digital solutions designed to improve patient experiences, simplify medical operations, and empower healthcare professionals.",
        overview:
            "Healthcare organizations need reliable technology to manage information, coordinate teams, and deliver better patient experiences. RayLoop develops customized digital solutions that help medical organizations modernize their workflows and improve operational efficiency.",
        stats: [
            { value: "24/7", label: "Digital Accessibility" },
            { value: "360°", label: "Connected Operations" },
            { value: "100%", label: "Workflow Visibility" },
        ],
        challenges: [
            {
                icon: "bi bi-file-earmark-medical",
                title: "Fragmented Information",
                description:
                    "Organize healthcare information through structured digital workflows and centralized systems.",
            },
            {
                icon: "bi bi-clock-history",
                title: "Time-Consuming Processes",
                description:
                    "Reduce repetitive administrative work with automated workflows and efficient scheduling.",
            },
            {
                icon: "bi bi-people",
                title: "Team Coordination",
                description:
                    "Improve collaboration between departments, medical teams, and support staff.",
            },
        ],
        solutions: [
            {
                icon: "bi bi-hospital",
                title: "Healthcare Management",
                description:
                    "Digital systems for organizing daily healthcare operations and administrative activities.",
            },
            {
                icon: "bi bi-calendar2-check",
                title: "Appointment Management",
                description:
                    "Streamlined appointment scheduling, service coordination, and follow-up workflows.",
            },
            {
                icon: "bi bi-clipboard2-pulse",
                title: "Medical Workflow Automation",
                description:
                    "Simplify routine processes and improve visibility across healthcare operations.",
            },
            {
                icon: "bi bi-shield-check",
                title: "Secure Digital Systems",
                description:
                    "Build systems with appropriate access controls and data protection measures.",
            },
        ],
        benefits: [
            "Improved operational efficiency",
            "Better coordination between teams",
            "More organized digital workflows",
            "Improved visibility into daily operations",
        ],
    },
    {
        slug: "travel-hospitality",
        number: "02",
        title: "Travel & Hospitality",
        subtitle: "Create Seamless Travel Experiences",
        image: "/travel.jpg",
        icon: "bi bi-airplane",
        category: "TRAVEL & HOSPITALITY",
        description:
            "Deliver memorable guest experiences with connected booking platforms, intelligent reservation systems, and streamlined hospitality operations.",
        overview:
            "Travel and hospitality businesses operate in a fast-moving environment where customer experience matters. Digital platforms can connect bookings, customer information, operational tasks, and service teams in one streamlined workflow.",
        stats: [
            { value: "24/7", label: "Online Accessibility" },
            { value: "360°", label: "Guest Visibility" },
            { value: "1", label: "Connected Experience" },
        ],
        challenges: [
            {
                icon: "bi bi-calendar-x",
                title: "Booking Complexity",
                description:
                    "Simplify reservations and organize booking information across digital channels.",
            },
            {
                icon: "bi bi-person-lines-fill",
                title: "Guest Coordination",
                description:
                    "Keep customer requests and service activities organized throughout the guest journey.",
            },
            {
                icon: "bi bi-list-task",
                title: "Operational Delays",
                description:
                    "Coordinate housekeeping, service teams, and day-to-day hospitality activities.",
            },
        ],
        solutions: [
            {
                icon: "bi bi-calendar2-week",
                title: "Booking Platforms",
                description:
                    "Create streamlined digital booking and reservation experiences.",
            },
            {
                icon: "bi bi-buildings",
                title: "Hospitality Management",
                description:
                    "Organize daily property operations, service requests, and staff responsibilities.",
            },
            {
                icon: "bi bi-person-heart",
                title: "Guest Experience",
                description:
                    "Build connected customer journeys with organized guest information and service workflows.",
            },
            {
                icon: "bi bi-graph-up-arrow",
                title: "Business Insights",
                description:
                    "Monitor operational activities and identify opportunities for improvement.",
            },
        ],
        benefits: [
            "Simplified reservation workflows",
            "Better guest communication",
            "Organized hospitality operations",
            "Improved service coordination",
        ],
    },
    {
        slug: "manufacturing",
        number: "03",
        title: "Manufacturing & Industrial",
        subtitle: "Powering the Next Generation of Industry",
        image: "/manufacturing.jpg",
        icon: "bi bi-gear-wide-connected",
        category: "INDUSTRIAL TECHNOLOGY",
        description:
            "Connect industrial operations with intelligent software that improves production visibility, streamlines maintenance, and supports data-driven decisions.",
        overview:
            "Manufacturing businesses need accurate operational information, coordinated teams, and efficient production workflows. RayLoop creates digital solutions that help organizations manage industrial processes, monitor activities, and simplify equipment maintenance.",
        stats: [
            { value: "360°", label: "Operational Visibility" },
            { value: "24/7", label: "System Accessibility" },
            { value: "Smart", label: "Digital Workflows" },
        ],
        challenges: [
            {
                icon: "bi bi-gear",
                title: "Equipment Downtime",
                description:
                    "Organize maintenance activities and service schedules to support equipment reliability.",
            },
            {
                icon: "bi bi-clipboard-data",
                title: "Limited Visibility",
                description:
                    "Bring operational information into organized dashboards and reporting workflows.",
            },
            {
                icon: "bi bi-diagram-3",
                title: "Disconnected Operations",
                description:
                    "Coordinate maintenance teams, production activities, and asset information.",
            },
        ],
        solutions: [
            {
                icon: "bi bi-gear-wide-connected",
                title: "Production Management",
                description:
                    "Organize production workflows, operational activities, and process information.",
            },
            {
                icon: "bi bi-tools",
                title: "Equipment Maintenance",
                description:
                    "Schedule maintenance, manage service requests, and track equipment service history.",
            },
            {
                icon: "bi bi-box-seam",
                title: "Inventory Management",
                description:
                    "Improve visibility into materials, spare parts, and stock movement.",
            },
            {
                icon: "bi bi-speedometer2",
                title: "Operational Analytics",
                description:
                    "Use dashboards and reports to understand operational performance.",
            },
        ],
        benefits: [
            "Better equipment maintenance planning",
            "Improved operational visibility",
            "More efficient team coordination",
            "Structured production workflows",
        ],
    },
    {
        slug: "retail-ecommerce",
        number: "04",
        title: "Retail & E-Commerce",
        subtitle: "Turn Every Interaction Into Opportunity",
        image: "/retail-ecommerce.jpg",
        icon: "bi bi-shop",
        category: "RETAIL TECHNOLOGY",
        description:
            "Create connected shopping experiences with modern e-commerce platforms, intelligent inventory systems, and streamlined retail management.",
        overview:
            "Retailers need to manage customers, products, orders, and inventory while delivering consistent shopping experiences. Integrated digital tools help simplify these processes and give businesses better visibility into daily operations.",
        stats: [
            { value: "360°", label: "Business Visibility" },
            { value: "24/7", label: "Digital Storefronts" },
            { value: "Smart", label: "Retail Operations" },
        ],
        challenges: [
            {
                icon: "bi bi-boxes",
                title: "Inventory Complexity",
                description:
                    "Maintain organized product information and improve stock visibility.",
            },
            {
                icon: "bi bi-cart-x",
                title: "Disconnected Shopping",
                description:
                    "Create consistent experiences across online storefronts and business operations.",
            },
            {
                icon: "bi bi-graph-down-arrow",
                title: "Limited Business Insights",
                description:
                    "Make business information easier to understand through structured reporting.",
            },
        ],
        solutions: [
            {
                icon: "bi bi-cart-check",
                title: "E-Commerce Platforms",
                description:
                    "Build online shopping experiences tailored to your business requirements.",
            },
            {
                icon: "bi bi-box-seam",
                title: "Inventory Systems",
                description:
                    "Manage product information, stock levels, and inventory workflows.",
            },
            {
                icon: "bi bi-people",
                title: "Customer Management",
                description:
                    "Organize customer records and support more consistent customer interactions.",
            },
            {
                icon: "bi bi-bar-chart-line",
                title: "Sales Analytics",
                description:
                    "Understand sales activity and business trends through useful reports.",
            },
        ],
        benefits: [
            "More organized inventory management",
            "Connected retail workflows",
            "Improved customer experiences",
            "Better access to business insights",
        ],
    },
    {
        slug: "education-e-learning",
        number: "05",
        title: "Education & Training",
        subtitle: "Reimagining the Future of Learning",
        image: "/edu-training.jpg",
        icon: "bi bi-mortarboard",
        category: "EDUCATION TECHNOLOGY",
        description:
            "Empower educators and learners with modern learning platforms, digital administration, and connected training management systems.",
        overview:
            "Educational institutions and training providers need efficient ways to manage learning resources, student information, schedules, and assessments. Digital solutions can simplify administration while supporting more accessible learning experiences.",
        stats: [
            { value: "24/7", label: "Learning Access" },
            { value: "360°", label: "Learning Visibility" },
            { value: "Smart", label: "Education Systems" },
        ],
        challenges: [
            {
                icon: "bi bi-journal-text",
                title: "Scattered Learning Resources",
                description:
                    "Organize learning materials and educational information in accessible digital environments.",
            },
            {
                icon: "bi bi-calendar-week",
                title: "Complex Administration",
                description:
                    "Simplify scheduling, student records, and everyday administrative workflows.",
            },
            {
                icon: "bi bi-person-video3",
                title: "Learner Engagement",
                description:
                    "Support engaging digital learning experiences and better access to course information.",
            },
        ],
        solutions: [
            {
                icon: "bi bi-laptop",
                title: "Learning Platforms",
                description:
                    "Develop digital learning environments for educational content and course delivery.",
            },
            {
                icon: "bi bi-mortarboard",
                title: "Student Management",
                description:
                    "Organize student records, enrollment, and academic administration.",
            },
            {
                icon: "bi bi-journal-check",
                title: "Training Management",
                description:
                    "Manage training schedules, course information, and learning progress.",
            },
            {
                icon: "bi bi-clipboard-data",
                title: "Academic Reporting",
                description:
                    "Create structured reports for educational activities and performance tracking.",
            },
        ],
        benefits: [
            "Simplified academic administration",
            "Accessible digital learning resources",
            "Better training coordination",
            "Organized student information",
        ],
    },
    {
        slug: "real-estate",
        number: "06",
        title: "Real Estate & Architecture",
        subtitle: "Building Smarter Property Experiences",
        image: "/real-estate.jpg",
        icon: "bi bi-buildings",
        category: "PROPERTY TECHNOLOGY",
        description:
            "Simplify property management, project coordination, and real estate operations with connected digital tools built around your business.",
        overview:
            "Property managers, real estate businesses, and architectural teams handle complex information across properties, clients, projects, and maintenance activities. Digital solutions help bring these workflows together and improve coordination.",
        stats: [
            { value: "360°", label: "Property Visibility" },
            { value: "Smart", label: "Project Workflows" },
            { value: "24/7", label: "Digital Access" },
        ],
        challenges: [
            {
                icon: "bi bi-houses",
                title: "Property Administration",
                description:
                    "Keep property details, documents, and customer information organized.",
            },
            {
                icon: "bi bi-cone-striped",
                title: "Project Coordination",
                description:
                    "Coordinate tasks, milestones, and communication across project teams.",
            },
            {
                icon: "bi bi-wrench-adjustable",
                title: "Maintenance Tracking",
                description:
                    "Organize property maintenance requests and service activities.",
            },
        ],
        solutions: [
            {
                icon: "bi bi-building",
                title: "Property Management",
                description:
                    "Manage property information, occupancy details, and operational workflows.",
            },
            {
                icon: "bi bi-kanban",
                title: "Project Management",
                description:
                    "Track project activities, milestones, and team responsibilities.",
            },
            {
                icon: "bi bi-tools",
                title: "Facility Maintenance",
                description:
                    "Coordinate maintenance requests, scheduled services, and asset records.",
            },
            {
                icon: "bi bi-file-earmark-text",
                title: "Document Management",
                description:
                    "Organize property documents and project-related information.",
            },
        ],
        benefits: [
            "Organized property information",
            "Better project coordination",
            "Structured maintenance workflows",
            "Improved operational visibility",
        ],
    },
    {
        slug: "fsm-service",
        number: "07",
        title: "Field Service Management",
        subtitle: "Connect Your Teams. Simplify Every Service.",
        image: "/tech.jpg",
        icon: "bi bi-tools",
        category: "FIELD SERVICE TECHNOLOGY",
        description:
            "Modernize field operations with connected job management, technician scheduling, asset tracking, and preventive maintenance workflows.",
        overview:
            "Field service businesses coordinate customers, technicians, service requests, equipment, and recurring maintenance. A centralized field service management system helps teams organize jobs, monitor progress, and maintain a clear service history.",
        stats: [
            { value: "360°", label: "Service Visibility" },
            { value: "Real-Time", label: "Job Tracking" },
            { value: "Smart", label: "Maintenance Planning" },
        ],
        challenges: [
            {
                icon: "bi bi-calendar2-x",
                title: "Complex Scheduling",
                description:
                    "Coordinate technician availability, service appointments, and daily workloads.",
            },
            {
                icon: "bi bi-geo-alt",
                title: "Limited Field Visibility",
                description:
                    "Improve visibility into assigned jobs, service progress, and field activities.",
            },
            {
                icon: "bi bi-arrow-repeat",
                title: "Missed Maintenance",
                description:
                    "Organize recurring maintenance schedules and follow-up service activities.",
            },
        ],
        solutions: [
            {
                icon: "bi bi-clipboard2-check",
                title: "Job Management",
                description:
                    "Create, assign, track, and manage service jobs through a centralized workflow.",
            },
            {
                icon: "bi bi-person-gear",
                title: "Technician Management",
                description:
                    "Coordinate technician assignments, availability, and service activities.",
            },
            {
                icon: "bi bi-pc-display",
                title: "Asset Management",
                description:
                    "Maintain equipment records, service history, and asset-related information.",
            },
            {
                icon: "bi bi-arrow-repeat",
                title: "Preventive Maintenance",
                description:
                    "Plan recurring services and help teams stay on top of maintenance schedules.",
            },
        ],
        benefits: [
            "Improved job tracking and coordination",
            "Better technician scheduling",
            "Organized customer and asset records",
            "More consistent preventive maintenance",
        ],
    },
];

type IndustryViewProps = {
    params: Promise<{ slug: string }>;
};

export default function IndustryView({ params }: IndustryViewProps) {
    return (
        <Suspense
            fallback={
                <main className="industry-view">
                    <div className="container py-5">
                        <p>Loading industry details...</p>
                    </div>
                </main>
            }
        >
            <IndustryViewContent params={params} />
        </Suspense>
    );
}

async function IndustryViewContent({ params }: IndustryViewProps) {
    const { slug } = await params;

    const industry = industries.find((item) => item.slug === slug);

    if (!industry) {
        notFound();
    }
    return (
        <main className="industry-view">

            <section className="iv-hero">
                <div className="iv-hero-glow"></div>

                <div className="container iv-hero-container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <Link href="/industries" className="iv-back-link">
                                <i className="bi bi-arrow-left"></i>
                                All Industries
                            </Link>

                            <div className="iv-eyebrow">
                                <span></span>
                                {industry.category}
                            </div>

                            <div className="iv-number">
                                INDUSTRY / {industry.number}
                            </div>

                            <h1>
                                {industry.title.split(" ").slice(0, 2).join(" ")}
                                <br />
                                <span>
                                    {industry.title
                                        .split(" ")
                                        .slice(2)
                                        .join(" ") || "Solutions"}
                                </span>
                            </h1>

                            <h2 className="iv-hero-subtitle">
                                {industry.subtitle}
                            </h2>

                            <p className="iv-hero-description">
                                {industry.description}
                            </p>

                            <div className="iv-hero-actions">
                                <Link
                                    href="/contact"
                                    className="iv-primary-button"
                                >
                                    Discuss Your Project
                                    <i className="bi bi-arrow-up-right"></i>
                                </Link>

                                <a
                                    href="#industry-solutions"
                                    className="iv-secondary-button"
                                >
                                    Explore Solutions
                                    <i className="bi bi-arrow-down"></i>
                                </a>
                            </div>

                            <div className="iv-trust-line">
                                <span className="iv-trust-icon">
                                    <i className="bi bi-stars"></i>
                                </span>
                                <span>
                                    Purpose-built digital solutions for
                                    modern businesses
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="iv-hero-visual">
                                <div className="iv-image-frame">
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                    />

                                    <div className="iv-image-overlay"></div>

                                    <div className="iv-image-label">
                                        <span className="iv-image-label-icon">
                                            <i className={industry.icon}></i>
                                        </span>

                                        <div>
                                            <span>INDUSTRY SPOTLIGHT</span>
                                            <h3>{industry.title}</h3>
                                        </div>

                                        <i className="bi bi-arrow-up-right iv-label-arrow"></i>
                                    </div>
                                </div>

                                <div className="iv-floating-card">
                                    <div className="iv-floating-icon">
                                        <i className="bi bi-lightning-charge"></i>
                                    </div>

                                    <div>
                                        <strong>Built for progress.</strong>
                                        <span>Designed around your needs.</span>
                                    </div>
                                </div>

                                <div className="iv-visual-index">
                                    <span>{industry.number}</span>
                                    <span className="iv-index-line"></span>
                                    <span>RAYLOOP INDUSTRIES</span>
                                </div>

                                <div className="iv-visual-dot iv-dot-one"></div>
                                <div className="iv-visual-dot iv-dot-two"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="iv-hero-bottom">
                    <span>DISCOVER</span>
                    <i className="bi bi-arrow-down"></i>
                </div>
            </section>

            {/* INDUSTRY STATS */}
            <section className="iv-stats-section">
                <div className="container">
                    <div className="iv-stats-grid">
                        {industry.stats.map((stat, index) => (
                            <div className="iv-stat" key={stat.label}>
                                <div className="iv-stat-number">
                                    {stat.value}
                                </div>

                                <div className="iv-stat-content">
                                    <span>0{index + 1}</span>
                                    <p>{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INDUSTRY OVERVIEW */}
            <section className="iv-overview-section">
                <div className="container">
                    <div className="row align-items-start g-5">
                        <div className="col-lg-5">
                            <div className="iv-section-tag">
                                <span></span>
                                THE BIG PICTURE
                            </div>

                            <h2 className="iv-section-title">
                                Technology that
                                <br />
                                <span>moves you forward.</span>
                            </h2>

                            <p className="iv-overview-highlight">
                                Every industry has its own challenges.
                                Your technology should understand them.
                            </p>
                        </div>

                        <div className="col-lg-7">
                            <div className="iv-overview-content">
                                <div className="iv-overview-symbol">
                                    <i className={industry.icon}></i>
                                </div>

                                <p>{industry.overview}</p>

                                <div className="iv-overview-bottom">
                                    <span>OUR APPROACH</span>
                                    <span>
                                        <i className="bi bi-check2-circle"></i>
                                        Purpose-driven technology
                                    </span>
                                    <span>
                                        <i className="bi bi-check2-circle"></i>
                                        Flexible digital solutions
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CHALLENGES */}
            <section className="iv-challenges-section">
                <div className="container">
                    <div className="iv-section-heading">
                        <div>
                            <div className="iv-section-tag">
                                <span></span>
                                CHALLENGES WE ADDRESS
                            </div>

                            <h2 className="iv-section-title">
                                Complex problems.
                                <br />
                                <span>Smarter possibilities.</span>
                            </h2>
                        </div>

                        <p>
                            Identify operational challenges and discover
                            practical ways to simplify your business with
                            connected digital systems.
                        </p>
                    </div>

                    <div className="row g-4">
                        {industry.challenges.map((challenge, index) => (
                            <div className="col-lg-4 col-md-6" key={challenge.title}>
                                <article className="iv-challenge-card">
                                    <div className="iv-challenge-top">
                                        <span>0{index + 1}</span>

                                        <div className="iv-challenge-icon">
                                            <i className={challenge.icon}></i>
                                        </div>
                                    </div>

                                    <h3>{challenge.title}</h3>

                                    <p>{challenge.description}</p>

                                    <div className="iv-challenge-line"></div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTIONS */}
            <section
                className="iv-solutions-section"
                id="industry-solutions"
            >
                <div className="container">
                    <div className="iv-solutions-heading">
                        <div className="iv-section-tag">
                            <span></span>
                            WHAT WE CAN BUILD
                        </div>

                        <h2 className="iv-section-title">
                            Digital solutions.
                            <br />
                            <span>Real business impact.</span>
                        </h2>

                        <p>
                            Flexible software solutions designed to align with
                            your processes, goals, and future growth.
                        </p>
                    </div>

                    <div className="iv-solutions-grid">
                        {industry.solutions.map((solution, index) => (
                            <article className="iv-solution-card" key={solution.title}>
                                <div className="iv-solution-card-top">
                                    <div className="iv-solution-icon">
                                        <i className={solution.icon}></i>
                                    </div>

                                    <span>0{index + 1}</span>
                                </div>

                                <h3>{solution.title}</h3>

                                <p>{solution.description}</p>

                                <div className="iv-solution-footer">
                                    <span>EXPLORE CAPABILITIES</span>
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="iv-benefits-section">
                <div className="container">
                    <div className="iv-benefits-panel">
                        <div className="iv-benefits-left">
                            <div className="iv-section-tag">
                                <span></span>
                                THE DIFFERENCE
                            </div>

                            <h2>
                                More than software.
                                <br />
                                <span>A better way forward.</span>
                            </h2>

                            <p>
                                Build connected workflows that help your
                                business work smarter, respond faster,
                                and prepare for what comes next.
                            </p>

                            <Link
                                href="/contact"
                                className="iv-benefits-link"
                            >
                                Let&apos;s build together
                                <i className="bi bi-arrow-up-right"></i>
                            </Link>
                        </div>

                        <div className="iv-benefits-list">
                            {industry.benefits.map((benefit, index) => (
                                <div className="iv-benefit-item" key={benefit}>
                                    <span className="iv-benefit-number">
                                        0{index + 1}
                                    </span>

                                    <span className="iv-benefit-check">
                                        <i className="bi bi-check2"></i>
                                    </span>

                                    <p>{benefit}</p>

                                    <i className="bi bi-arrow-up-right iv-benefit-arrow"></i>
                                </div>
                            ))}
                        </div>

                        <div className="iv-benefits-decoration"></div>
                    </div>
                </div>
            </section>


            <section className="iv-bottom-nav">
                <div className="container">
                    <Link href="/industries" className="iv-bottom-link">
                        <i className="bi bi-arrow-left"></i>

                        <span>
                            <small>GO BACK TO</small>
                            All Industries
                        </span>
                    </Link>

                    <div className="iv-bottom-center">
                        <span className="iv-bottom-dot"></span>
                        RAYLOOP
                    </div>

                    <Link href="/contact" className="iv-bottom-link iv-bottom-link-right">
                        <span>
                            <small>HAVE A PROJECT?</small>
                            Contact Our Team
                        </span>

                        <i className="bi bi-arrow-up-right"></i>
                    </Link>
                </div>
            </section>
        </main>
    );
}
