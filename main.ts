const menu = document.querySelector<HTMLDivElement>(".menu-hamburguesa");
const lista = document.querySelector<HTMLDivElement>(".lista");
const enlaces = document.querySelectorAll<HTMLAnchorElement>(".lista a")

if (menu && lista) {
  menu.addEventListener("click", () => {
    if (lista.classList.contains("active")) {
      lista.classList.remove("active");
      lista.classList.add("invisible");
      console.log(lista.className)

    } else {
      lista.classList.remove("invisible");
      lista.classList.add("active");
    }
    enlaces.forEach(enlace =>{
      enlace.addEventListener("click", ()=>{
        console.log(lista.className)
        if(lista.classList.contains("active")){
             lista.classList.remove("active")
             lista.classList.add("invisible")
        }else{
           console.log(lista.className)
        }
      })
    })
  });


}
