import { useEffect, useState } from "react";
import Script from "next/script";

export const Hero = ({ lang = "en" }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    function is_touch_enabled() {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }

    setIsTouchDevice(is_touch_enabled());
  }, [isTouchDevice]);

  return (
    <section className="bg-black mx-auto my-7 relative w-full tablet:w-3/5">
      <div className="relative flex justify-center items-center w-full max-w-full bg-black h-[calc(100vw*0.5)] tablet:h-[calc(100vw*0.25)]">
        <iframe
          src="https://player.vimeo.com/video/535605732?autoplay=1&muted=1&loop=1&byline=0&portrait=0"
          allow="autoplay; fullscreen; picture-in-picture"
          id="video"
          title="PapaSrapa documentary movie teaser"
          className="absolute top-0 left-0 w-full h-full"
        />
        <Script src="https://player.vimeo.com/api/player.js" />
        {!isTouchDevice && (
          <>
            <div
              className="relative font-opinion text-white z-[999] p-3  text-xl bg-black inline-block border border-white hover:cursor-pointer"
              id="unmute"
            >
              {lang === "en" ? "Unmute" : "Включить звук"}
            </div>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                        const btn = document.getElementById('unmute');
                        btn.addEventListener("click", () => {
                            var player = new Vimeo.Player("video");
                            player.setMuted(false);
                            player.setCurrentTime(0);
                            btn.style.display='none';
                            }
                            );`,
              }}
            />
          </>
        )}
      </div>
    </section>
  );
};
