
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import "./service-view.css";

const services = [
    {
        slug: "web-app-development",
        title: "Web App Development",
        description:
            "We build powerful, scalable, and user-friendly web applications tailored to your business needs.",
        icon: "bi-globe2",
        image: "/web.jpg",
        technologies: ["Next.js", "React", "Java", "PHP"],
    },
    {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        description:
            "We transform your ideas into exceptional mobile experiences with intuitive designs and powerful functionality.",
        icon: "bi-phone",
        image: "/mobileapp.jpg",
        technologies: ["React Native", "Android", "iOS"],
    },
    {
        slug: "ecommerce-development",
        title: "Ecommerce Development",
        description:
            "We create secure, scalable, and conversion-focused online stores that deliver seamless shopping experiences.",
        icon: "bi-cart3",
        image: "/ecommerce.jpg",
        technologies: [
            "Online Stores",
            "Payment Integration",
            "Custom Solutions",
        ],
    },
    {
        slug: "edu-tech-solutions",
        title: "Edu Tech Solutions",
        description:
            "We develop digital learning platforms that empower students, educators, and educational institutions.",
        icon: "bi-mortarboard",
        image: "/edutech.jpg",
        technologies: ["LMS", "E-Learning", "Education Platforms"],
    },
    {
        slug: "digital-marketing",
        title: "Digital Marketing",
        description:
            "We help brands strengthen their online presence, reach the right audience, and build lasting customer relationships.",
        icon: "bi-graph-up-arrow",
        image: "/digital-marketing.jpg",
        technologies: ["SEO", "Social Media", "Digital Strategy"],
    },
    {
        slug: "graphic-designing",
        title: "Graphic Designing",
        description:
            "We create memorable brand identities and engaging visual designs that help businesses stand out.",
        icon: "bi-palette",
        image: "/graphic-design.jpg",
        technologies: ["Branding", "UI/UX", "Creative Design"],
    },
];

type ServicePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

function ServiceDetailFallback() {
    return (
        <main className="container service-detail-page">
            <section className="service-detail-hero">
                <div className="service-detail-container">
                    <p>Loading service details...</p>
                </div>
            </section>
        </main>
    );
}

async function ServiceDetailContent({ params }: ServicePageProps) {
    const { slug } = await params;

    const service = services.find((item) => item.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="container service-detail-page">
            <section className="service-detail-hero">
                <div className="service-detail-container">
                    <div className="service-detail-hero-grid">
                        <div className="service-detail-hero-content">
                            <Link
                                href="/services"
                                className="service-detail-back"
                            >
                                <i className="bi bi-arrow-left"></i>
                                Back to Services
                            </Link>

                            <div className="service-detail-heading-icon">
                                <i className={`bi ${service.icon}`}></i>
                            </div>

                            <span className="service-detail-eyebrow">
                                RAYLOOP SERVICES
                            </span>

                            <h1>{service.title}</h1>

                            <p className="service-detail-description">
                                {service.description}
                            </p>

                            <div className="service-detail-technologies">
                                {service.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className="service-detail-button"
                            >
                                Discuss Your Project
                                <i className="bi bi-arrow-up-right"></i>
                            </Link>
                        </div>

                        <div className="service-detail-image-wrapper">
                            <div className="service-detail-image-decoration"></div>

                            <div className="service-detail-image">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={900}
                                    height={650}
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div className="service-detail-image-badge">
                                <div className="service-detail-badge-icon">
                                    <i className="bi bi-check-circle-fill"></i>
                                </div>

                                <div>
                                    <strong>Built for Your Business</strong>
                                    <span>Smart. Scalable. Reliable.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-detail-content">
                <div className="service-detail-container">
                    <div className="service-detail-approach-grid">
                        <div className="service-detail-approach-intro">
                            <div className="service-detail-section-label">
                                <span></span>
                                OUR APPROACH
                            </div>

                            <h2>
                                Building Digital Solutions
                                <br />
                                <span>That Make a Difference.</span>
                            </h2>

                            <p>
                                At RayLoop, we combine innovative thinking,
                                modern technology, and user-focused design
                                to deliver solutions aligned with your
                                business goals. Our approach focuses on
                                quality, performance, scalability, and
                                long-term value.
                            </p>

                            <Link
                                href="/contact"
                                className="service-detail-outline-button"
                            >
                                Learn More
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>

                        <div className="service-detail-features">
                            <article className="service-detail-feature-card service-feature-innovation">
                                <div className="service-detail-feature-icon">
                                    <i className="bi bi-lightbulb"></i>
                                </div>

                                <h3>Innovation</h3>

                                <p>
                                    Practical ideas and modern technologies
                                    tailored to your requirements.
                                </p>

                                <span className="service-detail-feature-number">
                                    01
                                </span>
                            </article>

                            <article className="service-detail-feature-card service-feature-quality">
                                <div className="service-detail-feature-icon">
                                    <i className="bi bi-shield-check"></i>
                                </div>

                                <h3>Quality</h3>

                                <p>
                                    Reliable, maintainable solutions built
                                    with attention to detail.
                                </p>

                                <span className="service-detail-feature-number">
                                    02
                                </span>
                            </article>

                            <article className="service-detail-feature-card service-feature-growth">
                                <div className="service-detail-feature-icon">
                                    <i className="bi bi-graph-up-arrow"></i>
                                </div>

                                <h3>Growth</h3>

                                <p>
                                    Scalable digital solutions designed to
                                    support your evolving business.
                                </p>

                                <span className="service-detail-feature-number">
                                    03
                                </span>
                            </article>
                        </div>
                    </div>

                    <div className="service-detail-contact">
                        <div className="service-detail-contact-icon">
                            <i className="bi bi-rocket-takeoff"></i>
                        </div>

                        <div className="service-detail-contact-text">
                            <h2>Ready to Get Started?</h2>

                            <p>
                                Let&apos;s discuss your requirements and find
                                the right solution for your business.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="service-detail-button service-detail-contact-button"
                        >
                            Contact RayLoop
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
    return (
        <Suspense fallback={<ServiceDetailFallback />}>
            <ServiceDetailContent params={params} />
        </Suspense>
    );
}
