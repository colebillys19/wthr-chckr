import { useContext } from 'react';

import { UserPrefersNoLocationContext } from '../../contexts/userPrefersNoLocationContext';

const useUpdateUserPrefersNoLocation = () => {
  const { setUserPrefersNoLocation } = useContext(UserPrefersNoLocationContext);

  const updateUserPrefersNoLocation = (value: boolean) => {
    setUserPrefersNoLocation(value);
    if (!value) {
      localStorage.removeItem("userPrefersNoLocation");
    } else {
      localStorage.setItem("userPrefersNoLocation", "true");
    }
  };

  return updateUserPrefersNoLocation;
};

export default useUpdateUserPrefersNoLocation;
