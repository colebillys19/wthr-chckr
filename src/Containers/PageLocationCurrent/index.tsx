import { useEffect } from "react";

import QueryStringChecker from './Components/QueryStringChecker';

function PageLocationCurrent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <QueryStringChecker />
    </main>
  );
}

export default PageLocationCurrent;
