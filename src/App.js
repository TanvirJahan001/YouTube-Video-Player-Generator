import React, { useState } from "react";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [playerCount, setPlayerCount] = useState(1);
  const [players, setPlayers] = useState([]);

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  // Handle Play Button Click
  const handlePlay = () => {
    const videoId = getYouTubeVideoId(videoUrl);
    if (videoId) {
      const newPlayers = Array.from({ length: playerCount }, (_, index) => ({
        id: index,
        videoId,
      }));
      setPlayers(newPlayers);
    } else {
      alert("Please enter a valid YouTube video URL");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 p-4">
      {/* Card Container */}
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          🎬 YouTube Video Player Generator
        </h1>

        {/* YouTube URL Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            YouTube Video URL:
          </label>
          <input
            type="text"
            placeholder="Paste YouTube URL here"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>

        {/* Number of Players Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Number of Video Players:
          </label>
          <input
            type="number"
            min="1"
            max="10"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={playerCount}
            onChange={(e) => setPlayerCount(e.target.value)}
          />
        </div>

        {/* Play Button */}
        <button
          onClick={handlePlay}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transition duration-300"
        >
          🚀 Generate Players
        </button>
      </div>

      {/* Video Players Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {players.map((player) => (
          <div
            key={player.id}
            className="aspect-w-16 aspect-h-9 w-full bg-black rounded-lg overflow-hidden shadow-xl"
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${player.videoId}?autoplay=1`}
              title={`YouTube Player ${player.id + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
