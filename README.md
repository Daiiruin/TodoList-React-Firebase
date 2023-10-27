#🔱Firebase CRUD To-Do List with ReactJS and TypeScript

This is a simple To-Do List application built using ReactJS, TypeScript, and Firebase. It demonstrates the fundamental CRUD (Create, Read, Update, Delete) operations with Firebase as the backend for real-time data synchronization.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## What does it look like ?

## Features

- Create, read, and delete tasks in a To-Do List. (UPDATE will be added soon)
- Real-time data synchronization with Firebase.
- TypeScript for strong typing and better development experience.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/firebase-react-ts-todolist.git
   ```
   
   ```bash
   cd firebase-react-ts-todolist
   ```
2. Install dependencies:

   ```bash
   pnpm install
   ```
   or
    ```bash
   yarn
   ```
3. Create a Firebase project:

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or use an existing one.
   - In the project settings, add a web app and copy the Firebase configuration.

4. Configure Firebase in the project:

   - Create a `.env.local` file in the project root.
   - Add your Firebase configuration:

   ```env
   REACT_APP_API_KEY=your-api-key
   REACT_APP_AUTH_DOMAIN=your-auth-domain
   REACT_APP_PROJECT_ID=your-project-id
   REACT_APP_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_APP_ID=your-app-id
   ```
5. Start the development server:
   ```bash
   pnpm run dev
   ```
   or
   ```bash
   yarn run dev
   ```
Now, the application should be running locally. Open your web browser and navigate to `http://localhost:[something]` to use the To-Do List application.

## Usage

- Create a new task by entering it in the input field and pressing "Add Task."
- Mark a task as complete by clicking the checkbox.
- (WILL BE ADDED SOON)Edit a task by clicking the "Edit" button.
- Delete a task by clicking the "Delete" button.

## Technologies

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
