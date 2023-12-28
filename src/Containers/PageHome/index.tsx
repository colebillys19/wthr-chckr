import HomeCities from "../HomeCities";
import HomeLocation from "../HomeLocation";
import HomeMap from "../HomeMap";
import HomeNews from "../HomeNews";

function PageHome() {
  //

  return (
    <div>
      <HomeLocation />
      <HomeMap />
      <HomeCities />
      <HomeNews />
    </div>
  );
}

export default PageHome;
