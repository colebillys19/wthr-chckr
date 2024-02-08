import Skeleton from './Skeleton';
import Error from './Error';
import Display from './Display';

function DisplayContainer({ isLoading, error, data }: any) {
  //

  if (isLoading) {
    return <Skeleton />;
  }

  return !!error ? <Error error={error} /> : <Display data={data} />;
}

export default DisplayContainer;
