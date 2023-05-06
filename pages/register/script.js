function registrar(){
const email=document.querySelector('#email').value
const senha=document.querySelector('#password').value
const ConfirmarSenha=document.querySelector('#cpassword').value




if (senha==ConfirmarSenha) {
console.log("as senhas são iguais")

    }else   {

console.log("as senha não estão iguais")
    }
    


}