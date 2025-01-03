# Image Search App

This is a React-based Image Search App that allows users to search for images from Pexels API. It includes features such as searching for images, displaying the results, switching between light and dark modes, and viewing image details in a modal. Additionally, there are smooth animations for loading states, button hover effects, and image scaling.

## Features

- **Search Images**: Search for images by entering a keyword.
- **Light/Dark Mode**: Toggle between light and dark themes for better user experience.
- **Image Display**: Displays images in a grid, with hover effects for scaling and shadow.
- **Image Modal**: Click on an image to view it in a modal with its details (title, description, and author).
- **Loading State**: Display a loading spinner while the images are being fetched.
- **Animations**: Smooth transitions and hover effects using Framer Motion.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Framer Motion**: Library for adding animations in React.
- **Pexels API**: API to fetch high-quality images based on search keywords.
- **React Spinners**: Library to show loading indicators (CircleLoader).

## Installation

To get started with the Image Search App, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/image-search-app.git
Navigate to the project directory:

bash
Copy code
cd image-search-app
Install the required dependencies:

bash
Copy code
npm install
Create a .env file at the root of the project and add your Pexels API key:

env
Copy code
REACT_APP_PEXELS_API_KEY=your-pexels-api-key-here
Run the application locally:

bash
Copy code
npm start
This will start the development server and open the app in your default browser.

Usage
Open the app in the browser.
Enter a keyword in the search bar to find images.
Browse through the image results.
Hover over the images to scale them.
Click on an image to open a modal with a larger version of the image and additional details such as title, description, and author.
Use the button to toggle between light and dark mode for a personalized theme.
