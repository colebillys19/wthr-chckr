import Skeleton from './Skeleton';
import ErrorComponent from './ErrorComponent';
import Display from './Display';

function DisplayContainer({ isLoading, error, data }: any) {
  //

  if (isLoading) {
    return <Skeleton />;
  }

  if (!!error) {
    return <ErrorComponent error={error} />;
  }

  return <Display data={data} />;
}

export default DisplayContainer;
