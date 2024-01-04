import React, { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import './BackToTop.scss';
import { useSelector } from 'react-redux';
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const theme = useSelector((state) => state.mode.theme);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 10) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return (
    <button
      data-theme={theme}
      className={`backtotop ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}>
      <FaAngleUp />
    </button>
  );
};

export default BackToTop;
