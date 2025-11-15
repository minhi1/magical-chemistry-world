import React from "react";
import { Link } from "react-router-dom";
import titleImg from "../assets/title.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6 py-12">
        {/* Main Title */}
        <div className="mb-8">
          <img 
            src={titleImg} 
            alt="Magical Chemistry World" 
            className="mx-auto mb-6 max-w-2xl w-full h-auto"
          />
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Hành trình khám phá hóa học kỳ diệu
          </p>
        </div>

        {/* Description */}
        <div className="bg-gray-900 bg-opacity-70 rounded-2xl p-8 mb-8 border-2 border-yellow-500">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            🧙‍♂️ Chào mừng đến với thế giới hóa học ma thuật!
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Khám phá những bí mật của hóa học thông qua một cuộc phiêu lưu đầy thú vị 
            trong thế giới Harry Potter. Trả lời câu hỏi, thu thập token và trở thành 
            nhà phù thủy hóa học giỏi nhất!
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="text-left">
              <h3 className="text-yellow-300 font-semibold mb-2">🎯 Tính năng nổi bật:</h3>
              <ul className="text-gray-300 space-y-1">
                <li>📚 6 bài học hóa học lớp 7</li>
                <li>🎲 Trò chơi board game tương tác</li>
                <li>🏆 Hệ thống điểm thưởng token</li>
                <li>🎭 Chủ đề Harry Potter hấp dẫn</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-yellow-300 font-semibold mb-2">📖 Nội dung học:</h3>
              <ul className="text-gray-300 space-y-1">
                <li>⚛️ Nguyên tử và cấu tạo</li>
                <li>🧪 Nguyên tố hóa học</li>
                <li>📊 Bảng tuần hoàn</li>
                <li>🔗 Liên kết hóa học</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <Link
            to="/game/chemistry"
            className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-gray-900 font-bold py-4 px-8 rounded-xl text-2xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            🚀 Bắt đầu trò chơi
          </Link>
          
          <p className="text-gray-400 text-sm">
            Không cần đăng ký - Chơi ngay lập tức!
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 Magical Chemistry World - Học hóa học một cách thú vị</p>
        </div>
      </div>
    </div>
  );
};

export default Home;