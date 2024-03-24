import { InternalLink } from "../BaseComponents";

type TabNavPropsType = {
  location: string;
};

function TabNav({ location }: TabNavPropsType) {
  //

  return (
    <nav>
      <InternalLink href={`/location/current?location=${location}`}>
        Current
      </InternalLink>
      <span>&nbsp;</span>
      <InternalLink href={`/location/hourly?location=${location}`}>
        Hourly
      </InternalLink>
      <span>&nbsp;</span>
      <InternalLink href={`/location/daily?location=${location}`}>
        Daily
      </InternalLink>
    </nav>
  );
}

export default TabNav;
