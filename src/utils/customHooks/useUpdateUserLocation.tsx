import { useContext } from 'react';

import { UserLocationContext } from '../../contexts/userLocationContext';

const useUpdateUserLocation = () => {
  const { setUserLocation } = useContext(UserLocationContext);

  const updateUserLocation = (userLocation: string) => {
    setUserLocation(userLocation);
    if (userLocation === "") {
      localStorage.removeItem("userLocation");
    } else {
      localStorage.setItem("userLocation", userLocation);
    }
  };

  return updateUserLocation;
};

export default useUpdateUserLocation;
