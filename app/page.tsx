import Image from "next/image";
import styles from "./page.module.css";

import baki from "./assets/baki.webp";
import jojo from "./assets/jojo.webp";
import naruto from "./assets/naruto.webp";
import jujutsu from "./assets/jujutsu.webp";
import shingeki from "./assets/shingeki.webp";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Top 5 animes de todos os tempos</h1>
        <p>
          Prepare-se para mergulhar no universo dos melhores animes escolhidos cuidadosamente pelo autor. Neste
          seleto grupo de "Top 5", cada anime é uma obra-prima que cativou pela narrativa envolvente, personagens
          memoráveis e momentos impactantes. A variedade de gêneros promete agradar a todos os gostos, desde
          aventuras épicas e emocionantes até tramas intricadas repletas de suspense. Ao explorar essas criações
          excepcionais, embarque em jornadas extraordinárias e descubra por que esses animes se destacam como
          verdadeiras pérolas do mundo da animação japonesa. Cada título é uma promessa de entretenimento de alta
          qualidade, pronto para conquistar seu coração e elevar sua apreciação pelo universo dos animes.
        </p>

        <section className={styles.section}>
          <h2>5. Baki</h2>
          <Image src={baki} alt="Imagem do anime Baki" />
          <p>
            Baki é uma empolgante série de anime que mergulha no mundo brutal e competitivo das artes marciais.
            A trama gira em torno de Baki Hanma, um jovem lutador determinado a se tornar o guerreiro mais forte
            do mundo. A história desenrola-se em meio a intensos torneios de artes marciais, desafiando Baki a
            enfrentar adversários poderosos e variados.

            O anime explora temas como a busca pela perfeição nas habilidades de combate, relações familiares
            complexas e o constante aprimoramento pessoal. A narrativa é impulsionada por cenas de luta
            intensas, estratégias astutas e personagens carismáticos. Ao longo da jornada de Baki, o público é
            levado a um universo repleto de rivalidades ferozes e confrontos épicos, oferecendo uma experiência
            emocionante para os amantes de anime e fãs de ação.
          </p>
          <a href="pages/trailer/trailer.html#baki">Ver trailer <i className="fa-solid fa-arrow-right"></i></a>
        </section>

        <section className={styles.section}>
          <h2>4. Jojo's Bizarre Adventure</h2>
          <Image src={jojo} alt="Imagem do anime Jojo's Bizarre Adventure" height="500" />
          <p>
            Jojo's Bizarre Adventure é uma épica série de anime que segue a extraordinária jornada da família
            Joestar ao longo de gerações. Criada por Hirohiko Araki, a narrativa envolve batalhas sobrenaturais,
            poderes conhecidos como "Stands" e uma busca incessante pelo destino. Cada parte da série apresenta
            um novo protagonista Joestar, cada um enfrentando ameaças únicas e inimigos poderosos. Com um estilo
            visual distintivo e trama repleta de reviravoltas, o anime é conhecido por sua inventividade,
            referências culturais e personagens memoráveis. Desde os primeiros confrontos na Inglaterra
            vitoriana até as batalhas estonteantes no Japão contemporâneo, Jojo's Bizarre Adventure cativa os
            espectadores com sua originalidade, ação intensa e uma trilha sonora marcante. Uma obra que
            transcende gerações, o anime se destaca como um clássico moderno do gênero de aventura e fantasia.
          </p>
          <a href="pages/trailer/trailer.html#jojo">Ver trailer <i className="fa-solid fa-arrow-right"></i></a>
        </section>

        <section className={styles.section}>
          <h2>3. Naruto</h2>
          <Image src={naruto} alt="Imagem do anime Naruto" height="500" />
          <p>
            Naruto é uma série de anime que narra a jornada épica de Naruto Uzumaki, um jovem ninja aspirante
            com o sonho de se tornar o líder de sua vila, conhecido como Hokage. Contudo, ele carrega em si a
            raposa de nove caudas, Kurama, trazendo desafios e isolamento. A narrativa explora temas de amizade,
            superação e determinação enquanto Naruto forma laços com seus colegas ninjas, incluindo Sasuke e
            Sakura.

            A série se desenrola em um mundo ninja intricado, onde lutas espetaculares, técnicas especiais e
            missões perigosas são o cotidiano. À medida que Naruto cresce, ele enfrenta inimigos poderosos,
            descobre segredos obscuros e busca a aceitação de sua comunidade. Com uma combinação de ação
            intensa, desenvolvimento de personagens profundo e uma narrativa emocional, Naruto tornou-se um
            ícone do anime, atraindo uma base de fãs global e deixando um legado duradouro na cultura pop.
          </p>
          <a href="pages/trailer/trailer.html#naruto">Ver trailer <i className="fa-solid fa-arrow-right"></i></a>
        </section>

        <section className={styles.section}>
          <h2>2. Jujutsu Kaisen</h2>
          <Image src={jujutsu} alt="Imagem do anime Jujutsu Kaisen" height="500" />
          <p>
            Jujutsu Kaisen é um anime envolvente que mescla ação, sobrenatural e comédia. A história gira em
            torno de Yuji Itadori, um estudante colegial com habilidades atléticas excepcionais, que
            acidentalmente se depara com um artefato amaldiçoado contendo energia amaldiçoada. Ao abrir o
            objeto, Yuji libera criaturas malignas e acaba envolvido em um mundo de maldições e feitiçaria.

            Após um evento trágico, Yuji decide se juntar a uma escola de feiticeiros para combater as maldições
            e proteger os inocentes. Ele se une a outros estudantes, incluindo a enigmática Megumi Fushiguro e a
            excêntrica Nobara Kugisaki. Juntos, eles enfrentam desafios perigosos, maldições poderosas e uma
            organização obscura que busca controlar as forças sobrenaturais.

            Com animação vibrante, sequências de luta emocionantes e personagens cativantes, Jujutsu Kaisen
            conquistou fãs ao redor do mundo, tornando-se um destaque no universo dos animes contemporâneos.
          </p>
          <a href="pages/trailer/trailer.html#jujutsu">Ver trailer <i className="fa-solid fa-arrow-right"></i></a>
        </section>

        <section className={`${styles.section} ${styles.last}`}>
          <h2>1. Shingeki no Kyojin</h2>
          <Image src={shingeki} alt="Imagem do anime Shingeki no Kyojin" height="500" />
          <p>
            Shingeki no Kyojin, também conhecido como "Attack on Titan", é uma série de anime que mergulha os
            espectadores em um mundo sombrio e implacável. Situada em um futuro distópico onde a humanidade
            enfrenta a extinção devido a criaturas humanoides conhecidas como Titãs devoradores de humanos, a
            narrativa segue Eren Yeager e seus amigos Mikasa e Armin. Ao descobrir a habilidade de Eren se
            transformar em um Titã, eles se juntam ao Corpo de Exploração para combater essas criaturas
            mortíferas e desvendar os mistérios por trás de sua existência. A trama intensa, repleta de
            reviravoltas e revelações, explora temas complexos como sobrevivência, liberdade e a verdade por
            trás dos muros que protegem a última esperança da humanidade. Com uma animação envolvente,
            personagens cativantes e uma trilha sonora emocional, Shingeki no Kyojin se destaca como um épico
            que desafia as expectativas do gênero.
          </p>
          <a href="pages/trailer/trailer.html#shingeki">Ver trailer <i className="fa-solid fa-arrow-right"></i></a>
        </section>
      </main>
    </>
  );
}
