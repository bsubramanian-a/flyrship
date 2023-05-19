export default async function handler(req, res) {
    try {
      const body = req.body;
      // console.log("body", body);
      const response = await fetch('http://192.168.18.134:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      // console.log("response from login api", response);
  
      if (response.ok) {
        const data = await response.json();

        // console.log("login data", data);
        // Handle successful form submission
        // For example, display a success message or redirect to another page
        return res.status(200).json({ data });
      } else {
        // Handle form submission error
        // For example, display an error message to the user
        const errorData = await response.json();
        return res.status(response.status).json({ error: errorData.message });
      }
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}  