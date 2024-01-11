import HomeCities from "../HomeCities";
import HomeUser from "../HomeUser";
import HomeMap from "../HomeMap";
import HomeNews from "../HomeNews";

function PageHome() {
  //

  return (
    <main>
      <HomeUser />
      <HomeMap />
      <HomeCities />
      <HomeNews />
    </main>
  );
}

export default PageHome;
