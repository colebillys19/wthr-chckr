import { ExternalLink } from "../../BaseComponents";
import { getNewsTime } from "./helpers";

type ListItemContentPropsType = {
  imgUrl: string;
  date: string;
  timeType: string;
  title: string;
  description: string;
  link: string;
};

function ListItemContent({
  imgUrl,
  date,
  timeType,
  title,
  description,
  link,
}: ListItemContentPropsType) {
  //

  return (
    <div className="relative flex flex-col gap-4 md:flex-row">
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="relative bg-black w-56 h-36 shrink-0 bg-cover bg-center"
      ></div>
      <div className="flex flex-col items-start grow-0">
        <span className="mb-2 text-grey-a">{getNewsTime(date, timeType)}</span>
        <h4 className="mb-2 font-bold line-clamp-1">{title}</h4>
        <p className="mb-2 line-clamp-3">{description}</p>
        <ExternalLink href={link} text="Read more" />
      </div>
    </div>
  );
}

export default ListItemContent;
