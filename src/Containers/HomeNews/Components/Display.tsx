import { CSSProperties } from "react";

import { useGlobalState } from "../../../context";
import { getNewsTime } from "../helpers";

const tempStylesA: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  rowGap: "12px",
};

const tempStylesB: CSSProperties = {
  display: "flex",
  columnGap: "12px",
  flexWrap: "wrap",
};

const tempStylesC: CSSProperties = {
  display: "relative",
  minWidth: "216px",
  height: "144px",
  backgroundColor: "black",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const tempStylesD: CSSProperties = {
  width: "calc(100% - 228px)",
};

function HomeNews({ data }: any) {
  const { timeType } = useGlobalState();

  if (!data.length) {
    return <div>no data</div>;
  }

  return (
    <ul style={tempStylesA}>
      {data.map((item: any) => (
        <li key={item.title} style={tempStylesB}>
          <div
            style={{ ...tempStylesC, backgroundImage: `url(${item.imgUrl})` }}
          ></div>
          <div style={tempStylesD}>
            <span>{getNewsTime(item.date, timeType)}</span>
            <h4>
              <b>{item.title}</b>
            </h4>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              Read more
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomeNews;
