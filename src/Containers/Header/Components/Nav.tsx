import { InternalLinkContent, InternalLinkText } from "../../../ComponentsBase";
import Logo from "../../../svg/logo/Logo";

function Nav() {
  //

  return (
    <nav className="flex items-center gap-8">
      <InternalLinkContent href="/">
        <Logo />
      </InternalLinkContent>
      <div className="hidden gap-8 sm:flex">
        <InternalLinkText href="/cities">Cities</InternalLinkText>
        <InternalLinkText href="/news">News</InternalLinkText>
      </div>
    </nav>
  );
}

export default Nav;
