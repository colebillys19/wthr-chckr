import { getTimeStandard, getTimeMilitary } from "../../utils/helperHelpers";

/*
 *
 */
const decodeHtmlEntities = (str: string) => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(
    "<!doctype html><body>" + str,
    "text/html"
  );
  return dom.body.textContent;
};

/*
 *
 */
export const parseXmlData = (data: any) => {
  const rssElement = data.documentElement;
  // const contentNamespace = rssElement.getAttributeNS(
  //   "http://www.w3.org/2000/xmlns/",
  //   "content"
  // );
  const mediaNamespace = rssElement.getAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "media"
  );
  const items = Array.from(data.querySelectorAll("item"));
  return items.slice(0, 5).map((item: any) => {
    // const contentEncoded = item.getElementsByTagNameNS(
    //   contentNamespace,
    //   "encoded"
    // );
    // const contentEncodedTextContent = contentEncoded[0]?.textContent;
    const mediaContent = item.getElementsByTagNameNS(mediaNamespace, "content");
    const imgUrl = mediaContent[0]?.getAttribute("url");
    const imgType = mediaContent[0]?.getAttribute("type");
    const categoriesXmlArr = Array.from(item.querySelectorAll("category"));
    const categoriesArr: string[] = [];
    categoriesXmlArr.forEach((catEl: any) => {
      if (catEl) {
        const catStr = catEl.textContent;
        if (catStr.slice(0, 12) === "fox-weather/") {
          categoriesArr.push(catStr.slice(12));
        }
      }
    });
    console.log(item.querySelector("description"));
    return {
      title: item.querySelector("title")?.textContent,
      date: item.querySelector("pubDate")?.textContent,
      link: item.querySelector("link")?.textContent,
      // contentEncodedTextContent,
      imgUrl,
      isGif: imgType === "image/gif",
      description: decodeHtmlEntities(
        item.querySelector("description")?.textContent
      ),
      categories: categoriesArr,
    };
  });
};

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
