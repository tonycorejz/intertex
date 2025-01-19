const SubmitButton = (props) => {
  return(
    <button className="subm_btn text" type={props.type || "button"}
      onClick={(v, a) => {
          if (props.href){
              Router.push(props.href);
          }
          else if (props.onClick){
              props.onClick(v, a);
          }
      }}
    >
      Оставить заявку
      <svg className="ms-2" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 0C5.82029 0 0 5.82029 0 13C0 20.1797 5.82029 26 13 26C20.1797 26 26 20.1797 26 13C26 5.82029 20.1797 0 13 0ZM16.012 13.5745L12.3557 17.2308C12.1971 17.3894 11.9891 17.4688 11.7812 17.4688C11.0639 17.4688 10.6935 16.5951 11.2068 16.0818L14.2885 13.0001L11.2068 9.91829C10.8894 9.60101 10.8894 9.08654 11.2068 8.76926C11.524 8.45198 12.0385 8.45198 12.3558 8.76926L16.012 12.4255C16.3293 12.7428 16.3293 13.2573 16.012 13.5745Z" fill="white" />
      </svg>
    </button>
  )
}

export default SubmitButton