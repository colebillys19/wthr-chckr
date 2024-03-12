import { useEffect, useState } from "react";

import { HomeSectionContainer } from "../../SharedComponentsAux";
import DisplayContainer from './Components/DisplayContainer';
import { parseXmlData } from './helpers';
import { NewsDataType } from './types';

function HomeNews() {
  const [isLoading, setIsLoading] = useState(-1);
  const [error, setError] = useState("");
  const [data, setData] = useState<NewsDataType[]>([]);

  useEffect(() => {
    if (isLoading !== 1) {
      setIsLoading(1);
    }
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
        setIsLoading(0);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsLoading(0);
      });
  }, []);

  return (
    <HomeSectionContainer>
      <DisplayContainer isLoading={isLoading !== 0} error={error} data={data}  />
    </HomeSectionContainer>
  );
}

export default HomeNews;
