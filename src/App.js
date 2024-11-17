import React, { useState } from "react";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState("");

  const parseYouTubeVideoId = (url) => {
    const regExp =
      /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const handleGeneratePlayer = () => {
    const id = parseYouTubeVideoId(videoUrl);
    if (id) {
      setVideoId(id);
    } else {
      alert("Please enter a valid YouTube URL");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          YouTube Video Player
        </h1>
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          onClick={handleGeneratePlayer}
          className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Generate Player
        </button>
      </div>

      {videoId && (
        <div className="mt-10 w-full flex justify-center">
          <YouTubeEmbed videoId={videoId} />
        </div>
      )}
    </div>
  );
}

function YouTubeEmbed({ videoId }) {
  return (
    <div className="w-96 h-56 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`YouTube video player for ${videoId}`}
      ></iframe>
    </div>
  );
}

export default App;
