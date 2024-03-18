import { WeatherMap } from "../../../SharedComponents";
import PageTopContainer from "./PageTopContainer";

type PageContainerPropsType = {
  location: string;
};

function PageContainer({
  location,
}: PageContainerPropsType) {
  //

  return (
    <>
      <PageTopContainer location={location} />
      <div>
        <h2>Map</h2>
        <WeatherMap location={location} zoom={8} />
      </div>
    </>
  );
}

export default PageContainer;
