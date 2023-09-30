
// Modal Function
function openModal(){
    document.querySelector(".modal").classList.add("show-modal");
}
function closeModal(){
    document.querySelector(".modal").classList.remove("show-modal");
}


// Form Validation Function


function Validation(){
    let name = document.getElementById("name").value ;
    let pass = document.getElementById("pass").value ;
    let flag = 1;

    if(name == ""){
        document.getElementById("name-err").innerHTML = "*Please Enter Your Name";
        flag = 0;
    }
    else if(name.length < 3){
        document.getElementById("name-err").innerHTML = "*Please Enter Min 3 Characters";
        flag = 0;

    }
    else{
        document.getElementById("name-err").innerHTML = "";
        flag = 1;

    }
    if(pass == ""){
        document.getElementById("pass-err").innerHTML = "*Please Enter Your Password";
        flag = 0;
    }
    else if(pass.length < 3){
        document.getElementById("pass-err").innerHTML = "*Please Enter Min 3 Characters";
        flag = 0;

    }
    else{
        document.getElementById("pass-err").innerHTML = "";
      flag = 1;
    }

    if(flag){

        return true;
    }
    else{

        return false;
    }
}
