import style from "./Map.module.css";

export const Map = () => {
  return (
    <div className={style.container}>
      Map
      <div className="dot leipzig" title="Leipzig"></div>
      <div className="dot kiff" title="Kiff"></div>
      <div className="dot artdoc" title="Artdoc"></div>
      <style jsx>{`
        .dot {
          --size: calc(100vw * 0.007);
          background: red;
          position: absolute;
          width: var(--size);
          height: var(--size);
          max-width: 4px;
          max-height: 4px;
          border-radius: 50%;
        }
        .dot:hover {
          cursor: pointer;
        }
        .leipzig {
          top: 46%;
          left: 50%;
        }
        .kiff {
          top: 46%;
          left: 58.5%;
        }
        .artdoc {
          top: 37%;
          left: 58.5%;
        }
      `}</style>
    </div>
  );
};
