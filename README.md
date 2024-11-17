# 🎬 YouTube Video Player Generator

A **React** application that allows you to dynamically generate multiple YouTube video players in your browser! 🚀 This project is built using **React** and **Tailwind CSS**, offering a modern, responsive, and user-friendly interface.

## 📌 Features

- **Input YouTube Video URL**: Paste any valid YouTube URL to play the video.
- **Multiple Video Players**: Choose the number of video players you want to generate (up to 10 players).
- **Auto Play**: All generated video players will automatically play the YouTube video.
- **Responsive Design**: Optimized for different screen sizes using Tailwind CSS.
- **Smooth UI & Interactive Elements**: Clean and vibrant interface with gradient backgrounds, animated buttons, and shadows.

## 🚀 Demo

Check out the live demo here:  
[YouTube Video Player Generator](https://youtube-video-player-generator-tanvirjahan001s-projects.vercel.app/)


## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for designing responsive layouts.
- **GitHub Pages**: For deploying the app.

## 📂 Project Structure

\`\`\`
📁 youtube-video-player
├── 📁 public
├── 📁 src
│   ├── 📄 App.js
│   ├── 📄 index.js
│   ├── 📄 index.css
│   └── 📄 App.css
├── 📄 .gitignore
├── 📄 package.json
└── 📄 README.md
\`\`\`

## 🔧 Installation & Setup

1. **Clone the repository**:
    \`\`\`bash
    git clone https://github.com/TanvirJahan001/YouTube-Video-Player-Generator.git
    cd YouTube-Video-Player-Generator
    \`\`\`

2. **Install dependencies**:
    \`\`\`bash
    npm install
    \`\`\`

3. **Run the app**:
    \`\`\`bash
    npm start
    \`\`\`

4. **Build for production**:
    \`\`\`bash
    npm run build
    \`\`\`

## 📦 How to Use

1. **Enter YouTube Video URL**: Paste a valid YouTube link in the input field.
2. **Choose Number of Players**: Use the number input to select how many players you want (up to 10).
3. **Click "Generate Players"**: Press the button to create video players that will automatically start playing the video.

## 💻 Deployment on GitHub Pages

To deploy the app on GitHub Pages:

1. **Install the GitHub Pages package**:
    \`\`\`bash
    npm install gh-pages --save-dev
    \`\`\`

2. **Update your \`package.json\`**:
    \`\`\`json
    "homepage": "https://TanvirJahan001.github.io/YouTube-Video-Player-Generator",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    \`\`\`

3. **Deploy the app**:
    \`\`\`bash
    npm run deploy
    \`\`\`

## 📜 License

This project is open-source and available under the **MIT License**.

## 🤝 Contributing

Contributions are welcome! If you find any bugs or have feature suggestions, please create an issue or submit a pull request.

## 📧 Contact

Feel free to reach out:
- GitHub: [TanvirJahan001](https://github.com/TanvirJahan001)
- Email: [your-email@example.com](mailto:your-email@example.com)

---

Thank you for using the YouTube Video Player Generator! 🎉
EOL

# Step 5: Stage and Commit Changes
echo "Staging and committing changes..."
git add .
git commit -m "Initial commit with README, .gitignore, and project setup"

# Step 6: Push to GitHub
echo "Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "All done! Your project is now on GitHub 🎉"
