export default async function handler(req, res) {
    try {
      const token = req.headers.authorization?.split(' ')[1];
  
      if (!token) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }
  
      // Extract the user state from the request body
      const user = req.body;
  
      // Make a request to your Nest.js API to update the user profile
      const response = await fetch('http://192.168.18.134:3000/user', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
  
      // Return the updated user profile data as the API response
      res.status(response.status).json(data);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error updating user profile:', error);
      res.status(error.response?.status || 500).json({ error: 'Failed to update user profile.' });
    }
}  