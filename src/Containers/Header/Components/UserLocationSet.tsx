import { CSSProperties } from 'react';

import { useGlobalState } from '../../../context';
import { useUpdateUserLocation } from '../../../utils/customHooks';

const tempStyles: CSSProperties = { display: 'flex' };

type UserLocationEnabledSetProps = {
  userLocation: string;
};

function UserLocationEnabledSet({ userLocation }: UserLocationEnabledSetProps ) {
  const { setActiveModal } = useGlobalState();

  const updateUserLocation = useUpdateUserLocation();

  const handleChangeLocation = () => {
    updateUserLocation('');
    setActiveModal('setLocation');
  };

  return (
    <div style={tempStyles}>
      <div>{userLocation}</div>
      <button onClick={handleChangeLocation}>change location</button>
    </div>
  );
}

export default UserLocationEnabledSet;
