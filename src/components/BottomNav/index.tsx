import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";

const START = 200; // Show bottom nav when 200px from top

const ContainerStyled = styled(Container)`
  position: fixed;
  bottom: 0;
  cursor: pointer;
  margin-left: -12px;
  .col {
    padding: 10px 0;
    border-right: 1px solid grey;
    background-color: #38383d;
    filter: brightness(80%);
    &:hover {
      filter: brightness(100%);
    }
  }
  .col > * {
    // TODO: Propagate click handlers for
    // full button click
    width: 100%;
  }
`;

const BottomNav: React.FC<any> = ({children}) => {
  const [show, setShow] = React.useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= START && !show) {
      setShow(true);
    } else if (window.pageYOffset < START && show) {
      setShow(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  if (!show) {
    return null;
  }

  return (
    <ContainerStyled fluid>
      <Row>
        {children.map((child: React.ReactElement, index: number) => (
          <Col key={`bottom-nav-item-${index}`}>
            {React.cloneElement(child, {show, setShow})}
          </Col>
        ))}
      </Row>
    </ContainerStyled>
  );
};
export default BottomNav;
