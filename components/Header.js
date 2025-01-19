import Head from 'next/head'
import MobileMenu from './MobileMenu'
import NavLinks from './NavLinks'
import HeaderContacts from './HeaderContacts'


const Header = ({children}) => {

  return(
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Интертех</title>
      </Head>
      <nav className="navbar">
        <div className="container-fluid disp_weight d-flex justify-content-center justify-content-md-between">
          <a className="navbar-brand mb-2 mb-md-0"><img src="/img/Logo.png" alt="" /></a>
          <HeaderContacts/>
        </div>
      </nav>

      <div className="d-flex nav_cont sticky-top ">
        
        <ul className="nav text container-fluid justify-content-between disp_weight desktop">
          <NavLinks />
        </ul>
        <MobileMenu/>
      </div>

      {children}

      <footer className="d-flex flex-column text align-items-center pt-5">
          <div className="disp_weight row g-5 justify-content-between w-100 mb-5">
            <div className="c-col col me-3 align-items-center align-items-sm-start">
              <img src="/img/Logo_w.png" alt="" className="logo mb-5"/>
              <p>
                Пожарная безопасность
              </p>
              <p>Комлексное обслуживание<br/>инженерных сетей</p>
              <p>Проектирование, монтаж</p>
            </div>
            <div className="c-col col align-items-center align-items-sm-start justify-content-end me-3">
              <p>Меню:</p>
              <NavLinks/>
            </div>
            <div className="col d-flex flex-column justify-content-end align-items-end">
              <div className="cont_txt"><p className="">г.Севастополь, ул.Щербака, 2 Офис 2</p><img src="/img/contact_icons/place.svg" alt=""/></div>
              <div className="cont_txt"><a href="tel:+79787050101" className="text-nowrap">+7-978-705-01-01 </a><img src="/img/contact_icons/mail.svg" alt=""/></div>
              <div className="cont_txt"><a href="mailto:info@intertex-pb.ru" className="text-nowrap">info@intertex-pb.ru</a><img src="/img/contact_icons/tel.svg" alt=""/></div>
            </div>
          </div>
          <div className='disp_weight text-center w-100 d-flex justify-content-center'>
              <p>Юридический адрес	630039 г. Новосибирск, улица Воинская, 63, офис 405</p>
          </div>
      </footer>
    </>
  )
}

export default Header