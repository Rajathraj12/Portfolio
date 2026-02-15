import { useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return <RouterProvider router={router} />;
}

export default App;
