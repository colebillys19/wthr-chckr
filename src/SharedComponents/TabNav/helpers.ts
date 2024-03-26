const sharedStyles = "w-28 py-2 text-center border";

const currentPathStyles = 'bg-text text-white border-text pointer-events-none';

const styleDict: { [key: string]: { [key: string]: string } } = {
  "/location/current": {
    Current: currentPathStyles,
    Hourly: "border-y-text border-r-text border-l-white hover:border-y-white",
    Daily: "border-y-text border-r-text border-l-white hover:border-white",
  },
  "/location/hourly": {
    Current: "border-y-text border-r-white border-l-text hover:border-white",
    Hourly: currentPathStyles,
    Daily: "border-y-text border-r-text border-l-white hover:border-white",
  },
  "/location/daily": {
    Current: "border-y-text border-r-white border-l-text hover:border-white",
    Hourly: "border-y-text border-r-white border-l-text hover:border-y-white",
    Daily: currentPathStyles,
  },
};

export const getButtonStyles = (currentPath: string, text: string) => {
  return `${sharedStyles} ${styleDict[currentPath][text]}`;
};
