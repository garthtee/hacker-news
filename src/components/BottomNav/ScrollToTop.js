import React from "react";
import {FaArrowUp} from "react-icons/fa";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const ScrollToTop = () => {
  const scrollToTop = () => {
    const position =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (position > 0) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <OverlayTrigger
      key="scroll-to-top-tooltip"
      placement="top"
      overlay={
        <Tooltip id="scroll-to-top-tooltip">
          Scroll to top
        </Tooltip>
      }
    >
      <FaArrowUp
        color="green"
        className="top-arrow"
        onClick={scrollToTop}
        size="2em"
      />
    </OverlayTrigger>
  );
};

export default ScrollToTop;
