import HeadTag from 'next/head'
import { data } from "../data.js"


export const Head = () => {
    const lang = "ru";
    return (
        <HeadTag>
            <meta charSet="utf-8" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{data[lang].title}</title>
            <meta property="og:url" content={data.link} />
            <meta property="og:title" content={data[lang].title} />
            <meta property="og:description" content={data[lang].description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/assets/back_02.jpg" />
            <link rel="canonical" href={data.link} />
            <meta property="fb:app_id" content={data.social.fb_app_id} />
            <meta name="format-detection" content="telephone=no" />
            <meta http-equiv="x-dns-prefetch-control" content="on" />
            <link rel="shortcut icon" href={data.icon} type="image/x-icon" />
        </HeadTag>
    );
}
