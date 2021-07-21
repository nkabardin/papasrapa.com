import style from './AppBar.module.css';
import { data } from "../data"

export const AppBar = () => {
    const lang = "ru";

    return (
        <header className={style.container}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <img src="assets/logo.svg" alt="PapaSrapa" width="200" />
                </div>
                <div className={style.title}>{data[lang].appbar_desc}</div>
                <div className={style.social}>
                    <a href={data.social.instagram} rel="noopener"><img src="assets/instagram-white.svg" alt="Instagram" /></a>
                    <a href={data.social.telegram} rel="noopener"><img src="assets/telegram-white.svg" alt="Telegram" /></a>
                </div>
            </div>
        </header>
    );
}
