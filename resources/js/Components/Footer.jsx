import { Navlinks } from "@/data";
import { Link } from "@inertiajs/react";

const Footer = ({ category }) => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <header className="footer-title">Services</header>
                <Link className="link link-hover">Branding</Link>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                {Navlinks.map((link) => (
                    <Link
                        href={link.path}
                        className="link link-hover"
                        key={link.id}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            <nav>
                <header className="footer-title">Categories</header>
                {category.map((link) => (
                    <Link
                        href={link.path}
                        className="link link-hover"
                        key={link.id}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </footer>
    );
};

export default Footer;
