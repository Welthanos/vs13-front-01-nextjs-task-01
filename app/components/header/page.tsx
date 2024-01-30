import styles from "./page.module.css";
import logo from "../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link href="/" className={styles.logo}><Image src={logo} alt="logomarca do Anime Hero" />AnimeHero</Link>
                <nav className={styles.nav}>
                    <Link href="/trailer">Ver trailers</Link>
                    <Link href="/feedback">Dê seu feedback</Link>
                </nav>
            </header>
        </>
    );
}