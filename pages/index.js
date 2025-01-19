  
  import Certificates from '../components/Certificates'
  import Form from '../components/Form'
  import Header from '../components/Header'
  import Services from '../components/Services'
  import SubmitButton from '../components/SubmitButton'
  import { useState } from 'react'
  import Modal from 'react-bootstrap/Modal';

  export default function Home() {
    const [formOpen, setformOpen] = useState(false)

    return (
      <Header>
        <section className='slider_container d-flex justify-content-center mb-4' id="main">
          <div className='slider_back' />
          <div className='disp_weight row justify-content-between' >
            <div className="sl_left d-flex flex-md-column align-items-start justify-content-center">
              <h1 className='sec_header mb-3 mt-3 mt-md-0'>Мы осуществляем комплексное обслуживание объекта</h1>
            </div>
            <div className="sl_right d-flex align-items-center justify-content-center">
              <img src="/img/sl_1_img.png" alt="" />
            </div>
            <div className='sl_bottom' >
              <SubmitButton onClick={() => setformOpen(true)}/>
            </div>
          </div>
        </section>

        <Services />

        <section className="section_2 d-flex justify-content-center mb-4">
          <div className="disp_weight d-flex flex-column align-items-center">
            <h1 className="sec_header mb-4">У вас есть вопрос?<br/>Задайте его абсолютно бесплатно</h1>
            <div className="w-100 d-flex justify-content-center justify-content-md-between align-items-center">
              <div className='w-50 d-none d-md-flex justify-content-center'>
                <img className='question_img' src="/img/conversation.png" alt=""/>
              </div>           
              <div className='cont_left text d-flex flex-column align-items-center  mb-4 mb-md-0'>
                <Form id={1}/>
              </div>
            </div>
            
          </div>
        </section>
        <section className="section_3 d-flex justify-content-center py-5 mb-4" id="advantages">
          <div className="disp_weight d-flex flex-column align-items-center">
            <h1 className="sec_header">Почему мы?</h1>
            <div className="c_cards row justify-content-center w-100">
              <div className='flex-column c-cards_text text col-12 col-md-4 col-xl-4'>
                <div className="c_card mb-4"><img src="/img/cards/1.svg" alt=""/></div>
                <p>Лучшие цены</p>
              </div>
              <div className='flex-column c-cards_text text col-12 col-md-4 col-xl-4'>
                <div className="c_card mb-4"><img src="/img/cards/3.svg" alt=""/></div>
                <p>Высококвалифи-<br/>цированные<br/>специалисты</p>
              </div>
              <div className='flex-column c-cards_text text col-12 col-md-4 col-xl-4'>
                <div className="c_card mb-4"><img src="/img/cards/4.svg" alt=""/></div>
                <p>Наличие лицензции МЧС<br/>для выполнения<br/>работ</p>
              </div>
            </div>
          </div>
        </section>
        <section className="d-flex justify-content-center" id="objects">
          <div className="disp_weight d-flex flex-column align-items-center">
            <h1 className="sec_header">Наши объекты</h1>
            <p className="sec_heaser_p text text-center"></p>
            <img className="w-100" src="/img/objects.png" alt=""/>
          </div>
        </section>
        <Certificates/>
        <section className="section_6 d-flex justify-content-center" id="contacts">
          <div className="disp_weight d-flex flex-column align-items-center">
            <h1 className="sec_header mb-4">Контакты</h1>
            <div className="d-flex flex-column align-items-center flex-md-row w-100 justify-content-between">
              <div className="cont_left text d-flex flex-column mb-4 mb-md-0"><strong>У вас есть вопрос?</strong>Оставьте свои контактные данные и мы вам перезвоним.<br/><br/>
                <Form id={2}/>
              </div>
              <div className="map" style={{position:"relative",overflow:"hidden"}}><a href="https://yandex.ru/maps/959/sevastopol/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"}}>Севастополь</a><a href="https://yandex.ru/maps/959/sevastopol/house/ulitsa_shcherbaka_2/Z0oYcwZlSUEAQFpufXpwcHllYw==/?ll=33.515047%2C44.611567&utm_medium=mapframe&utm_source=maps&z=16.94" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"}}>Улица Щербака, 2 — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUeaShZ3D" width="100%" height="100%" frameBorder="1" allowFullScreen={true} style={{position:"relative",border:"none",borderRadius: "20px"}}></iframe></div>
            </div>
          </div>
        </section>
      
        <Modal
          show={formOpen}
          onHide={() => setformOpen(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Оставьте заявку</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id={3}/>
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </Header>
    )
  }
