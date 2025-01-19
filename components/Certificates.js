import { useState } from "react";
import Modal from 'react-bootstrap/Modal';


const letters = [
  {
    img: "/img/letters/doc00353620210629083908.webp",
    alt: "Благодарственное письмо"
  },
  {
    img: "/img/letters/doc00353720210629084259_1.webp",
    alt: "Благодарственное письмо"
  },
  {
    img: "/img/letters/doc00353820210629084330_1.webp",
    alt: "Благодарственное письмо"
  },
  {
    img: "/img/letters/doc00353920210629084348.webp",
    alt: "Благодарственное письмо"
  },
]

const Certificates = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(letters[0])

  const handleClose = () => setShow(false);

  const handleShow = (letter) => {
    setModal(letter)
    setShow(true);
  }

  return (
    <>
      <section className="section_5 d-flex justify-content-center py-5 mb-4" id="certificates">
        <div className="disp_weight d-flex flex-column align-items-center">
          <h1 className="sec_header mb-4">Благодарственные письма</h1>
          <div className="container">
          <div className="row g-4 row-cols-2 row-cols-md-4 justify-content-center letters">
            {
              letters.map((letter) => 
                <img className="col" src={letter.img} alt={letter.alt} onClick={() => handleShow(letter)} key={letter.img}/>
              )
            }
          </div>
          </div>
        </div>
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modal.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modal.img} style={{width: 100+'%'}} alt=""/>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  ) 
}

export default Certificates