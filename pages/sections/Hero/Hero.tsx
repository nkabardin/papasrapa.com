import style from './Hero.module.css';

export const Hero = () => {
    return (
        <div className={style.container}>
            <div style="padding:56.25% 0 0 0;position:relative;background:black;">
                <iframe src="https://player.vimeo.com/video/535592308?autoplay=1&muted=1&loop=1&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen id="video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            <div style="position: absolute; top: 400px; left: 0; right: 0; font-size: 35px; padding: 20px;  font-family: 'OpinionPro',Arial,sans-serif; color: white; text-align: center; " data-vimeo="unmute">
                <div style="display: inline-block; cursor: pointer; border: 1px solid white; padding: 12px; font-size: 18px; background: black;">
                    Включить звук
                </div>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            <script>
                $("[data-vimeo=unmute]").click(function() {
                var player = new Vimeo.Player($("#video")[0]);
                player.setMuted(false);
                $("[data-vimeo=unmute]")[0].style.display='none';
            });
            </script>
        </div>
    );
}
