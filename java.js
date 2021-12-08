let encendido = document.getElementById('encendido')

       encendido.addEventListener("click",luz,true)
       uno=0

 function luz(){

       if(uno==0){

              let body=document.getElementById("body")
              body.style.background="black"
              body.style.color="white"
                     
              let so=document.getElementById("so")
              so.style.color="black"
              let sol=document.getElementById("sol")
              sol.style.color="black"
              let sole=document.getElementById("sole")
              sole.style.color="black"

              uno+=1
       }else{
              body.style.backgroundImage='url(https://media.istockphoto.com/vectors/grey-modern-seamless-pattern-with-3d-chamomiles-vector-id839421084?b=1&k=6&m=839421084&s=170667a&w=0&h=YFFQTeXYsPmukRV0hu7Qj92JI0RRUwYI0id6rQkrdFM=)'
              body.style.color="black"
              uno=0
       }

}
