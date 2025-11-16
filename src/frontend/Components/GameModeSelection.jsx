import React from 'react';
import menuBackground from "../assets/menu-background.png";
import iconMail from "../assets/icon-mail.png";
import iconSettings from "../assets/icon-settings.png";
import iconUser from "../assets/icon-user.png";
import magicalChemWorldTitle from "../assets/magical-chem-world-title.png";
import witchHello from "../assets/witch-hello.png";

const GameModeSelection = ({ onSelectMode, onBack }) => {
  const handleIconClick = (iconType) => {
    console.log(`${iconType} clicked - functionality to be implemented`);
  };

  return (
    <div className="min-h-screen bg-purple-900 flex items-center justify-center">
      {/* Main Container - Same size as Home screen */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${menuBackground})`,
          width: '912px',
          height: '684px',
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

        {/* Main Content Box (Game Mode Selection) repositioned under title like reference image */}
        <div
          className="absolute left-1/2 z-20 shadow-2xl"
          style={{
            top: '150px', // push box below title instead of vertical center
            transform: 'translateX(-50%)',
            // width: '650px',
            // height: '400px',
            // backgroundColor: '#e3d6b8',
            // borderRadius: '100px',
            // padding: '50px 60px',
            // boxSizing: 'border-box'
            width: '580px',
            backgroundColor: '#e3d6b8',
            borderRadius: '90px',
            padding: '40px 60px',
            boxSizing: 'border-box',
            marginTop: '40px', // pushes the box slightly down from exact center
          }}
        >
          {/* Heading */}
          <h2
            className="text-center mb-14 text-gray-900"
            style={{
              fontFamily: 'Alfa Slab One, serif',
              fontSize: '42px',
              fontWeight: '400'
            }}
          >
            Chọn hình thức chơi
          </h2>

          {/* Buttons Wrapper */}
          <div className="flex flex-col items-center" style={{ gap: '50px' }}>
            {/* Single Player Row */}
            <div className="relative w-full flex items-center justify-center" style={{ minHeight: '90px' }}>
              <button
                onClick={() => onSelectMode('single')}
                style={{
                    width: '100%',
                    maxWidth: '420px',
                    backgroundColor: '#00d8f6',
                    border: '4px solid #000',
                    borderRadius: '100px',
                    padding: '26px 40px',
                    fontFamily: 'Alfa Slab One, serif',
                    fontSize: '30px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 0 #111'
                }}
                className="hover:scale-[1.02] transition-transform"
              >
                <span style={{ marginRight: '18px', fontSize: '34px' }}></span> Cá nhân
              </button>
            </div>

            {/* Group Mode Row */}
            <div className="relative w-full flex items-center justify-center" style={{ minHeight: '90px' }}>
              <button
                onClick={() => alert('Chế độ nhóm sẽ sớm có!')}
                style={{
                    width: '100%',
                    maxWidth: '420px',
                    backgroundColor: '#9be39b',
                    border: '4px solid #000',
                    borderRadius: '100px',
                    padding: '26px 40px',
                    fontFamily: 'Alfa Slab One, serif',
                    fontSize: '30px',
                    color: '#4d5960',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                className="hover:scale-[1.02] transition-transform"
              >
                Nhóm
              </button>
            </div>
          </div>
        </div>

        {/* Center - Witch Character (decorative, behind modal)
        <div className="absolute left-1/2 top-1/2 transform -translate-x-[220px] -translate-y-[180px] opacity-90">
          <img
            src={witchHello}
            alt="Witch Character"
            style={{ width: '210px', height: 'auto' }}
          />
        </div> */}

        {/* Back Button - Bottom Left */}
        <button
          onClick={onBack}
          className="absolute bottom-8 left-8 bg-gray-700 hover:bg-gray-600 text-white 
                     font-bold py-3 px-6 rounded-lg border-2 border-gray-500
                     transition-all duration-200 transform hover:scale-105 z-10"
        >
          ← Quay lại
        </button>
      </div>
    </div>
  );
};

export default GameModeSelection;
