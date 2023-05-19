import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken || accessToken === '') {
        // User is not authenticated, redirect to login
        router.push('/auth/Login');
      } else {
        // User is authenticated, allow rendering of the component
        setIsLoading(false);
      }
    }, []);

    if (isLoading) {
      // Render a loading state or a placeholder while the authentication check is in progress
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
