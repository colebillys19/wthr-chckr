type ExternalLinkPropsType = {
  href: string;
  text: string;
};

function ExternalLink({ href, text }: ExternalLinkPropsType) {
  //

  return (
    <a
      href={href}
      className="underline hover:no-underline active:text-grey-a"
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
}

export default ExternalLink;
