import { useState } from "react"
import NavLinks from "./NavLinks"
import HeaderContacts from "./HeaderContacts"

const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return(
    <>
      <div className="disp_weight container-fluid d-flex py-3 justify-content-between align-items-center mobile" >
        <a className="d-flex head_contacts text sticky_href" href="tel:+79787050101">Позвонить нам</a>
        <div className={`menu btn1 ${open ? "open" : ""}`} data-menu="1" onClick={() => setOpen(!open)}>
          <div className="icon-left"></div>
          <div className="icon-right"></div>
        </div>
      </div>
      <div className={`mobile_menu text flex-column align-items-center ${open ? "open" : ""}`}>
        <ul className="align-items-center justify-content-center disp_weight ps-0 mt-5">
          <NavLinks />
        </ul>
        <HeaderContacts />
      </div>
    </>
  )
}

export default MobileMenu