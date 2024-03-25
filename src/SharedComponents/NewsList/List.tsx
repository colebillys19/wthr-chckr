import { useContext } from "react";

import { TimeTypeContext } from "../../contexts/timeTypeContext";
import { NewsDataType } from "../../utils/types/news";
import ListItemContent from "./ListItemContent";

type DisplayPropsType = {
  data: NewsDataType[];
};

function Display({ data }: DisplayPropsType) {
  const { timeType } = useContext(TimeTypeContext);

  if (!data.length) {
    return <div>no data</div>;
  }

  return (
    <ul className="max-w-screen-lg">
      {data.map((item: NewsDataType) => {
        const { title, imgUrl, date, description, link } = item;
        return (
          <li key={title}>
            <ListItemContent
              imgUrl={imgUrl}
              date={date}
              timeType={timeType}
              title={title}
              description={description || ""}
              link={link}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Display;
