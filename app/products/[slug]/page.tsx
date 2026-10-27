import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import "./product-view.css";

const products = [
    {
        slug: "rayloop-fsm",
        number: "01",
        name: "RayLoop FSM",
        subtitle: "Field Service Management",
        description:
            "Simplify your field service operations with an intelligent management platform. Manage customers, service requests, technicians, assets, and recurring maintenance from one centralized system.",
        icon: "bi bi-tools",
        images: [
            "/fsm1.jpg",
            "/fsm2.jpg",
            "/fsm3.jpg",
            "/fsm4.jpg",
        ],
        category: "Business Management Software",
        features: [
            {
                icon: "bi bi-people",
                title: "Customer Management",
                description:
                    "Manage customer information, contact details, service history, and customer relationships from one place.",
            },
            {
                icon: "bi bi-clipboard-check",
                title: "Job Management",
                description:
                    "Create service requests, assign jobs, monitor progress, and keep your service operations organized.",
            },
            {
                icon: "bi bi-person-gear",
                title: "Technician Management",
                description:
                    "Assign technicians, coordinate field activities, and track service availability and job assignments.",
            },
            {
                icon: "bi bi-calendar-check",
                title: "Recurring Maintenance",
                description:
                    "Schedule preventive maintenance and manage recurring service reminders for customers and assets.",
            },
            {
                icon: "bi bi-box-seam",
                title: "Asset Management",
                description:
                    "Maintain asset details, service records, and maintenance schedules for better operational visibility.",
            },
            {
                icon: "bi bi-graph-up-arrow",
                title: "Operational Insights",
                description:
                    "Get a clearer overview of service activities, job progress, and your team's daily operations.",
            },
        ],
    },
    {
        slug: "togglemax",
        number: "02",
        name: "Togglemax",
        subtitle: "Educational Technology",
        description:
            "Discover digital solutions designed to support educational initiatives, improve learning experiences, and make technology more accessible.",
        icon: "bi bi-mortarboard",
        images: [
            "/products/togglemax-1.jpg",
            "/products/togglemax-2.jpg",
            "/products/togglemax-3.jpg",
            "/products/togglemax-4.jpg",
        ],
        category: "Education Technology",
        features: [
            {
                icon: "bi bi-laptop",
                title: "Digital Learning",
                description:
                    "Support modern learning experiences through accessible digital tools and technology.",
            },
            {
                icon: "bi bi-journal-bookmark",
                title: "Learning Resources",
                description:
                    "Organize learning materials and resources to support structured educational experiences.",
            },
            {
                icon: "bi bi-people",
                title: "Learner Engagement",
                description:
                    "Create opportunities for collaboration and more engaging learning activities.",
            },
            {
                icon: "bi bi-lightbulb",
                title: "Skill Development",
                description:
                    "Encourage practical knowledge, creative thinking, and continuous learning.",
            },
            {
                icon: "bi bi-globe",
                title: "Accessible Learning",
                description:
                    "Explore technology-driven approaches to make educational resources more accessible.",
            },
            {
                icon: "bi bi-graph-up",
                title: "Learning Progress",
                description:
                    "Support learning activities with organized resources and structured educational workflows.",
            },
        ],
    },
];

type Product = (typeof products)[number];

type ProductViewProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

function ProductLoading() {
    return (
        <main className="product-view">
            <section className="product-view-loading">
                <div className="product-view-loader" />
                <p>Loading product details...</p>
            </section>
        </main>
    );
}

export default function ProductView({ params }: ProductViewProps) {
    return (
        <Suspense fallback={<ProductLoading />}>
            <ProductViewContent params={params} />
        </Suspense>
    );
}

