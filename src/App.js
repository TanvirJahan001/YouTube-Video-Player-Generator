import React, { useEffect, useRef, useState } from "react";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [numPlayers, setNumPlayers] = useState(1);
  const [videoId, setVideoId] = useState("");
  const [players, setPlayers] = useState([]);

  const parseYouTubeVideoId = (url) => {
    const regExp =
      /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const handleGeneratePlayers = () => {
    const id = parseYouTubeVideoId(videoUrl);
    if (id) {
      setVideoId(id);
      setPlayers(Array.from({ length: numPlayers }, (_, index) => index));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          YouTube Video Player Generator
        </h1>
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="number"
          min="1"
          max="100"
          placeholder="Number of Players"
          value={numPlayers}
          onChange={(e) => setNumPlayers(Number(e.target.value))}
          className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          onClick={handleGeneratePlayers}
          className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Generate Players
        </button>
      </div>

      <div className="mt-10 w-full flex flex-wrap justify-center gap-4">
        {videoId &&
          players.map((_, index) => (
            <LiteYouTubeEmbed key={index} videoId={videoId} />
          ))}
      </div>
    </div>
  );
}

function LiteYouTubeEmbed({ videoId }) {
  const iframeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={iframeRef}
      className="w-80 h-44 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg overflow-hidden flex items-center justify-center transition duration-300 transform hover:scale-105"
    >
      {isVisible ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`YouTube video player for ${videoId}`}
        ></iframe>
      ) : (
        <p className="text-white font-bold">Loading...</p>
      )}
    </div>
  );
}

export default App;
