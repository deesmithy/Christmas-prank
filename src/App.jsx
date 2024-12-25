import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1 className="christmas-message">Merry Christmas, Boys!</h1>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=uYCUNULp868?autoplay=1&mute=1&start=20"
          title="Christmas Surprise"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default App
