# Learning-Assistant
# ChatApp(Learning assistance)
ChatApp(Learning assistance) is a simple chat application built using React. It allows users to interact with an AI model (Gemini 1.5 Flash) by sending prompts and receiving responses in real-time. The application features a clean, dark-themed user interface and is designed to be responsive across different devices.

Features
Real-time Chat Interaction: Users can send messages and receive responses from the AI model.

Dark Theme: The app features a dark theme with white text for better readability.

Responsive Design: The app is designed to work seamlessly on both desktop and mobile devices.

Simple UI: The user interface is minimalistic and easy to navigate.

Technologies Used
React: A JavaScript library for building user interfaces.

Axios: A promise-based HTTP client for making API requests.

CSS: Custom CSS for styling the application.

Google Generative AI API: The app uses the Gemini 1.5 Flash model to generate responses.

Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy
cd ChatApp
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
Open the app in your browser:
The app should be running at http://localhost:3000.

Project Structure
public/: Contains the index.html file and other static assets like the favicon and manifest file.

src/: Contains the main application code.

App.js: The main application component.

ChatApp.js: The main chat component that handles user input and AI responses.

Components/: Contains reusable components like NavBar, Prompt, Botmsg, and Usermsg.

App.css: Contains the global styles for the application.

Usage
Enter a Prompt: Type your message in the input field at the bottom of the screen.

Send the Message: Click the send button (or press Enter) to send the message to the AI model.

View the Response: The AI's response will appear in the chat window.

Customization
API Key: If you want to use a different AI model or API, you can replace the API key and endpoint in the ChatApp.js file.

Styling: You can customize the app's appearance by modifying the App.css file.



Acknowledgments
Google Generative AI: For providing the Gemini 1.5 Flash model.

React Community: For the extensive documentation and resources available for React developers.


