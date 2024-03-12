import Skeleton from './Skeleton';
import ErrorComponent from './ErrorComponent';
import Display from './Display';

function DisplayContainer({ isLoading, error, data }: any) {
  //

  if (isLoading) {
    return <Skeleton />;
  }

  return !!error ? <ErrorComponent error={error} /> : <Display data={data} />;
}

export default DisplayContainer;
