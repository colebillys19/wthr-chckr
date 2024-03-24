type ExternalLinkPropsType = {
  href: string;
  text: string;
};

function ExternalLink({ href, text }: ExternalLinkPropsType) {
  //

  return (
    <a
      href={href}
      className="tracking-normal underline hover:no-underline active:text-grey-a"
    >
      {text}
    </a>
  );
}

export default ExternalLink;
