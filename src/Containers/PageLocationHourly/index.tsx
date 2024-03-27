import { useEffect } from "react";

import QueryStringChecker from './Components/QueryStringChecker';

function PageLocationHourly() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      <QueryStringChecker />
    </main>
  );
}

export default PageLocationHourly;
