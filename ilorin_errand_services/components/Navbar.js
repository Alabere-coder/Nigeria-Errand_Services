import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Ilorin Errand Services</h1>
            </div>
            <Link href="/" legacyBehavior>
                <a>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
                <a>About</a>
            </Link>
            <Link href="/services" legacyBehavior>
                <a>Section1</a>
            </Link>
        </nav>
    );
}

export default Navbar;