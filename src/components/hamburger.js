import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './hamburger.css'; // App.css 파일을 생성하여 스타일을 정의합니다.

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="header">
        {/* 햄버거 버튼 */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      
      </div>

      {/* 메뉴 내용 */}
      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li>메뉴 항목 1</li>
            <li>메뉴 항목 2</li>
            <li>메뉴 항목 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;