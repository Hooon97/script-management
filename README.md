# Script Management for AI Content Generation

## 1. Project Purpose

This project is a web application designed to streamline the pre-automation of creating various text-based content using Large Language Models (LLMs) like Google's Gemini and OpenAI's ChatGPT. It provides users with a centralized platform to manage their script-creation requests, track their history, and organize generated content efficiently. The goal is to enhance productivity for content creators, marketers, and developers who regularly leverage AI for content generation.

## 2. Core Features

*   **AI Model Integration:** Connects to various AI APIs (e.g., Gemini, ChatGPT) to generate content.
*   **Script Management:** Users can create, edit, and manage their script prompts and requests.
*   **History Tracking:** Provides a complete history of all AI content generation requests and their responses.
*   **Content Organization:** Allows for easy organization and retrieval of previously generated content.

## 3. Development Environment

This project is built with the following technologies:

*   **Node.js:** (Please specify your version, e.g., `v20.x.x` or newer recommended)
*   **Next.js:** `15.5.2`
*   **React:** `19.1.0`
*   **TypeScript:** `^5`
*   **Tailwind CSS:** `^4`
*   **ESLint:** `^9`

## 4. Getting Started

### Prerequisites

Make sure you have a recent LTS version of Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1.  Clone the repository (or download the source code).
2.  Navigate to the project's root directory.
3.  Install the required dependencies using npm:
    ```bash
    npm install
    ```

### Running the Application

1.  **Development Mode:**
    To run the application in development mode with live reloading, execute the following command:
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:3000`.

2.  **Production Build:**
    To create a production-ready build of the application, run:
    ```bash
    npm run build
    ```

3.  **Running in Production:**
    To start the application in production mode (after building it), use:
    ```bash
    npm run start
    ```