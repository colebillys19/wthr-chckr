import { useEffect } from "react";

function PageNotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>page not found</h1>
    </main>
  );
}

export default PageNotFound;
