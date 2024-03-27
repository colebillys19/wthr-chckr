import { useEffect } from "react";

function PageCities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>cities</h1>
    </main>
  );
}

export default PageCities;