async function ProductViewContent({ params }: ProductViewProps) {
    const { slug } = await params;

    const product = products.find((item) => item.slug === slug);

    if (!product) {
        notFound();
    }

    const galleryImages = [
        {
            image: product.images[1],
            number: "01",
            label: "Product Overview",
            description:
                "Discover the product interface and its overall experience.",
            icon: "bi bi-grid-1x2",
        },
        {
            image: product.images[2],
            number: "02",
            label: "Key Features",
            description:
                "Explore the tools and capabilities designed for everyday use.",
            icon: "bi bi-stars",
        },
        {
            image: product.images[3],
            number: "03",
            label: "User Experience",
            description:
                "See how the product supports a more organized workflow.",
            icon: "bi bi-display",
        },
    ];

    return (
        <main className="product-view">

            <section className="product-view-hero">
                <div className="container">

                    <div className="product-view-breadcrumb">
                        <Link href="/">Home</Link>

                        <i className="bi bi-chevron-right" />

                        <Link href="/products">Products</Link>

                        <i className="bi bi-chevron-right" />

                        <span>{product.name}</span>
                    </div>

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">
                            <div className="product-view-hero-content">
                                <span className="product-view-label">
                                    <i className={product.icon} />
                                    {product.category}
                                </span>

                                <span className="product-view-number">
                                    PRODUCT {product.number}
                                </span>

                                <h1>
                                    {product.name}
                                    <span>{product.subtitle}</span>
                                </h1>

                                <p className="product-view-description">
                                    {product.description}
                                </p>

                                <div className="product-view-actions">
                                    <Link
                                        href="/contact"
                                        className="product-view-btn product-view-btn-primary"
                                    >
                                        Enquire Now
                                        <i className="bi bi-arrow-up-right" />
                                    </Link>

                                    <Link
                                        href="#product-gallery"
                                        className="product-view-btn product-view-btn-outline"
                                    >
                                        Explore Product
                                        <i className="bi bi-arrow-down" />
                                    </Link>
                                </div>

                                <div className="product-view-trust">
                                    <span>
                                        <i className="bi bi-check-circle-fill" />
                                        Practical Solutions
                                    </span>

                                    <span>
                                        <i className="bi bi-check-circle-fill" />
                                        Business Focused
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-view-visual">
                                <div className="product-view-visual-top">
                                    <div>
                                        <span>PRODUCT SHOWCASE</span>
                                        <h2>{product.name}</h2>
                                    </div>

                                    <span className="product-view-visual-index">
                                        01 <span>/ 04</span>
                                    </span>
                                </div>

                                <div className="product-view-main-image">
                                    <img
                                        src={product.images[0]}
                                        alt={`${product.name} main product preview`}
                                    />

                                    <div className="product-view-main-overlay" />

                                    <div className="product-view-main-badge">
                                        <i className={product.icon} />
                                        Product Preview
                                    </div>

                                    <div className="product-view-image-caption">
                                        <span className="product-view-image-icon">
                                            <i className={product.icon} />
                                        </span>

                                        <div>
                                            <strong>{product.name}</strong>
                                            <p>{product.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-view-visual-footer">
                                    <span>
                                        <i className="bi bi-images" />
                                        Product Gallery
                                    </span>

                                    <span>Discover what is possible</span>
                                </div>

                                <div className="product-view-decoration product-view-decoration-one" />

                                <div className="product-view-decoration product-view-decoration-two" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="product-view-gallery"
                id="product-gallery"
            >
                <div className="container">
                    <div className="product-view-gallery-heading">
                        <div className="product-view-gallery-heading-left">
                            <span className="product-view-section-label">
                                <i className="bi bi-images" />
                                INSIDE THE PRODUCT
                            </span>

                            <h2>
                                Explore Every
                                <span> Detail.</span>
                            </h2>

                            <p>
                                Take a closer look at {product.name} through
                                our product showcase, featuring its interface,
                                capabilities, and user experience.
                            </p>
                        </div>

                        <div className="product-view-gallery-total">
                            <span>03</span>
                            <p>Product Views</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {galleryImages.map((item) => (
                            <div
                                className="col-lg-4 col-md-6"
                                key={item.image}
                            >
                                <article className="product-view-gallery-card">

                                    <div className="product-view-gallery-image">
                                        <img
                                            src={item.image}
                                            alt={`${product.name} - ${item.label}`}
                                            loading="lazy"
                                        />

                                        <div className="product-view-gallery-image-overlay" />

                                        <span className="product-view-gallery-image-number">
                                            {item.number}
                                        </span>

                                        <span className="product-view-gallery-image-icon">
                                            <i className={item.icon} />
                                        </span>
                                    </div>
                                    <div className="product-view-gallery-card-content">
                                        <div className="product-view-gallery-card-title">
                                            <span>
                                                VIEW {item.number}
                                            </span>

                                            <i className="bi bi-arrow-up-right" />
                                        </div>

                                        <h3>{item.label}</h3>

                                        <p>{item.description}</p>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                    <div className="product-view-gallery-bottom">
                        <span>
                            <i className="bi bi-check-circle-fill" />
                            Designed Around Your Needs
                        </span>

                        <span>
                            <i className="bi bi-grid-3x3-gap" />
                            Explore the Product
                        </span>
                    </div>
                </div>
            </section>
            <section
                className="product-view-features"
                id="product-features"
            >
                <div className="container">
                    <div className="product-view-section-heading">
                        <span className="product-view-section-label">
                            WHAT YOU CAN DO
                        </span>

                        <h2>
                            Powerful Features.
                            <span> Practical Results.</span>
                        </h2>

                        <p>
                            Explore the capabilities designed to help you
                            simplify workflows, improve productivity, and
                            achieve more with {product.name}.
                        </p>
                    </div>

                    <div className="row g-4">
                        {product.features.map((feature, index) => (
                            <div
                                className="col-lg-4 col-md-6 col-12"
                                key={feature.title}
                            >
                                <article className="product-view-feature">
                                    <div className="product-view-feature-top">
                                        <span className="product-view-feature-icon">
                                            <i className={feature.icon} />
                                        </span>

                                        <span className="product-view-feature-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h3>{feature.title}</h3>

                                    <p>{feature.description}</p>

                                    <span className="product-view-feature-line" />
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="product-view-cta">
                <div className="container">
                    <div className="product-view-cta-inner">
                        <div className="product-view-cta-decoration">
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className="product-view-cta-content">
                            <span className="product-view-cta-label">
                                LET&apos;S WORK TOGETHER
                            </span>

                            <h2>
                                Ready to Explore
                                <br />
                                <span>{product.name}?</span>
                            </h2>

                            <p>
                                Get in touch with our team to learn more
                                about the product and discover how it can
                                support your requirements.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="product-view-btn product-view-btn-white"
                        >
                            Contact Our Team
                            <i className="bi bi-arrow-up-right" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}