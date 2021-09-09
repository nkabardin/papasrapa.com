import style from './ButtonLink.module.css';

export const ButtonLink = ({ yellow = false, link, anchor }) => {

    return (
        <div className={style.default}>
            <a href={link} title={anchor}>{anchor}</a>
            <style jsx>{`${yellow ? `--border-color: #ffcc00;` : ""}`}</style>
        </div>

    );
}
