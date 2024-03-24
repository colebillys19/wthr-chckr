import { InternalLink } from "../../../BaseComponents";
import LogoPlaceholder from "../../../svg/logoPlaceholder/LogoPlaceholder";

function Nav() {
  //

  return (
    <nav className="flex items-center gap-8">
      <InternalLink href="/" isTextLink={false}>
        <LogoPlaceholder />
      </InternalLink>
      <div className="hidden gap-8 sm:flex">
        <InternalLink href="/cities">
          Cities
        </InternalLink>
        <InternalLink href="/news">
          News
        </InternalLink>
      </div>
    </nav>
  );
}

export default Nav;
