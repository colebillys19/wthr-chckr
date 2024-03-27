import { useEffect } from "react";

function PageNews() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>news</h1>
    </main>
  );
}

export default PageNews;
