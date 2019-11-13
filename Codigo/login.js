var ingresar = document.querySelector("#ingresar");
var clave = document.querySelector("#clave");
var nombre = document.querySelector("#usuario");

ingresar.addEventListener("click", (e)=>{
    e.preventDefault()
if(nombre.value ==="" || clave.value ===""){
    alert("todos los campos son obligatorios");
  return false;
    
}
else if(nombre.value.length > 19){

    alert("El nombre del usuario es demasiado largo")
      e.preventDefault();
      return false;

  }

  if (!/^([0-9])*$/.test(nombre)){
      alert("El valor  no es un número")
      e.preventDefault();
      return false;
  }

});

