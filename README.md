# Portfolio - Harsh Parmar

## Project Overview

This project is a personal portfolio website showcasing the work, skills, and experiences of Harsh Parmar, a Computer Science graduate. The site serves as an interactive platform where visitors can explore educational background, professional experience, technical projects, and certifications. A key feature is an AI-powered chatbot named PortPal, which provides contextual information about Harsh based on his resume data, enabling dynamic user interactions and personalized responses.

The website demonstrates modern web development practices, combining static content with server-side API functionality for real-time conversational features.

## Features

- **Interactive Hero Section**: Introduction with call-to-action buttons linking to resume and social profiles
- **AI-Powered Chatbot (PortPal)**: Conversational interface using Azure OpenAI to answer questions about the portfolio owner's background and experience
- **Responsive Navigation**: Mobile-friendly header with smooth scrolling to different sections
- **Education Section**: Details of academic background and relevant coursework
- **Work Experience**: Timeline of professional roles with descriptions of responsibilities and achievements
- **Projects Showcase**: Grid layout linking to external project repositories and demos
- **Skills Overview**: Categorized list of technical skills and tools
- **Certifications Display**: Visual gallery of completed training and certifications
- **Skills Marquee**: Animated scrolling display of technology logos
- **Social Media Integration**: Direct links to LinkedIn, GitHub, and Instagram profiles

## Tech Stack

### Languages
- JavaScript

### Frameworks / Libraries
- Next.js 15.2.1
- React 19.0.0
- Tailwind CSS v4

### Tools / Platforms
- Azure OpenAI (for chatbot functionality)
- Vercel (deployment platform)
- ESLint (code linting)

## Project Architecture / Workflow

The application follows Next.js App Router architecture with a client-side React component handling the main page. Static content is rendered server-side, while the chatbot functionality uses a serverless API route that integrates with Azure OpenAI.

Data flow:
1. User loads the page, triggering static content rendering
2. Chatbot interactions send POST requests to `/api/route.js`
3. API route prepends resume context to user messages and queries Azure OpenAI
4. Responses are streamed back to update the chat interface in real-time

The chatbot maintains conversation state on the client side, with automatic scrolling and message history management.

## Setup & Installation

### Prerequisites
- Node.js (version compatible with Next.js 15)
- npm or yarn package manager
- Azure OpenAI account with API access

### Installation Steps
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables:
   - `AZURE_OPENAI_ENDPOINT`: Your Azure OpenAI endpoint URL
   - `AZURE_OPENAI_API_KEY`: Your Azure OpenAI API key
   - `AZURE_OPENAI_MODEL`: The model deployment name (e.g., "gpt-4")
4. Run the development server: `npm run dev`
5. Open http://localhost:3000 in your browser

### Building for Production
- `npm run build` to create an optimized production build
- `npm run start` to start the production server

## Usage

Navigate to the deployed website or local development server. The site is fully responsive and works on desktop and mobile devices.

- Use the navigation menu to jump to different sections
- Interact with PortPal chatbot by typing questions about Harsh's background
- Click on project links to view external repositories or demos
- Access the resume PDF via the hero section button
- Connect via email or social media links

## Key Learnings / Concepts Demonstrated

- **Full-Stack Web Development**: Integration of frontend React components with backend API routes
- **AI Integration**: Implementation of conversational AI using cloud-based language models
- **Responsive Design**: Mobile-first approach with custom CSS and utility classes
- **State Management**: Client-side state handling for interactive UI components
- **API Design**: RESTful endpoint creation for serverless functions
- **Deployment**: Modern web application deployment on serverless platforms
- **User Experience**: Interactive elements and smooth animations for engagement</content>
