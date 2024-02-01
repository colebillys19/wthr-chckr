import HomeCities from "../HomeCities";
import HomeNews from "../HomeNews";
import HomeSearch from "../HomeSearch";
import HomeUser from "../HomeUser";

function PageHome() {
  //

  return (
    <main>
      <HomeSearch />
      <HomeUser />
      <HomeCities />
      <HomeNews />
    </main>
  );
}

export default PageHome;
