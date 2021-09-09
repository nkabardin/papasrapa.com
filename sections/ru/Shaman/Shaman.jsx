import Image from 'next/image'
import { Decoration } from '../components/Decoration';
import { data } from './data';
import style from './Shaman.module.css';
import { LINE, SQUARE, TEXT10, TEXT20, SQUARE_136, RECT_516x100, RECT_627x256, RECT_597x430 } from "../components/Decoration"

export const Shaman = () => {
    return (
        <section className={style.container}>
            <div className={style.bg_image_wrapper}>
                <div className={style.bg_image} />
            </div>
            <div className={style.wrapper}>
                {/*RECT*/}
                <Decoration left="-49px" top="209px" {...RECT_516x100} css="--z-index:10;" />
                <Decoration left="479px" top="65px" {...RECT_627x256} />
                <Decoration left="315px" top="285px" {...RECT_597x430} />

                {/*LINE */}
                <Decoration left="45px" top="279px" {...LINE} bgColor="#fff" />
                <Decoration left="54px" top="110px" {...LINE} bgColor="#fff" css="--opacity: 0.35;" />
                <Decoration left="-354px" top="718px" {...LINE} bgColor="#fff" css="--z-index: 0;" xs="--top:1154px; --left:-346px;" />

                {/* BG TEXT */}
                <Decoration left="750px" top="515px" {...TEXT10} css="--z-index: 0; font-size: 1.375rem;">
                    {data.desc_back_1}
                </Decoration>
                <Decoration left="-140px" top="340px"
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
                <Decoration left="333px" top="-22px" {...SQUARE_136} bgColor="#000" opacity={0.4} />
                <Decoration left="109px" top="385px" {...SQUARE} bgColor="#141414" opacity={0.8} />
                <Decoration left="288px" top="485px" {...SQUARE} bgColor="#000" opacity={0.6} />
                <Decoration left="437px" top="160px" {...SQUARE} bgColor="#fff705" index={-1} />
                <Decoration left="365px" top="408px" {...SQUARE} bgColor="#fff705" index={-1} css="transform: rotate(45deg);" />
                <Decoration left="660px" top="72px" {...SQUARE} />

                {/*PHOTOS*/}
                <div className={style.photo_top}>
                    <Image src="/assets/shaman_pic1.jpg" alt="" width={310} height={233} />
                </div>
                <div className={style.photo_middle}>
                    <Image src="/assets/shaman_pic2.jpg" alt="" width={380} height={214} />
                </div>
                <div className={style.photo_bottom}>
                    <Image src="/assets/shaman_pic3.jpg" alt="" width={220} height={295} />
                </div>

                {/* TEXT */}
                <div className={style.title + " " + style.title_top}>Шаман</div>
                <div className={style.text + " " + style.text_top}>
                    {data.text_top}
                </div>
            </div>
        </section>
    );
}
