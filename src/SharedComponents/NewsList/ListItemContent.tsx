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
  date,
  timeType,
  title,
  description,
  link,
}: ListItemContentPropsType) {
  //

  return (
    <>
      {/* <div style={{ backgroundImage: `url(${item.imgUrl})` }}></div> */}
      <div>
        <span>{getNewsTime(date, timeType)}</span>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer">
          Read more
        </a>
      </div>
    </>
  );
}

export default ListItemContent;
