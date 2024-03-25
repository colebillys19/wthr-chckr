import { InternalLinkText } from "../BaseComponents";

type TabNavPropsType = {
  location: string;
};

function TabNav({ location }: TabNavPropsType) {
  //

  return (
    <nav>
      <InternalLinkText href={`/location/current?location=${location}`}>
        Current
      </InternalLinkText>
      <span>&nbsp;</span>
      <InternalLinkText href={`/location/hourly?location=${location}`}>
        Hourly
      </InternalLinkText>
      <span>&nbsp;</span>
      <InternalLinkText href={`/location/daily?location=${location}`}>
        Daily
      </InternalLinkText>
    </nav>
  );
}

export default TabNav;
