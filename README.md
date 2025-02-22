# Random Image API

## Overview
This project is a simple Node.js and Express.js-based API that serves random images using a third-party image provider (Lorem Picsum).

## Features
- Fetches a random image from an external API.
- Serves the image via the `/api/image/random` endpoint.
- Uses Express.js for handling HTTP requests.
- Utilizes Axios to retrieve images.

## Installation
1. Clone this repository:
   ```sh
   git clone <https://github.com/Vishnnsingh/Day-5-Random-image-API>
   ```
2. Navigate to the project directory:
   ```sh
   cd day_5_random_image_api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
### Start the server
- In production mode:
  ```sh
  npm start
  ```
- In development mode (with auto-restart using nodemon):
  ```sh
  npm run dev
  ```

### API Endpoint
- `GET /api/image/random` - Fetches a random image from Lorem Picsum.

## Dependencies
- [Express.js](https://expressjs.com/) - Web framework for Node.js.
- [Axios](https://axios-http.com/) - Promise-based HTTP client.

## Testing
- Use Postman or a browser to test the endpoint:
  ```sh
  http://localhost:5000/api/image/random
  ```

## License
This project is licensed under the ISC License.

