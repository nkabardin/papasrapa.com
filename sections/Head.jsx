import HeadTag from "next/head";

const fb_app_id = "257953674358265";
const title =
  "Papa Srapa (2021, documentary). Noise. Shamanism. Synthesis.";
const description =
  "Condensed trip to the very heart of Noise. Documentary movie that is loaded with music that can hurt and heal, Russian weird avant-garde and savage vigor of its preeminent performer.";
const link = "https://www.papasrapa.com";

export const Head = () => {
  return (
    <HeadTag>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        crossOrigin="anonymous"
        rel="preconnect"
        href="https://fonts.gstatic.com"
      />
      <link
        crossOrigin="anonymous"
        rel="preconnect"
        href="https://player.vimeo.com"
      />
      <meta property="og:url" content={link} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://papasrapa.com/assets/back_02.jpg"
      />
      <link rel="canonical" href={link} />
      <meta property="fb:app_id" content={fb_app_id} />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <link rel="shortcut icon" href="/assets/ico.ico" type="image/x-icon" />
    </HeadTag>
  );
};
