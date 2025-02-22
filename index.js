            // Import required modules
const express = require('express');
const axios = require('axios');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Route to fetch a random image
app.get('/api/image/random', async (req, res) => {
    try {
        // Fetch a random image from Lorem Picsum
        const response = await axios.get('https://picsum.photos/200/300', {
            responseType: 'arraybuffer'
        });
        
        res.setHeader('Content-Type', 'image/jpeg');
        res.send(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch random image' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
