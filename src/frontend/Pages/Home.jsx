import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuBackground from "../assets/menu-background.png";
import classDropdownButton from "../assets/class-dropdown-button.png";
import classButton from "../assets/class-button.png";
import buttonImg from "../assets/button.png";
import witchHello from "../assets/witch-hello.png";
import startButton from "../assets/start-button.png";
import fence from "../assets/fence.png";
import friendsTextButton from "../assets/friends-text-button.png";
import progressTextButton from "../assets/progress-text-button.png";
import iconMail from "../assets/icon-mail.png";
import iconSettings from "../assets/icon-settings.png";
import iconUser from "../assets/icon-user.png";
import magicalChemWorldTitle from "../assets/magical-chem-world-title.png";

const Home = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState(7);
  const [selectedLesson, setSelectedLesson] = useState(2);
  const [showLessons, setShowLessons] = useState(false);

  const handleClassSelect = (classNumber) => {
    setSelectedClass(classNumber);
    setShowLessons(true);
  };

  const handleLessonSelect = (lessonNumber) => {
    setSelectedLesson(lessonNumber);
  };

  const handleStartClick = () => {
    // Navigate to game mode selection with selected lesson
    navigate('/game-mode', { state: { lesson: selectedLesson, class: selectedClass } });
  };

  const handleIconClick = (iconType) => {
    console.log(`${iconType} clicked - functionality to be implemented`);
  };

  const handleFriendsClick = () => {
    console.log("Friends clicked - functionality to be implemented");
  };

  const handleProgressClick = () => {
    console.log("Progress clicked - functionality to be implemented");
  };

  return (
    <div className="min-h-screen bg-purple-900 flex items-center justify-center">
      {/* Main Game Container - Fixed Size like board-game-illustration */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${menuBackground})`,
          width: '912px', // Same as board game width (COLS * SQUARE_SIZE = 8 * 114)
          height: '684px', // Same as board game height (ROWS * SQUARE_SIZE = 6 * 114)
        }}
      >
        {/* Top Right Icons - Vertical Stack */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button 
            onClick={() => handleIconClick('settings')}
            className="hover:scale-110 transition-transform"
          >
            <img src={iconSettings} alt="Settings" />
          </button>
          <button 
            onClick={() => handleIconClick('mail')}
            className="hover:scale-110 transition-transform"
          >
            <img src={iconMail} alt="Mail" />
          </button>
          <button 
            onClick={() => handleIconClick('user')}
            className="hover:scale-110 transition-transform"
          >
            <img src={iconUser} alt="User" />
          </button>
        </div>

        {/* Main Title */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <img 
            src={magicalChemWorldTitle} 
            alt="Magical Chemistry World"
          />
        </div>

        {/* Left Side - Class/Lesson Selection */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          {!showLessons ? (
            <>
              {/* Class Dropdown Header */}
              <div className="mb-4">
                <img 
                  src={classDropdownButton} 
                  alt="Khối"
                />
              </div>

              {/* Class Buttons */}
              <div className="space-y-3">
                {[7, 8, 9].map((classNum) => (
                  <button
                    key={classNum}
                    onClick={() => handleClassSelect(classNum)}
                    className="relative block hover:scale-105 transition-transform"
                  >
                    <img 
                      src={buttonImg} 
                      alt={`Lớp ${classNum}`}
                    />
                    {/* Class Number Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">
                        Lớp {classNum}
                      </span>
                    </div>
                    {/* Selection Circle */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <div 
                        className={`w-6 h-6 rounded-full border-2 border-black ${
                          selectedClass === classNum ? 'bg-red-500' : 'bg-yellow-400'
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Class Header with back arrow */}
              <div className="mb-4 relative">
                <img 
                  src={buttonImg} 
                  alt={`Lớp ${selectedClass}`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">
                    Lớp {selectedClass}
                  </span>
                </div>
                <button
                  onClick={() => setShowLessons(false)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-2xl font-bold hover:scale-110"
                >
                  &gt;
                </button>
              </div>

              {/* Lesson Buttons */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {[2, 3, 4, 5, 6, 7].map((lessonNum) => (
                  <button
                    key={lessonNum}
                    onClick={() => handleLessonSelect(lessonNum)}
                    className="relative block hover:scale-105 transition-transform"
                  >
                    <img 
                      src={buttonImg} 
                      alt={`Bài ${lessonNum}`}
                      className={selectedLesson === lessonNum ? 'opacity-100' : 'opacity-70'}
                    />
                    {/* Lesson Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">
                        Bài {lessonNum}
                      </span>
                    </div>
                    {/* Selection Circle */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <div 
                        className={`w-6 h-6 rounded-full border-2 border-black ${
                          selectedLesson === lessonNum ? 'bg-red-500' : 'bg-gray-700'
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Center - Witch Character */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src={witchHello} 
            alt="Witch Character"
            className="w-48 h-auto"
          />
        </div>

        {/* Bottom Center - Start Button */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={handleStartClick}
            className="block hover:scale-105 transition-transform"
            disabled={!showLessons}
            style={{ opacity: showLessons ? 1 : 0.5 }}
          >
            <img 
              src={startButton} 
              alt="Start Game"
              className="transform scale-75"
            />
          </button>
        </div>

        {/* Bottom Right - Single Fence with Both Buttons */}
        <div className="absolute bottom-0 right-0">
          {/* Static Fence Background */}
          <div className="relative">
            <img 
              src={fence} 
              alt="Menu Fence"
            />
            
            {/* Friends Button (Top Row) */}
            <button 
              onClick={handleFriendsClick}
              className="absolute top-8 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-transform"
            >
              <img 
                src={friendsTextButton} 
                alt="Bạn bè"
              />
            </button>

            {/* Progress Button (Bottom Row) */}
            <button 
              onClick={handleProgressClick}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-transform"
            >
              <img 
                src={progressTextButton} 
                alt="Tiến độ"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;