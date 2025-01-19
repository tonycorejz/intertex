import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'


const servicesData = [
  {
    img: "/img/services/3.png",
    shortName: "Система пожарной сигнализации",
    fullName: "Система автоматической пожарной сигнализации (АПС) и системы оповещения и управления эвакуацией (СОУЭ) людей при пожаре",
    text: "Система АПС предусмотрена для предупреждения возникновения очагов пожара. Система СОУЭ — ряд устройств, предупреждающий и оповещающий окружающих о наличии опасности и необходимости эвакуации.",
  },
  {
    img: "/img/services/5.png",
    shortName: "Система охранной сигнализации",
    fullName: "Система охранной сигнализации ОС",
    text: "Охранная сигнализация представляет собой комплекс средств, направленный на обеспечение безопасности объектов.",
  },
  {
    img: "/img/services/4.png",
    shortName: "Система видеонаблюдения",
    fullName: "Система охранного телевидения (Видеонаблюдение)",
    text: "Назначение: наблюдение за периметром объекта, выполнение требований антитеррора, отслеживание перемещения людей на объекте, контроль присутствия в важных зонах, а также охранные причины применения.",
  },
  {
    img: "/img/services/1.png",
    shortName: "Система аварийного освещения",
    text: "Аварийное освещение предназначено для экстренной эвакуации людей при отказе основного освещения.",
  },
  {
    img: "/img/services/6.png",
    shortName: "СКУД",
    fullName: "Система контроля и управления доступом (СКУД)",
    text: "Система, способная контролировать, координировать и фиксировать любые передвижения персонала в границах разрешенной зоны, и поддерживающий соблюдение безопасности путем ограничения таких перемещений. Домофонная система — коммуникатор между посетителем и охраной в здании.",
  },
  {
    img: "/img/services/7.png",
    shortName: "Расчет пожарных рисков",
    text: "Расчёт производиться для предупреждения замечаний от МЧС, если у вас: Недостаточная ширина путей эвакуации Полное изменение функциональности объекта Безпроектное изменение планировок Недостаток количества эвакуационных выходов Отсутствие либо неполное оснащения систем пожарной автоматики",
  },
  {
    img: "/img/services/8.png",
    shortName: "Вентиляционные системы",
    text: "Вентиляционная система состоит из специального оборудования, которое обеспечивает доступ и вытяжку воздуха, его фильтрацию, а также регулирование температуры.",
  },
  {
    img: "/img/services/9.png",
    shortName: "Электрические сети ",
    text: "Комплекс профилактических работ для безопасной эксплуатации внутренних электрических сетей зданий: замена поврежденных участков внутренней электросети здания, замена неисправных светильников, штепсельных розеток, выключателей. А также замена пакетных переключателей, которые размещены в электрощитах снабжения и в вводно-распределительных устройствах.",
  },
  {
    img: "/img/services/10.png",
    shortName: "Сети связи ",
    fullName: "Сети связи (интернет, ТВ, радиофикация, электрочасофикация и т.д.)",
    text: "Слаботочные системы еще называют информационными, так как они обеспечивают перенос какой-либо информации людям.",
  },
  {
    img: "/img/services/11.png",
    shortName: "Генераторные подстанции",
    fullName: "Дизель – генераторные подстанции",
    text: "Дизель-генератор — это устройство, которое работает на топливе и производит электроэнергию, необходимую в момент отключения электросетей.",
  },
  {
    img: "/img/services/12.png",
    shortName: "Противопожарные двери",
    fullName: "Изготовление и монтаж противопожарных дверей",
    text: "Противопожарные двери — это двери специальной конструкции, которые препятствуют распространению пожара и проникновению дыма в помещение в течение определенного времени.",
  },
  {
    img: "/img/services/2.png",
    shortName: "Планы эвакуации",
    text: "Планы эвакуации разрабатывают специализированные организации, имеющие лицензию МЧС на данный вид работ",
  },
]

const Services = () => {

  const [modalOpen, setModalOpen] = useState(false)
  const [modal, setModal] = useState({
    img: "",
    shortName: "",
    fullName: "",
    text: ""
  })

  const openModal = (service) => {
    setModal({
      img: service.img,
      fullName: service.fullName || service.shortName,
      text: service.text
    })
    setModalOpen(true)
  }

  const colorSelector = (idx) => {
    let rowNumber = Math.ceil(idx/4)
    if(rowNumber % 4 == 0) return "sc_darkblue"
    if(rowNumber % 3 == 0) return "sc_red"
    if(rowNumber % 2 == 0) return "sc_purple"
    return "sc_blue"
  }

  return(
    <section className="section_1 d-flex justify-content-center mb-4" id="services">
      <div className="disp_weight d-flex flex-column align-items-center">
        <h1 className="sec_header">Наши услуги</h1>
        <p className="sec_heaser_p text text-center">В перечень услуг нашей организации входит проектирование (разработка ПСД), монтаж, комплексное обслуживание охранно-пожарных, слаботочных и инженерных сетей здания:</p>
        <div className="container w-100">
          <div className="row justify-content-center">
            {
              servicesData.map((service, idx) => 
              <div className="col-12 col-md-6 p-2" key={service.shortName + idx}>
                <div className={`service px-3 py-4 ${colorSelector(idx+1)}`}>
                  <img className="me-4" src={service.img} alt={service.shortName}/>
                  <div className="d-flex flex-column justify-content-center align-items-start text">
                    {service.shortName}
                    <a className="d-flex text sticky_href" role="button" onClick={() => openModal(service)}>Подробнее</a>
                  </div>
                </div>
              </div>
              )
            }
          </div>
        </div>
      </div>
      <Modal
        show={modalOpen}
        onHide={() => setModalOpen(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modal.fullName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modal.text}
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </section>

  )
}

export default Services