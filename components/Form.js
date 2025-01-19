import SubmitButton from "./SubmitButton"
import { useState } from 'react'

const emptyInput = {
  name: "",
  contact: "",
}

const Form = ({id}) => {

  const [inputdata, setInputData] = useState(emptyInput)
  const [checked, setChecked] = useState(false)

  const mail = () => {
    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputdata)
    }).then((res) => {
      if (res.status == 200) {
        alert("Заявка отправлена!")
        setChecked(emptyInput)
      } else {
        alert("Заявка не отправлена, попробуйте ещё раз, либо напишите нам на почту")
      }
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    if(checked) {
      if(inputdata.name.trim() != "" && inputdata.contact.trim() != "")
        mail()
      else
        alert("Пожалуйста, заполните все поля.")
    } else
        alert("Пожалуйста, согласитесь с обработкой персональных данных.")
  }

  return(
    <form className="d-flex flex-wrap">
      <div className="form-col align-items-center">
        <div className="col-auto mb-3">
          <label className="sr-only text" htmlFor={"name"+id}>Имя</label>
          <input type="text" className="form-control mb-2" id={"name"+id} value={inputdata.name} onChange={(e) => setInputData({...inputdata, name: e.target.value})} placeholder="Ваше имя"/>
        </div>
        <div className="col-auto mb-3">
          <label className="sr-only text" htmlFor={"phoneOrEmail"+id}>Телефон или e-mail</label>
          <div className="input-group mb-2">
            
            <input type="text" className="form-control text" id={"phoneOrEmail"+id} value={inputdata.contact} onChange={(e) => setInputData({...inputdata, contact: e.target.value})} placeholder="Введите телефон или e-mail"/>
          </div>
        </div>
        <div className="col-auto my-4">
          <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="custom-control-input" id={"customCheck"+id} />
          <label className="custom-control-label text-start" role="button" htmlFor={"customCheck"+id}>Разрешаю обработку персональных данных</label>
        </div>
        <div className="col-auto">
          <SubmitButton type="submit" onClick={(e) => submitForm(e)}/>
        </div>
      </div>
    </form>
  )
}

export default Form