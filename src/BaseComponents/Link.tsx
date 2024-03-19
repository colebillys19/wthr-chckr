type LinkPropsType = {
  href: string;
  text: string;
};

function Link({ href, text }: LinkPropsType) {
  //

  return (
    <a href={href} className="tracking-normal underline hover:no-underline active:text-grey-a">
      {text}
    </a>
  );
}

export default Link;
