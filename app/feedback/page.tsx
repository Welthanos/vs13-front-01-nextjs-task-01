import styles from "./page.module.css";
import logo from "../assets/logo_black.svg";
import Image from "next/image";

export default function Feedback() {
    return (
        <>
            <main className={styles.main}>
                <form className={styles.form}>
                    <Image src={logo} alt="logomarca do Anime Hero" />
                    <fieldset>
                        <legend>Gostou do top 5?</legend>
                        <label><input type="radio" name="option" value="yes" required /> Sim</label>
                        <label><input type="radio" name="option" value="no" required /> Não</label>
                    </fieldset>

                    <br /> <br />

                    <label htmlFor="anime" className={styles.recommend}> Qual anime não poderia estar de fora do top 5?</label>
                    <input type="text" className={styles.recommend} id="anime" maxLength={50} placeholder="Digite seu anime preferido..." required size={30} />

                    <br /> <br />

                    <input type="submit" value="Enviar" />
                </form>
            </main>
        </>
    );
}
