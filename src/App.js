import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import Authentication from "./pages/authontication";
import { AuthProvider } from "./contexts/AuthContext";
import VideoMeetComponent from "./pages/videoMeet";
import History from "./pages/history";
import HomeComponent from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/history" element={<History />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/:url" element={<VideoMeetComponent />} />
      </Routes>
    </>
  );
}

export default App;
