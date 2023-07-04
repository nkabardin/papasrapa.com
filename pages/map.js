import { Map as MapDiv } from "../sections/Map/Map.jsx";

export default function Map() {
  return (
    <div className="wrapper">
      <MapDiv />
      <style jsx>{`
        .wrapper {
          display: flex;
          background: #000;
          padding: 2rem;
          justify-content: center;
          height: 100vh;
          width: 100%;
          color: white;
        }
        .wrapper > div {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
