// import { NewsDataType } from './types';

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
export const parseXmlData = (data: Document) => {
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
