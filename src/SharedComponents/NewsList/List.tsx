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
    <ul className="flex flex-col gap-6 max-w-screen-lg">
      {data.map((item: NewsDataType, i) => {
        const { title, imgUrl, date, description, link } = item;
        const hasBorder = i !== data.length - 1;
        return (
          <li key={title} className={hasBorder ? 'pb-6 border-b border-grey-b' : ''}>
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
