import Skeleton from './Skeleton';
import ErrorComponent from './ErrorComponent';
import List from './List';

type NewsListPropsType = {
  isLoading: boolean;
  error: string;
  data: any;
};

function NewsList({ isLoading, error, data }: NewsListPropsType) {
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
