import { useContext } from 'react';

import { TimeTypeContext } from '../../contexts/timeTypeContext';

const useUpdateTimeType = () => {
  const { setTimeType } = useContext(TimeTypeContext);

  const updateTimeType = (timeType: string) => {
    setTimeType(timeType);
    if (timeType === "") {
      localStorage.removeItem("timeType");
    } else {
      localStorage.setItem("timeType", timeType);
    }
  };

  return updateTimeType;
};

export default useUpdateTimeType;
