import { WeatherMap } from "../../../ComponentsShared";
import PageTopContainer from "./PageTopContainer";

type PageContainerPropsType = {
  location: string;
};

function PageContainer({
  location,
}: PageContainerPropsType) {
  //

  return (
    <div className="pt-8 pb-36">
      <PageTopContainer location={location} />
      <div className="pt-8 px-6">
        <h4 className="mb-6 text-xl font-bold">Live Map</h4>
        <WeatherMap location={location} zoom={8} />
      </div>
    </div>
  );
}

export default PageContainer;
