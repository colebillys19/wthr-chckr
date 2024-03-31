import { useEffect, useState } from "react";

import { NewsDataType } from "../../utils/types/news";
import { parseXmlData } from "../../utils/helpers";
import { NewsList } from "../../ComponentsShared";

function PageNews() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<NewsDataType[]>([]);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-8 px-6 pb-36 min-h-screen">
      <h2 className="mb-8 text-xl">News</h2>
      <NewsList isLoading={isLoading} error={error} data={data} />
    </main>
  );
}

export default PageNews;
