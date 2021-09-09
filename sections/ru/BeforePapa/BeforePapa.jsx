import Image from 'next/image'
import { Decoration } from '../components/Decoration';
import { data } from './data';
import style from './BeforePapa.module.css';
import { LINE, SQUARE, TEXT10, TEXT20, SQUARE_136, RECT_987, RECT_782 } from "../components/Decoration"

export const BeforePapa = () => {
    return (
        <section className={style.container}>
            <div className={style.bg_image_wrapper}>
                <div className={style.bg_image} />
            </div>

            <div className={style.wrapper}>
                <div className={style.title_section}>До Папы</div>
                <div className={style.logo}>
                    <img src="/assets/before_logo.jpg" alt="Before papa" width={380} height={145} />
                </div>
                {/*RECT*/}
                <Decoration left="57px" top="103px" {...RECT_987} />
                <Decoration left="-170px" top="321px" {...RECT_782} />

                {/*LINE */}
                <Decoration left="275px" top="179px" {...LINE} />
                <Decoration left="191px" top="381px" {...LINE} />
                <Decoration left="-372px" top="615px" {...LINE} css="--z-index: 0;"
                    xs="--left: -350px; --top: 799px;"
                />

                {/*TEXT */}
                <Decoration left="480px" top="20px"
                    {...TEXT20}
                    css="--z-index: 0; font-size: 1.375rem;">
                    {data.desc_back_1}
                </Decoration>
                <Decoration left="140px" top="220px"
                    {...TEXT20}
                    css="--z-index: 0; font-size: 1rem;">
                    {data.desc_back_1}
                </Decoration>
                <Decoration left="750px" top="515px"
                    {...TEXT10}
                    css="--z-index: 0; font-size: 1.375rem;"
                    md="--left: 380px; --top: 805px;">
                    {data.desc_back_1}
                </Decoration>

                {/*SQUARE */}
                <Decoration left="333px" top="48px" {...SQUARE_136}
                    lg="--left: 352px; --top: -27px;"
                    md="--top: 0;"
                />
                <Decoration left="887px" top="510px" {...SQUARE} bgColor="#2e2e2e" css="--z-index: 0;"
                    md="--left: 596px; --top: 973px;"
                    sm="--left: 74px; --top: 1064px;"
                />
                <Decoration left="437px" top="160px" {...SQUARE} bgColor="#fff705" css="--z-index: -1;" />
                <Decoration left="365px" top="408px" {...SQUARE} bgColor="#fff705" css="--z-index: -1; transform: rotate(45deg);" />
                <Decoration left="288px" top="485px" {...SQUARE} bgColor="#000" css="--z-index: 0;" />
                <Decoration left="1166px" top="343px" {...SQUARE_136}
                    md="--left: -15px; --top: 922px;"
                    sm="--left: -17px; --top: 955px;"
                    xs="--left: -72px; --top: 997px;"
                />


                {/*PHOTOS*/}
                <div className={style.photo_top}>
                    <Image src="/assets/before_pic_1.jpg" alt="" width={310} height={340} />
                </div>
                <div className={style.photo_bottom}>
                    <Image src="/assets/before_pic_2.jpg" alt="" width={380} height={284} />
                </div>

                {/* TEXT */}
                <div className={style.title + " " + style.title_top}>Николай Кульбин</div>
                <div className={style.title + " " + style.title_bottom}>Дзига Вертов</div>
                <div className={style.text + " " + style.text_top}>
                    {data.text_top}
                </div>
                <div className={style.text + " " + style.text_bottom}>
                    {data.text_bottom}
                </div>
            </div>


        </section>
    );
}
