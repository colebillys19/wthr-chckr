import { useContext } from 'react';

import { UnitTypeContext } from '../../contexts/unitTypeContext';

const useUpdateUnitType = () => {
  const { setUnitType } = useContext(UnitTypeContext);

  const updateUnitType = (unitType: string) => {
    setUnitType(unitType);
    if (unitType === "") {
      localStorage.removeItem("unitType");
    } else {
      localStorage.setItem("unitType", unitType);
    }
  };

  return updateUnitType;
};

export default useUpdateUnitType;
