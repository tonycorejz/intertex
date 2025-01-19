
const navLinks = [
  {
    title: "Главная",
    href: "#main",
  },
  {
    title: "Услуги",
    href: "#services",
  },
  {
    title: "Преимущества",
    href: "#advantages",
  },
  {
    title: "Наши объекты",
    href: "#objects",
  },
  {
    title: "Контакты",
    href: "#contacts",
  },
  
]


const NavLinks = () => {
  return(
    <>
      {/*Добавить класс active для активной ссылки */}
      {
        navLinks.map((link) =>
          <li className="nav-item" key={link.title}>
            <a className="nav-link" aria-current="page" href={link.href} >{link.title}</a>
          </li>
        )
      }
    </>
  )
}

export default NavLinks