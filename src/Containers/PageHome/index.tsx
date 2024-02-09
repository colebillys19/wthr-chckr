import HomeCities from "../HomeCities";
import HomeNews from "../HomeNews";
import HomeSearch from "../HomeSearch";
import HomeUser from "../HomeUser";
import HomeMap from "../HomeMap";

function PageHome() {
  //

  return (
    <main>
      <HomeSearch />
      <HomeUser />
      <HomeCities />
      <HomeMap />
      <HomeNews />
    </main>
  );
}

export default PageHome;
