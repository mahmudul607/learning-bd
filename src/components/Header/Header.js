import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css'

function ResponsiveExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="d-md-none" onClick={handleShow}>
        Launch
      </Button>

      <Alert variant="info" className="d-none">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="sm">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='main-navbar'>
            <ul>
              <li><a href="./Home">Home</a></li>
              <li><a href="./Course">Course</a></li>
              <li><a href="./Blogs">Blogs</a></li>
              <li><a href="./About Us">About Us</a></li>
            </ul>
          </div>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}

export default ResponsiveExample;