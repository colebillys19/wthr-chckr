import { useEffect, useState } from "react";

import { NewsDataType } from "../../utils/types/news";
import { parseXmlData } from "../../utils/newsHelpers";
import { NewsList } from "../../SharedComponents";
import { InternalLinkText, LinkButton } from "../../BaseComponents";

function HomeNews() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<NewsDataType[]>([]);
  const [isShowingFullList, setIsShowingFullList] = useState(false);

  useEffect(() => {
    fetch("https://moxie.foxweather.com/google-publisher/weather-news.xml")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Issue fetching Fox Weather RSS.");
        }
        return response.text();
      })
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data: Document) => {
        setData(parseXmlData(data));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const itemsToShow = isShowingFullList ? data.slice(0, 8) : data.slice(0, 3);

  return (
    <div className="px-6 py-8">
      <h2 className="mb-4 text-xl">News</h2>
      <NewsList isLoading={isLoading} error={error} data={itemsToShow} />
      {!isShowingFullList && (
        <LinkButton
          handleClick={() => setIsShowingFullList(true)}
          text="Show more"
        />
      )}
      {isShowingFullList && (
        <InternalLinkText href="/news">Go to news page</InternalLinkText>
      )}
    </div>
  );
}

export default HomeNews;
