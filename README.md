<p align="center">
<a href="https://imgur.com/ii5Enhm"><img src="https://i.imgur.com/ii5Enhm.png" title="source: imgur.com" /></a>
</p>

<h1 align="center">AuthBridge</h1>

## Description

AuthBridge is a versatile authentication solution designed to simplify the user registration, login, and management process for applications. It supports traditional app-based authentication methods, Google sign-in, OTP verification, and user profile updates. Built with scalability and security in mind, AuthBridge aims to streamline authentication workflows for developers and provide a seamless experience for users.

### Key Features

- **User Registration and Login:** Easy-to-use API endpoints for user registration and login, supporting both standard and Google authentication methods.

- **OTP Verification:** Secure one-time password verification system for enhanced security during user registration and authentication processes.

- **User Management:** Facilitates the retrieval and updating of user information, ensuring flexibility in managing user data.

- **Security and Authentication:** Implements robust security measures and authentication protocols to safeguard user data and system access.

- **Swagger Documentation:** The API endpoints in AuthBridge are documented using Swagger, providing a clear and interactive interface for developers to explore and understand the available endpoints, request/response formats, and authentication requirements.

- **Dynamic Database Support:** AuthBridge can now dynamically connect to different databases based on application context, allowing for seamless integration across multiple applications with distinct databases.

## Dynamic Database Configuration

AuthBridge supports dynamic database connections, enabling it to serve multiple applications with separate databases using the same backend. This feature allows for a flexible and scalable authentication system that can adapt to various application requirements.

### Configuration Steps:

1. **Define Database Configurations:** Set up environment variables for each application's MongoDB URI, using a clear naming convention. For example, `ECOMMERCE_APP_MONGO_URI` for your eCommerce app and `SOCIAL_MEDIA_APP_MONGO_URI` for your social media app.

2. **Specify the Application Context:** When launching AuthBridge, specify the target application using the `APP_NAME` environment variable. This determines which database configuration to use.

### Example:

To start AuthBridge for the eCommerce application, write in .env :

```bash
$ APP_NAME=ecommerceApp
```
then :
```bash
$ npm run start
```
## Installation

To set up AuthBridge locally, follow these steps:

```bash
$ npm install
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- **Portfolio:** [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/nayefserag)

- **LinkedIn:** [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nayf-serag-70a3611b8)

