import * as React from "react";
import {FaShareAltSquare} from "react-icons/fa";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {toast} from "react-toastify";

const ShareLink = () => {
  const [show, setShow] = React.useState(false);

  const onClick = async () => {
    try {
      await navigator.share({
        title: "Hacker News",
        text: "View the latest headlines!",
        url: window.location.href,
      });
    } catch (error) {
      toast(
        "Share not supported on this browser. Link copied to clipboard instead!",
        {
          toastId: "share-not-supported",
        }
      );
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <OverlayTrigger
      key="share-tooltip"
      placement="top"
      overlay={<Tooltip id="share-tooltip">Share</Tooltip>}
    >
      <FaShareAltSquare
        color="orange"
        onMouseOver={() => setShow(!show)}
        onClick={onClick}
        size="2em"
      />
    </OverlayTrigger>
  );
};

export default ShareLink;
