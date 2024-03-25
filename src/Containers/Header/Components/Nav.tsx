import {
  InternalLinkContent,
  InternalLinkText,
} from "../../../BaseComponents";
import LogoPlaceholder from "../../../svg/logoPlaceholder/LogoPlaceholder";

function Nav() {
  //

  return (
    <nav className="flex items-center gap-8">
      <InternalLinkContent href="/">
        <LogoPlaceholder />
      </InternalLinkContent>
      <div className="hidden gap-8 sm:flex">
        <InternalLinkText href="/cities">Cities</InternalLinkText>
        <InternalLinkText href="/news">News</InternalLinkText>
      </div>
    </nav>
  );
}

export default Nav;
