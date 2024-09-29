# Self Help Group App

## Overview

The Self Help Group (SHG) App is designed to facilitate communication, resource sharing, and support among members of self-help groups. This application provides a platform for users to connect, share experiences, and access valuable resources.

## Features

- **User Registration & Login**: Secure user authentication to ensure privacy and security.
- **Group Management**: Create and manage self-help groups.
- **Discussion Forum**: Engage in discussions and share experiences.
- **Resource Sharing**: Share documents, articles, and helpful links.
- **Notifications**: Stay updated with group activities and announcements.

## Tech Stack

- **Frontend**: React Native
- **Backend**: Node.js with Express
- **Database**: MongoDB (or your choice of database)

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- React Native CLI
- MongoDB (if using locally)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/self-help-group-app.git
   cd self-help-group-app/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your environment variables (create a `.env` file):
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/yourdbname
   ```

4. Start the server:
   ```bash
   node server.js
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   - For Android:
     ```bash
     npx react-native run-android
     ```
   - For iOS:
     ```bash
     npx react-native run-ios
     ```

## Usage

1. Register or log in to your account.
2. Create or join a self-help group.
3. Start engaging with other members in discussions and share resources.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
