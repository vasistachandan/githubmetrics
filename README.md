# GitHub Metrics Dashboard

## Project Overview

GitHub Metrics Dashboard is a responsive web application that visualizes GitHub user activity and repository metrics. Built with React and TypeScript, this application provides an elegant and intuitive interface for exploring a GitHub user's repositories, commit history, and other relevant statistics.

## Features

- **GitHub User Search**: Search for any GitHub user or organization
- **User Profile Display**: View comprehensive GitHub user information
- **Repository Visualization**: Browse through user repositories with filtering options
- **Commit Activity Chart**: Visualize commit frequency over time
- **Repository Details**: Explore language usage, stars, and forks for each repository
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Fast Performance**: Efficient data fetching with pagination support (up to 300 repositories)
- **Interactive UI**: Modern, intuitive interface with smooth transitions
- **GitHub API Authentication**: Uses GitHub token for authenticated API requests to avoid rate limits

## Technical Stack

### Frontend
- **React 18** with **TypeScript** - For building the UI components
- **Tailwind CSS** - For styling and responsive design
- **ShadCN UI** - Component library for consistent UI elements
- **TanStack React Query** - For efficient data fetching and caching
- **Recharts** - For data visualization and charting
- **Lucide React** - For icon components
- **Wouter** - For lightweight routing

### Backend
- **Express.js** - For API endpoints and server
- **Axios** - For making API requests to GitHub
- **Drizzle ORM** - For data modeling (schema definitions)

### Development & Tooling
- **Vite** - For fast development and optimized build
- **TypeScript** - For type safety throughout the application
- **ESLint & Prettier** - For code quality and consistency

## Architecture

The application follows a modern component-based architecture:

```
├── client/                 # Frontend code
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── pages/          # Page components
│   │   ├── types/          # TypeScript type definitions
│   │   ├── App.tsx         # Main application component
│   │   └── main.tsx        # Entry point
└── server/                 # Backend code
    ├── index.ts            # Server entry point
    ├── routes.ts           # API route definitions
    └── storage.ts          # Data storage interface
```

## Implementation Details

### Data Fetching Strategy
The application leverages React Query for efficient data fetching, with the following optimizations:
- **Caching**: Data is cached to minimize API calls
- **Pagination**: Implemented for repositories (up to 300 repositories)
- **Error Handling**: Comprehensive error states with user-friendly messages
- **Loading States**: Skeleton loaders for improved user experience

### GitHub API Authentication
To overcome GitHub API rate limits:
- **Token-based Authentication**: All GitHub API requests use a GitHub personal access token
- **Increased Rate Limits**: Authentication increases the rate limit from 60 to 5,000 requests per hour
- **Security**: Token is stored as an environment variable on the server side
- **Common Headers**: Centralized authentication logic for all API endpoints

### Responsive Design
The UI is designed with a mobile-first approach using Tailwind CSS:
- **Breakpoints**: Optimized for mobile, tablet, and desktop
- **Flexible Layouts**: Grid and Flexbox for responsive content organization
- **Conditional Rendering**: Components adapt based on viewport size

### Performance Optimizations
- **Code Splitting**: Components are loaded on demand
- **Memoization**: React.memo and useMemo for expensive calculations
- **Virtualization**: For rendering large lists efficiently
- **API Pagination**: To handle large data sets without overwhelming the browser

## Usage Guide

1. **Home Page**: The landing page provides an overview of the application's features and a search bar to find GitHub users.

2. **Search**: Enter a GitHub username or organization name in the search bar and press Enter or click the search button.

3. **User Profile**: View comprehensive information about the user, including:
   - Profile statistics (followers, repositories, stars)
   - Repository list with details
   - Commit activity visualization

4. **Repository Exploration**: Click on any repository card to see more details or visit the repository on GitHub.

5. **View All Repositories**: For users or organizations with many repositories, click "View all repositories" to see the complete list.

## Project Challenges and Solutions

### Challenge: API Rate Limiting
**Solution**: 
- Implemented efficient caching with React Query to minimize API calls
- Added GitHub token authentication to increase API rate limits from 60 to 5,000 requests per hour
- Optimized API endpoints with proper error handling for rate limit issues

### Challenge: Handling Large Data Sets
**Solution**: Implemented pagination for repositories (up to 300) to balance between comprehensive data and performance.

