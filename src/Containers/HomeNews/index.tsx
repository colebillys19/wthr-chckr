import { useEffect, useState } from "react";

import { NewsDataType } from "../../utils/types/news";
import { parseXmlData } from "../../utils/helpers";
import { NewsList } from "../../ComponentsShared";
import { InternalLinkText, LinkButton } from "../../ComponentsBase";

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
    <div className="pt-8 px-6 pb-36">
      <h2 className="mb-6 text-xl font-bold">News</h2>
      <div className="mb-6">
        <NewsList isLoading={isLoading} error={error} data={itemsToShow} />
      </div>
      {!error && !isLoading && !isShowingFullList && (
        <LinkButton
          handleClick={() => setIsShowingFullList(true)}
          text="Show more stories"
        />
      )}
      {!error && !isLoading && isShowingFullList && (
        <InternalLinkText href="/news">Go to news page</InternalLinkText>
      )}
    </div>
  );
}

export default HomeNews;
