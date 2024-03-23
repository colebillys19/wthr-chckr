import { useContext } from 'react';

import { UserLocationNameContext } from '../../contexts/userLocationNameContext';

const useUpdateUserLocationName = () => {
  const { setUserLocationName } = useContext(UserLocationNameContext);

  const updateUserLocationName = (userLocationName: string) => {
    setUserLocationName(userLocationName);
    if (userLocationName === "") {
      localStorage.removeItem("userLocationName");
    } else {
      localStorage.setItem("userLocationName", userLocationName);
    }
  };

  return updateUserLocationName;
};

export default useUpdateUserLocationName;
