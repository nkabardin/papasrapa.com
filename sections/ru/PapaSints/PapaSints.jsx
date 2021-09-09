import Image from 'next/image'
import { Decoration } from '../components/Decoration';
import { data } from './data';
import style from './PapaSints.module.css';
import { LINE, SQUARE, TEXT10, TEXT20, SQUARE_136, RECT_987, RECT_516x100, RECT_627x256, SQUARE_428x419 } from "../components/Decoration"

export const PapaSints = () => {
    return (
        <section className={style.container}>
            <div className={style.bg_image_wrapper}>
                <div className={style.bg_image} />
            </div>
            <div className={style.wrapper}>
                {/*RECT*/}
                <Decoration left="-49px" top="209px"
                    {...RECT_516x100} />
                <Decoration left="479px" top="65px"
                    {...RECT_627x256} />

                {/*LINE */}
                <Decoration left="275px" top="109px"  {...LINE} bgColor="#fff" />
                <Decoration left="191px" top="381px"  {...LINE} bgColor="#fff" css="--opacity: 0.35;" />
                <Decoration left="-372px" top="705px"   {...LINE}
                    bgColor="#fff"
                    css="--z-index: 0;"
                    xs="--top: 617px;"
                    md="--top: 755px;"
                />

                {/* BG TEXT */}
                <Decoration left="750px" top="515px"
                    {...TEXT10}
                    css="--z-index: 0; font-size: 1.375rem;"
                    md="--left: -220px; --top: 410px;">
                    {data.desc_back_1}
                </Decoration>
                <Decoration left="140px" top="220px"
                    {...TEXT20}
                    css="--z-index: 0; font-size: 1rem;">
                    {data.desc_back_1}
                </Decoration>
                <Decoration left="480px" top="20px"
                    {...TEXT10}
                    css="--z-index: 0; font-size: 1.375rem;">
                    {data.desc_back_2}
                </Decoration>

                {/*SQUARE */}
                <Decoration left="333px" top="-22px" {...SQUARE_136} opacity={0.4}
                    xs="--left: 252px; --top: -16px;"
                />
                <Decoration left="1166px" top="343px"  {...SQUARE} css="--z-index: 30;" opacity={0.8} />
                <Decoration left="288px" top="485px"   {...SQUARE} bgColor="#000" />
                <Decoration left="887px" top="510px"   {...SQUARE} bgColor="#2e2e2e"
                    xs="--left: -13px; --top: 387px;"
                />
                <Decoration left="152px" top="433px" {...SQUARE_428x419}
                    xs="--left: 325px; --top: 337px;"
                />



                {/*PHOTOS*/}
                <div className={style.photo_top}>
                    <Image src="/assets/sints_pic1.jpg" alt="" width={310} height={248} />
                </div>
                <div className={style.photo_middle}>
                    <Image src="/assets/sints_pic2.jpg" alt="" width={380} height={285} />
                </div>
                <div className={style.photo_bottom}>
                    <Image src="/assets/sints_pic3.jpg" alt="" width={410} height={273} />
                </div>

                {/* TEXT */}
                <div className={style.title + " " + style.title_top}>Папа</div>
                <div className={style.title + " " + style.title_bottom}>Синты</div>
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
