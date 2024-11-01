import { useLoginMutation } from 'src/api/login';

const LoginPage = () => {
  const { mutate } = useLoginMutation();

  const _onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ username: 'admin', password: 'password' });
  };

  return (
    <form onSubmit={_onSubmit}>
      <input />
      <input type="password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginPage;
