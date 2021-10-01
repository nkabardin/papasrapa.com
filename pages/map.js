import Image from "next/image";
import { MapSvg } from "../sections/Map/MapSvg.jsx";

export default function Map() {
  return (
    <div className="wrapper">
      {/* <img
        src={"/assets/world-map.svg"}
        alt="World Festivals award"
        width={600}
        height={"100%"}
        unoptimized
      /> */}
      <MapSvg />
      <style jsx>{`
        .wrapper {
          display: flex;
          background: #000;
          padding: 2rem;
          justify-content: center;
          height: 100vh;
          width: 100%;
        }
        .wrapper > div {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
