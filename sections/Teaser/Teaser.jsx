import style from "./Teaser.module.css";

export const Teaser = () => {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <div className={style.video}>
          <iframe
            id="youtubeteaser"
            width="100%"
            frameBorder="0"
            allowFullScreen
            src="//www.youtube.com/embed/PNkK0AJ7MXE?rel=0&amp;fmt=18&amp;html5=1&amp;showinfo=0"
          />
        </div>
      </div>
    </section>
  );
};
