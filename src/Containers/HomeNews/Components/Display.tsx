import { useGlobalState } from "../../../context";
import { getNewsTime } from "../helpers";
import { NewsDataType } from "../types";

type DisplayPropsType = {
  data: NewsDataType[];
};

function Display({ data }: DisplayPropsType) {
  const { timeType } = useGlobalState();

  if (!data.length) {
    return <div>no data</div>;
  }

  return (
    <ul>
      {data.map((item: NewsDataType) => (
        <li key={item.title}>
          <div style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
          <div>
            <span>{getNewsTime(item.date, timeType)}</span>
            <h4>{item.title}</h4>
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

export default Display;
