import LinkButton from "./LinkButton";
import ExternalLink from "./ExternalLink";

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative flex justify-between items-center w-full h-14 px-6">
      <ExternalLink href="https://billycole.dev/" text="billycole.dev" />
      <LinkButton handleClick={handleBackToTop} text="Back to top" />
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-b from-grey-b to-white"></div>
    </div>
  );
}

export default Footer;
