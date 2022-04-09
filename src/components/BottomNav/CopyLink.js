import * as React from "react";
import {FaLink} from "react-icons/fa";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const CopyLink = () => {
  const [show, setShow] = React.useState(false);

  return (
    <OverlayTrigger
      key="copy-link-tooltip"
      placement="top"
      overlay={<Tooltip id="copy-link-tooltip">Copy link</Tooltip>}
    >
      <FaLink
        color="orange"
        onMouseOver={() => setShow(!show)}
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
        }}
        size="2em"
      />
    </OverlayTrigger>
  );
};

export default CopyLink;
