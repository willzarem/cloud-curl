# Cloud Curl

This project is a simple Node.js application that fetches the public IP address of the user by making an HTTP GET request to "https://curlmyip.org/".

## Files

- `src/index.js`: Contains the main logic of the application.
- `Dockerfile`: Instructions to build a Docker image for the application.
- `package.json`: Configuration file for npm, listing dependencies and scripts.
- `package-lock.json`: Locks the versions of the dependencies installed in the project.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd cloud-curl
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   node src/index.js
   ```

## Docker Instructions

To build and run the application using Docker, follow these steps:

1. **Build the Docker image**:
   ```
   docker build -t cloud-curl .
   ```

2. **Run the Docker container**:
   ```
   docker run cloud-curl
   ```

## Deployment

This application can be deployed on Google Cloud Run. Make sure to follow the Google Cloud documentation for deploying Docker containers.