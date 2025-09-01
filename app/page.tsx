export default function Home() {
  return (
    <div className="p-8 text-white">
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold mb-2">Welcome to AI Script Management</h1>
        <p className="text-lg text-gray-400">
          Your central hub for creating and managing content with the power of AI.
        </p>
      </header>

      <section className="bg-gray-800/50 p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-600 pb-2">How to Use This Project</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-3 leading-relaxed">
          <li>
            Navigate to the <strong className="text-white">Create New</strong> page using the sidebar to start a new script.
          </li>
          <li>
            Select your desired AI model, such as Gemini or ChatGPT.
          </li>
          <li>
            Write your detailed prompt or script request in the provided text area.
          </li>
          <li>
            Submit your request and wait for the AI-generated content to appear.
          </li>
          <li>
            Your work is automatically saved. Visit the <strong className="text-white">History</strong> page to review and manage all your past requests.
          </li>
        </ol>
      </section>

      <section className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-600 pb-2">Core Features</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>AI Model Integration:</strong> Connects to various AI APIs (e.g., Gemini, ChatGPT) to generate content.
          </li>
          <li>
            <strong>Script Management:</strong> Users can create, edit, and manage their script prompts and requests.
          </li>
          <li>
            <strong>History Tracking:</strong> Provides a complete history of all AI content generation requests and their responses.
          </li>
          <li>
            <strong>Content Organization:</strong> Allows for easy organization and retrieval of previously generated content.
          </li>
        </ul>
      </section>
    </div>
  );
}