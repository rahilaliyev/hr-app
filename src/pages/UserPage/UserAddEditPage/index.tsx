import { useParams } from 'react-router-dom';

const UserAddEditPage = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default UserAddEditPage;
