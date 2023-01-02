//Write  password validation code here 
function setPasswordConfirmValidity() {
    let password1=document.getElementById('custPasword').value;
    let password2=document.getElementById('custConfirmPassword').value;
    if(password1!=password2||password1==' '&&password2==' '){
        alert('Please enter a valid password');
        return tr;
    }else{
        alert("password confirmed");
        return true;
    }

    
}


// Write code to submit customer details 
let fetch ="  http://localhost:3001/customers";
function submitCustomerDetail(event) {
   
    console.log("hi");
    let condition=setPasswordConfirmValidity();
    if(condition==true){
        console.log("Hello");
        event.preventDefault();
        const formdata=new FormData(event.target);
        const formProp=Object.fromEntries(formdata);
        axios.post(fetch,formProp);
        console.log(formdata);
        console.log(formProp);

    }
    else{
        return condition;
    }
   
}


