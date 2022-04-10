import {Modal, Button} from "react-bootstrap";

type Props = {
  title: string;
  body: string;
  show: boolean;
  onClose: () => void;
  successAction: () => void;
  successActionText: string;
};

const GeneralModal = ({
  title,
  body,
  show,
  onClose,
  successAction,
  successActionText,
}: Props) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p dangerouslySetInnerHTML={{__html: body}} />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
      <Button variant="primary" onClick={successAction}>
        {successActionText}
      </Button>
    </Modal.Footer>
  </Modal>
);

export default GeneralModal;
