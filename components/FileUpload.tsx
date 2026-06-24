"use client";

import { useState } from "react";
import axios from "axios";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/upload-report`,
      formData
    );

    console.log(response.data);
    alert("Analysis Complete");
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Upload Employee Access Report
      </h2>

      <input
        type="file"
        accept=".csv,.xlsx"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-6 py-2 rounded mt-4"
      >
        Analyze Report
      </button>
    </div>
  );
}