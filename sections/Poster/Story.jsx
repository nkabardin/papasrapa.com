import style from "./Poster.module.css";
import { menuLinks } from "../../app.config";
import Fade from "react-reveal/Fade";
export const Story = () => {
  return (
    <>
      <div className={style.text} id={menuLinks.STORY}>
        <div className={style.title}>A Story</div>

        <Fade right>
          <p>
            <strong>PAPA SRAPA</strong> is not a typical music documentary, but
            rather a condensed trip to the very heart of Noise. It is loaded
            with music that can hurt and heal, Russian weird avant-garde and
            savage vigor of its preeminent performer.
          </p>
        </Fade>
        <Fade right>
          <p>
            The film takes us to bizarre noise festivals and performances with
            ravers, tripsters and freaks immersing into worlds of sonic violence
            and ecstatic states of mind. Together with Papa we trace Noise back
            to 1920-s, binding it to early Soviet avant-garde figures, such as
            Dziga Vertov, Arseniy Avraamov and Nikolai Kulbin.
          </p>
        </Fade>
        <Fade right>
          <p>
            The craftsmаn should make his own tools - so Papa makes his of old
            Soviet radio components and cheap junk. We show it is not just about
            the way he plays them, using blood and saliva, but about the way he
            brings them to life. His weapons, known to the best part of Russian
            electronic musicians.
          </p>
        </Fade>
      </div>
    </>
  );
};
