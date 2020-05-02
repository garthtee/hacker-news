import React, {
  useEffect,
  useState,
} from 'react';
import {FaArrowUp} from 'react-icons/fa';

const ScrollToTop = ({startingPoint = 200}) => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= startingPoint && !show) {
      setShow(true);
    } else if (window.pageYOffset < startingPoint && show) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return (() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });

  const scrollToTop = () => {
    const position = document.documentElement.scrollTop || document.body.scrollTop;
    if (position > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, position - position / 8);
    }
  }

  return show ? (
    <div className="scroll-to-top">
      <FaArrowUp 
        className="top-arrow"
        onClick={scrollToTop}
        size="2em"
      />
    </div>
  ) : null;
};

export default ScrollToTop;

