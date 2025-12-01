import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">DevProof Sandbox</h1>
      <p className="mt-4 text-gray-700">
        Select a task component to preview your feature.
      </p>

      <div className="mt-6">
        <Link
          to="/tasks/example"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          View Example Task
        </Link>
      </div>
    </div>
  );
}
