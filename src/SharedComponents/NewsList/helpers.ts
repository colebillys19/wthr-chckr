import { getTimeStandard, getTimeMilitary } from "../../utils/helperHelpers";
// import { NewsDataType } from './types';

/*
 *
 */
export const getDayStr = (date: Date) => {
  const day = date.getDate();
  let daySuffix;
  if (day > 3 && day < 21) {
    daySuffix = "th";
  } else {
    switch (day % 10) {
      case 1:
        daySuffix = "st";
        break;
      case 2:
        daySuffix = "nd";
        break;
      case 3:
        daySuffix = "rd";
        break;
      default:
        daySuffix = "th";
        break;
    }
  }
  const monthName = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${monthName} ${day}${daySuffix}, ${year}`;
};

/*
 *
 */
export const getNewsTime = (dateStr: string, timeType: string) => {
  const articleDateMs = new Date(dateStr);
  const dayStr = getDayStr(articleDateMs);
  const articleDateHours = articleDateMs.getHours();
  const articleDateMinutes = articleDateMs.getMinutes();
  const timeOfDay =
    timeType === "standard"
      ? getTimeStandard(articleDateHours, articleDateMinutes)
      : getTimeMilitary(articleDateHours, articleDateMinutes);
  const timezoneStr = articleDateMs
    .toLocaleTimeString("en-us", { timeZoneName: "short" })
    .split(" ")[2];

  return `${dayStr}, ${timeOfDay} ${timezoneStr}`;
};
