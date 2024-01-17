import { CSSProperties } from 'react';

import { useGlobalState } from '../../../context';
import RecentLocationDisplay from './RecentLocationDisplay';

const tempStyles: CSSProperties = {
  display: "flex",
};


function RecentLocations() {
  const { recentLocations } = useGlobalState();

  if (!recentLocations.length) {
    return null;
  }

  return (
    <>
      <br />
      <h3>recently viewed</h3>
      <br />
      <ul style={tempStyles}>
        {recentLocations.map(location => (
          <li key={location}>
            <RecentLocationDisplay location={location} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default RecentLocations;
