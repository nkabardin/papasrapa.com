import style from "./Credits.module.css";

export const Credits = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Film Credits</div>
      <div className={style.group}>
        <div>
          <a
            className={style.link + " " + style.sub_title}
            href="https://www.instagram.com/kont_iv/"
            title="Konstantin Ivanov"
          >
            Konstantin Ivanov
          </a>
        </div>
        <p>co-director, director of photography, editor</p>
      </div>

      <div className={style.group}>
        <div>
          <a
            className={style.link + " " + style.sub_title}
            href="https://kabardin.com/"
            title="Nikita Kabardin"
          >
            Nikita Kabardin
          </a>
        </div>
        <p>producer, co-director, trailer music</p>
      </div>

      <div className={style.group}>
        <div>
          <a
            className={style.link + " " + style.sub_title}
            href="https://www.instagram.com/damirkhalilov/"
            title="Damir Khalilov"
          >
            Damir Khalilov
          </a>
        </div>
        <p>screenwriting and creating original idea</p>
      </div>

      <div className={style.group}>
        <div>
          <a
            className={style.link + " " + style.sub_title}
            href="https://www.instagram.com/tripontape/"
            title="Alexander Grigoryev"
          >
            Alexander Grigoryev
          </a>
        </div>
        <p>sound design and directing music</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>Camera Operators</div>
        <p>Vasiliy Littebrandt</p>
        <p>Maksim Drozdov</p>
        <p>Anna Rozhetskaya</p>
        <p>Sergey Murzik</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>Sound Recorders</div>
        <p>Jannet Khovalyg</p>
        <p>Alexander Nevsky</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>Composers</div>
        <p>Alexander Grigoryev</p>
        <p>EvoljuzZ</p>
        <p>Ilyas B Arinov</p>
        <p>Nikita Kabardin</p>
        <p>Jannet Khovalyg</p>
        <p>Artem Leonov</p>
        <p>Noster</p>
        <p>pcmman</p>
        <p>Tala Nikitina</p>
        <p>Igor Kislov</p>
        <p>Mark Sharapov</p>
        <p>Andrey Terekhov</p>
        <p>Misha Dioxin</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>Voice Editors</div>
        <p>Ivan Yerofeyev</p>
        <p>Constantine Dorogobed</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>Trailer music mixing / mastering</div>
        <p>Dmitriy &quot;Astropilot&quot; Redko</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>St-Petersburg Crew</div>
        <p>Anastasia Martynova</p>
        <p>Damir Khalilov</p>
        <p>Vitaly Shvedchenko</p>
        <p>Nikolay Letunovsky</p>
        <p>Tatiana Lytasova</p>
        <p>Fyodor Shpalikov</p>
        <p>Tatiana Glazyrina</p>
        <p>Sergey Kuznetsov</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>Movie Heroes</div>
        <p>Eduard Srapionov</p>
        <p>Mother of Eduard</p>
        <p>Leonid Kotelnikov</p>
        <p>Vlad Kreimer</p>
        <p>Anatoly Rykh</p>
        <p>Denis Tretyakov</p>
        <p>Oleg Sitkovsky</p>
        <p>Maxim Berezin</p>
        <p>Tamara Ryazantseva</p>
        <p>Valentin Sohorev</p>
        <p>Tala Nikitina</p>
        <p>Oleg Bezlutsky</p>
        <p>Vera Barkalova</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>Additional video material</div>
        <p>IZOLYATSIA. Platform for cultural initiatives</p>
        <p>Anton Likhachev</p>
        <p>Aleksey Gurevnin</p>
        <p>Alex Anikin</p>
        <p>Ilia Symphocat</p>
        <p>George Obukhov</p>
        <p>Mitya Posidelov</p>
        <p>Pavel Voloshin</p>
        <p>Anton Rodionov</p>
        <p>AWOTT</p>
        <p>Boris Tkachenko</p>
        <p>Amurskaya Pravda</p>
        <p>Museum Berardo</p>
        <p>Simphonic Silence Inside</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>Poster Artist</div>
        <p>Alex Ricochet</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>Subtitles</div>
        <p>Tatiana Lytasova</p>
        <p>Ekaterina Krupina</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>Design</div>
        <p>Oleg Pospelov</p>
        <p>Anastasia Mew</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>Software Development</div>
        <p>Anton Kuptsov</p>
      </div>

      <div className={style.group}>
        <div className={style.sub_title}>Special Thanks</div>
        <p>Gallery GEZ-21</p>
        <p>Evgeniy BioSonar</p>
        <p>Yuri Elik</p>
        <p>Andrey Popovsky</p>
        <p>Balkon Space</p>
        <p>Gorizontal Co-op</p>
        <p>Artyom Kryptogen</p>
        <p>Gleb Glonti</p>
        <p>Maksim Ivanov</p>
        <p>Andrey Paperniy</p>
      </div>
    </div>
  );
};
