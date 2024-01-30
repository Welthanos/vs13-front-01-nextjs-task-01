import styles from "./page.module.css";

export default function Trailers() {
    return (
        <>
            <main className={styles.main}>
                <h1>Top 5 animes de todos os tempos | Trailers</h1>

                <section className={styles.section} id="baki">
                    <h2>5. Baki:</h2>
                    <iframe
                        src="https://www.youtube.com/embed/feNxf6BTqGw"
                        title="Baki Hanma: Temporada 2 | Trailer oficial 2 | Netflix"
                        style={{ border: "none" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </section>

                <section className={styles.section} id="jojo">
                    <h2>4. Jojo's Bizarre Adventure:</h2>
                    <iframe
                        src="https://www.youtube.com/embed/zmNxNnuILjY"
                        title="JoJo’s Bizarre Adventure STONE OCEAN | Trailer oficial | Netflix"
                        style={{ border: "none" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </section>

                <section className={styles.section} id="naruto">
                    <h2>3. Naruto:</h2>
                    <iframe
                        src="https://www.youtube.com/embed/22R0j8UKRzY"
                        title="Official Trailer | Naruto Shippuden, Set 1| VIZ"
                        style={{ border: "none" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </section>

                <section className={styles.section} id="jujutsu">
                    <h2>2. Jujutsu Kaisen:</h2>
                    <iframe
                        src="https://www.youtube.com/embed/9sLu3bUBuOg"
                        title="JUJUTSU KAISEN Incidente em Shibuya | TRAILER OFICIAL"
                        style={{ border: "none" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </section>

                <section className={`${styles.section} ${styles.last}`} id="shingeki">
                    <h2>1. Shingeki no Kyojin:</h2>
                    <iframe
                        src="https://www.youtube.com/embed/6MRxT8kz30k"
                        title="Attack on Titan Final Season | TRAILER OFICIAL"
                        style={{ border: "none" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </section>
            </main>
        </>
    );
}