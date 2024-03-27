import { useEffect } from "react";

import QueryStringChecker from './Components/QueryStringChecker';

function PageLocationDaily() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <QueryStringChecker />
    </main>
  );
}

export default PageLocationDaily;
