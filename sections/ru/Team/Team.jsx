import { Decoration } from '../components/Decoration';
import { data } from './data';
import style from './Team.module.css';
import { LINE, SQUARE, SQUARE_MEDIUM, TEXT10, TEXT20, SQUARE_136, RECT } from "../components/Decoration"
import Image from 'next/image';

export const Team = () => {
    return (
        <section className={style.container}>
            <div className={style.wrapper}>
                {/*RECT*/}
                <Decoration left="170px" top="248px" {...RECT} css="--z-index:10;" lg="--left:30px; --top:218px;" xs="--top:98px;" />
                <Decoration left="434px" top="393px" {...RECT} css="--z-index:10;" md="--left:123px; --top:395px;" xs="--top:375px;" />

                {/*LINE */}
                <Decoration left="102px" top="104px" {...LINE} />
                <Decoration left="306px" top="141px" {...LINE}
                    xs="--left:5px; --top:818px;"
                    lg="--left:-37px; --top:759px;"
                />
                <Decoration left="178px" top="470px" {...LINE}
                    xs="--left:-881px; --top:118px;"
                    sm="--left:117px; --top:265px;" />

                {/* BG TEXT */}
                <Decoration left="740px" top="645px" {...TEXT10} css="--z-index: 0; font-size: 1.375rem;">
                    {data.desc_back_2}
                </Decoration>
                <Decoration left="60px" top="545px" {...TEXT10} css="--z-index: 0; font-size: 1.375rem;" xs="--left:-250px; --top:450px;">
                    {data.desc_back_2}
                </Decoration>
                <Decoration left="510px" top="65px" {...TEXT20} css="--z-index: 0; font-size: 1rem;">
                    {data.desc_back_1}
                </Decoration>

                {/*SQUARE */}
                <Decoration left="459px" top="102px" {...SQUARE_MEDIUM} bgColor="#000" />
                <Decoration left="784px" top="611px" {...SQUARE_136} bgColor="#000" index={10}
                    sm="--left:-33px; --top:617px;"
                    xs="--left:255px; --top:-132px;"
                />
                <Decoration left="659px" top="695px" {...SQUARE} />
                <Decoration left="743px" top="591px" {...SQUARE} bgColor="#2e2e2e" />

                {/*PHOTO*/}
                <div className={style.photo}>
                    <Image src="/assets/team.jpg" alt="" width={470} height={318} />
                </div>

                {/* TEXT */}
                <div className={style.title + " " + style.title_top}>Команда</div>
                <div className={style.text + " " + style.text_top}>{data.text_top}</div>
                <div className={style.name + " " + style.name_left}>Константин Иванов</div>
                <div className={style.name + " " + style.name_right}>Никита Кабардин</div>

            </div>
        </section>
    );
}