### Challenge: Responsive Design for Data Visualizations
**Solution**: Created adaptive charts that resize and reformat based on viewport size for optimal viewing on all devices.

### Challenge: Type Safety with External API
**Solution**: Defined comprehensive TypeScript interfaces for GitHub API responses to ensure type safety throughout the application.

## Future Enhancements

- Additional data visualizations (language usage over time, contribution graphs)
- Repository comparison feature
- User activity timeline
- Dark/light theme toggle
- Export functionality for charts and data

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- GitHub API for providing the data
- React and TypeScript communities for excellent documentation
- ShadCN UI for the component library foundation
- All open-source libraries used in this project

---

Developed for Frontend Developer Role Assignment

## Deployment

There are several options for deploying this application:

### Option 1: Deploying on Replit

This project is already configured to work seamlessly on Replit:

1. Fork this Replit project to your account
2. Click the "Deploy" button in the Replit interface
3. Follow the prompts to configure your deployment
4. Your application will be available at your-repl-name.your-username.repl.co
5. Make sure to set the GITHUB_TOKEN environment variable in Replit Secrets

### Option 2: Deploying on Vercel

For a production-grade deployment:

1. Push your code to a GitHub repository
2. Connect your GitHub account to Vercel (vercel.com)
3. Import your repository in Vercel
4. Configure the build settings:
   - Build Command: Use the appropriate build command
   - Output Directory: `dist`
5. Set environment variables if needed (including GITHUB_TOKEN)
6. Deploy with the "Deploy" button

### Option 3: Manual Deployment

For manual deployment to any hosting service:

1. Build the application using the standard build command

2. The build process will create a `dist` directory with optimized static files

3. Deploy the contents of the `dist` directory to your web server

4. Configure your web server to serve the application:
   - For Nginx, configure it to serve static files and proxy API requests to the Express server
   - For Apache, use an .htaccess file to handle SPA routing

5. Start the Express server (for API endpoints) in production mode

### Environment Configuration

For production deployment, consider the following best practices:

1. Use environment variables for any configuration settings
2. Set up CORS properly for your domain
3. Consider implementing rate limiting for API endpoints
4. Add proper error logging for production environments
5. Set up HTTPS for secure communication
6. **Important**: Set the GITHUB_TOKEN environment variable to enable authenticated GitHub API requests

Note: This application uses GitHub's API with token authentication to increase rate limits. Make sure to set up your GitHub token in the environment variables.

## Local Development Setup

Follow these steps to set up the project locally for development:

### Prerequisites

- Node.js (v18 or later recommended)
- A package manager like npm or yarn
- Git
- GitHub personal access token (for API access)

### Step 1: Clone the Repository

Clone the GitHub repository to your local machine and navigate to the project directory:

```
git clone https://github.com/yourusername/github-metrics-dashboard.git
cd github-metrics-dashboard
```

### Step 2: Install Dependencies

Install all required packages for both frontend and backend using your preferred package manager.

This will install all dependencies listed in package.json, including:
- React and React DOM
- TypeScript
- Tailwind CSS
- ShadCN UI components
- React Query
- Express.js
- Drizzle ORM
- And other development dependencies

### Step 3: Environment Setup

Create a `.env` file in the root directory with the following variables:

```
PORT=5000
NODE_ENV=development
GITHUB_TOKEN=your_github_personal_access_token
```

Replace `your_github_personal_access_token` with a valid GitHub token to avoid API rate limiting.

### Step 4: Start Development Server

Run the development server command which will start both the Express backend and the Vite frontend server.

This will:
- Start the Express server on port 5000
- Start the Vite development server
- Enable hot module replacement for React components
- Watch for changes to backend files

### Step 5: Access the Application

Open your browser and navigate to:
```
http://localhost:5000
```

### Development Tips

1. **Browser Developer Tools**: Use React DevTools extension for debugging components
2. **API Testing**: Use tools like Postman or Thunder Client to test the Express endpoints directly
3. **TypeScript**: Take advantage of TypeScript's type checking
4. **React Query DevTools**: The application includes React Query DevTools in development mode for inspecting queries and cache
5. **Tailwind CSS**: Use the Tailwind CSS IntelliSense extension in VSCode for better developer experience
