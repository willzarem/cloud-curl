# Node HTTP App

This is a simple Node.js application that makes an HTTP call to `https://curlmyip.org/` and returns the result as plain text.

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory:
   ```
   cd node-http-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the application, use the following command:
```
node src/index.js
```

This will make an HTTP GET request to `https://curlmyip.org/` and display your public IP address in plain text.

## Dependencies

This project uses the following dependencies:
- axios (or node-fetch) for making HTTP requests.