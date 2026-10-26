
import Link from "next/link";
import "./footer.css";

function Footer() {
    return (
        <footer className="rl-footer">
            <div className="rl-footer container">
                <div className="rl-footer-main">
                    <div className="rl-footer-brand">
                        <Link href="/" className="rl-footer-logo">
                            <img src="/logo.webp"></img>
                        </Link>

                        <p className="rl-footer-description">
                            Empowering businesses through innovative software
                            development, modern technologies, and intelligent
                            digital solutions built for the future.
                        </p>

                        <div className="rl-footer-socials">
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <i className="bi bi-github"></i>
                            </a>
                        </div>
                    </div>

                    <div className="rl-footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/aboutus">About Us</Link></li>
                            <li><Link href="/technologies">Technologies</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="rl-footer-column">
                        <h4>Our Services</h4>
                        <ul>
                            <li><Link href="/services">Web Development</Link></li>
                            <li><Link href="/services">Mobile App Development</Link></li>
                            <li><Link href="/services">UI/UX Design</Link></li>
                            <li><Link href="/services">Custom Software</Link></li>
                            <li><Link href="/services">Cloud Solutions</Link></li>
                        </ul>
                    </div>
                    <div className="rl-footer-column rl-footer-contact">
                        <h4>Get In Touch</h4>

                        <div className="rl-footer-contact-item">
                            <span className="rl-contact-icon">
                                <i className="bi bi-geo-alt"></i>
                            </span>
                            <p>
                                Kochi, Kerala,
                                <br />
                                India
                            </p>
                        </div>

                        <div className="rl-footer-contact-item">
                            <span className="rl-contact-icon">
                                <i className="bi bi-envelope"></i>
                            </span>
                            <a href="mailto:info@rayloop.com">
                                info@rayloop.com
                            </a>
                        </div>

                        <Link href="/contact" className="rl-footer-cta">
                            Let&apos;s Talk
                            <i className="bi bi-arrow-up-right"></i>
                        </Link>
                    </div>
                </div>
                
                <div className="rl-footer-bottom">
                    <p>
                       © 2026 RayLoop. All rights reserved.
                    </p>

                    <div className="rl-footer-bottom-links">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <span className="rl-footer-divider"></span>
                        <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
                    </div>
                </div>

            </div>

            <div className="rl-footer-glow rl-footer-glow-one"></div>
            <div className="rl-footer-glow rl-footer-glow-two"></div>
        </footer>
    );
}

export default Footer;
