import { useQuery } from '@tanstack/react-query';

import 'src/styles/global.css';
import 'src/styles/font.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const data = useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      return await response.json();
    }
  });
  return <>SALAM{JSON.stringify(data)}</>;
};

export default App;
