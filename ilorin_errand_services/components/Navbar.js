import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Ilorin Errand Services</h1>
            </div>
            <ul>
                <li><Link href="/" legacyBehavior>
                    <a>Home</a>
                </Link>
                </li>
                <li><Link href="/about" legacyBehavior>
                    <a>About Us</a>
                </Link>
                </li>
                <li><Link href="/services" legacyBehavior>
                    <a> Section1</a>
                </Link>
                    <ul>
                        <li>
                            <Link href="/services/sector1">Home Services</Link>
                        </li>
                        <li>
                            <Link href="/services/sector2">AutoMobile Services</Link>
                        </li>
                        <li>
                            <Link href="/services/sector1">Dispatchers</Link>
                        </li>
                        <li>
                            <Link href="/services/sector1">Goods</Link>
                        </li>
                    </ul>
                </li>

                <li><Link href="/price" legacyBehavior>
                    <a>Pricing</a>
                </Link>
                </li>
                <li><Link href="/Shopping" legacyBehavior>
                    <a>Shopping</a>
                </Link>
                </li>
                <li><Link href="/Support" legacyBehavior>
                    <a>Support</a>
                </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;