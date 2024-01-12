import Display from "./Display";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { HeaderDataType } from "./types";

type HeaderProps = {
  data: HeaderDataType;
  error: string;
  isLoading: boolean;
};

function Header({ data, error, isLoading }: HeaderProps) {
  if (isLoading) {
    return <Skeleton />;
  }

  return error ? <Error /> : <Display data={data} />;
}

export default Header;
