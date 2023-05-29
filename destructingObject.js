let user = {name : "Vikas Pandey",
   email : "vikaspandey42@gmail.com" ,
   mobile : 8756378577

}

//let{email , name } = user ;
//console.log(email , name )

let {name ,mobile ,...email} = user 

console.log(email) //{ email: 'vikaspandey42@gmail.com', mobile: 8756378577 }
