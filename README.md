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
**Solution**: Implemented efficient caching with React Query and optimized API calls to stay within GitHub's rate limits.

### Challenge: Handling Large Data Sets
**Solution**: Implemented pagination for repositories (up to 300) to balance between comprehensive data and performance.

### Challenge: Responsive Design for Data Visualizations
**Solution**: Created adaptive charts that resize and reformat based on viewport size for optimal viewing on all devices.

### Challenge: Type Safety with External API
**Solution**: Defined comprehensive TypeScript interfaces for GitHub API responses to ensure type safety throughout the application.

## Future Enhancements

- OAuth integration for authenticated requests to increase API rate limits
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
