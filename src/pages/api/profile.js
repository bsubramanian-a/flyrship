export default async (req, res) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      
      // Make a request to your Nest.js API to fetch the user profile
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
  
      // Return the user profile data as the API response
      res.status(response.status).json(data);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error fetching user profile:', error);
      res.status(error.response.status || 500).json({ error: 'Failed to fetch user profile.' });
    }
};