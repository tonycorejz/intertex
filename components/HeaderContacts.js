import Image from "next/image"

const HeaderContacts = () => {
  return(
    <div className="d-flex  align-items-center">
      <div className="d-flex flex-column me-5">
        <a className="d-flex head_contacts text" href="tel:+79787050101"><img src="/img/phone_icon.svg" className="me-3" alt="" />+7-978-705-01-01</a>
        <a className="d-flex head_contacts text" href="mailto:info@intertex-pb.ru"><img src="/img/mail_icon.svg" className="me-3" alt="" />info@intertex-pb.ru</a>
      </div>
      <div className="social" >
        <a href="https://wa.me/79787050101" className="me-1"><img src="/img/whatsap_icon.svg" alt="" /></a>
        <a href="viber://chat?number=%2B79787050101"><img src="/img/viber_icon.svg" alt="" /></a>
      </div>
    </div>
  )
}

export default HeaderContacts