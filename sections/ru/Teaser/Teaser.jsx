import { Decoration } from '../components/Decoration';
import { data } from '../data';
import style from './Teaser.module.css';
import { LINE, RECT, TEXT20 } from "../components/Decoration"

export const Teaser = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <Decoration top="29px" left="102px" xs="display: none;" {...LINE} />
                <Decoration top="154px" left="275px" xs="display: none;" sm="--left: 117px; --top: 265px;" {...LINE} />
                <Decoration top="173px" left="170px" xs="display: none;" sm="--left: 30px; --top: 218px;" md="--left: 40px;" index={-1} {...RECT} />
                <Decoration top="318px" left="434px" xs="display: none;" sm="--left: 123px; --top: 395px;" {...RECT} />
                <Decoration top="-10px" left="510px" xs="display: none;" {...TEXT20} >{data.text_content.desc_back_1}</Decoration>
                <div className={style.video}>
                    <iframe
                        id="youtubeteaser"
                        width="100%"
                        frameBorder="0"
                        allowFullScreen
                        src="//www.youtube.com/embed/PNkK0AJ7MXE?rel=0&amp;fmt=18&amp;html5=1&amp;showinfo=0" />
                </div>
            </div>
        </div>
    );
}
