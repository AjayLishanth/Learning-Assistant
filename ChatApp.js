import React, { useState } from "react";

const ChatApp = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [transcription, setTranscription] = useState("");
  const [socket, setSocket] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const startTranscription = async () => {
    if (socket) socket.close();
    const newSocket = new WebSocket("ws://localhost:8000");
    setSocket(newSocket);
    newSocket.onopen = () => newSocket.send(JSON.stringify({ url: youtubeUrl }));
    newSocket.onmessage = (event) => setTranscription(event.data);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Chatbot with YouTube Transcription</h1>
      <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Transcribe YouTube Video
      </button>
      
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Enter YouTube Video URL</h2>
            <input
              type="text"
              placeholder="Paste YouTube Video URL"
              className="border p-2 rounded w-full mb-4"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
              <button onClick={startTranscription} className="bg-blue-500 text-white px-4 py-2 rounded">
                Start Transcription
              </button>
            </div>
          </div>
        </div>
      )}
      
      {transcription && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded w-3/4">
          <h2 className="text-lg font-semibold">Live Transcription:</h2>
          <p className="text-gray-700 mt-2">{transcription}</p>
        </div>
      )}
    </div>
  );
};

export default ChatApp;
