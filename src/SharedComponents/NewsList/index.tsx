import Skeleton from './Skeleton';
import ErrorComponent from './ErrorComponent';
import List from './List';

function NewsList({ isLoading, error, data }: any) {
  //

  if (isLoading) {
    return <Skeleton />;
  }

  if (!!error) {
    return <ErrorComponent error={error} />;
  }

  return <List data={data} />;
}

export default NewsList;
