import React, { useEffect, useRef, useState } from "react";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [numPlayers, setNumPlayers] = useState(1);
  const [videoIds, setVideoIds] = useState([]);

  const parseYouTubeVideoId = (url) => {
    const regExp =
      /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const handleGeneratePlayers = () => {
    const id = parseYouTubeVideoId(videoUrl);
    if (id) {
      const ids = Array.from({ length: numPlayers }, () => id);
      setVideoIds(ids);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          YouTube Video Player Generator
        </h1>
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          min="1"
          max="50"
          placeholder="Number of Players"
          value={numPlayers}
          onChange={(e) => setNumPlayers(Number(e.target.value))}
          className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleGeneratePlayers}
          className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Generate Players
        </button>
      </div>

      <div className="mt-10 w-full flex flex-wrap justify-center gap-6">
        {videoIds.map((videoId, index) => (
          <LiteYouTubeEmbed key={index} videoId={videoId} delay={index * 8000 + Math.random() * 5000} />
        ))}
      </div>
    </div>
  );
}

function LiteYouTubeEmbed({ videoId, delay }) {
  const iframeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [userAgent, setUserAgent] = useState("");
  const [iframeStyles, setIframeStyles] = useState({});

  // List of different user-agent strings to simulate different devices
  const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 11; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
    "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
  ];

  useEffect(() => {
    // Randomly select a user-agent for each player
    const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
    setUserAgent(randomUserAgent);

    // Randomize the iframe size to simulate different devices
    const sizes = [
      { width: "360px", height: "202px" },
      { width: "640px", height: "360px" },
      { width: "854px", height: "480px" },
      { width: "1280px", height: "720px" },
    ];
    setIframeStyles(sizes[Math.floor(Math.random() * sizes.length)]);

    // Delayed autoplay for each video
    const timer = setTimeout(() => {
      setIsClicked(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="flex flex-col items-center">
      {isClicked ? (
        <iframe
          ref={iframeRef}
          style={iframeStyles}
          src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=1&autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`YouTube video player for ${videoId}`}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      ) : (
        <button
          onClick={() => setIsClicked(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Play Video
        </button>
      )}
    </div>
  );
}

export default App;
