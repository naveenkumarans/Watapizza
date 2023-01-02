// Reuse the solution created to dynamically create order form fields developed 
// in the previous sprint challenge

//Save the order details captured from the form in json-server using Axios API

const fetch="http://localhost:3002/order";
function saveOrderDetails(event){
    console.log(event.target);
    const formdata=new FormData(event.target);
    const formProp=Object.fromEntries(formdata);
    const promiseObj=axios.post(fetch,formProp);
    promiseObj.then((response)=>{
console.log(response);
console.log('employee info added')
    });
    console.log(formProp);
    event.preventDefault();
}



let orderItems=[];
let customerDetails=[];
let id=0;
let id1=0;
let arrayList= [];

function addOrder() {
    alert("Hello");
    console.log("addOrder called");

    
    let containerDiv = document.getElementById("orderItems");

    let eachOrderDiv = document.createElement('div');

    let categoryName = document.createElement('input');
    categoryName.setAttribute("type", "text");

    let itemName = document.createElement('input');
    itemName.setAttribute("type", "text");

    let price = document.createElement('input');
    price.setAttribute("type", "text");
    price.setAttribute("value", 0);
    price.setAttribute("id","price");

    let quantity = document.createElement('input');
    quantity.setAttribute("type", "text");
    quantity.setAttribute("value", 0);
    quantity.setAttribute("id","quantity");

    let amount = document.createElement('input');
    amount.setAttribute("type", "button");
    amount.setAttribute("id","amount");
    

//     let addorder = document.createElement('input');
//     addorder.setAttribute("type", "text");
//    addorder.setAttribute("id", "addorder");
   // addorder.setAttribute("value", "ADD");

    

    eachOrderDiv.appendChild(categoryName);
    eachOrderDiv.appendChild(itemName);
    eachOrderDiv.appendChild(price);
    eachOrderDiv.appendChild(quantity);
    eachOrderDiv.appendChild(amount);
   //eachOrderDiv.appendChild(addorder);



    let mybtn=document.createElement("button");
    let mybtnText=document.createTextNode("Save");
    mybtn.appendChild(mybtnText);
    mybtn.style.backgroundColor="white";
    mybtn.style.color="aqua";
    mybtn.onclick=saveItems;
    mybtn.onclick=saveOrder;
    mybtn.style.marginLeft="30px"
    eachOrderDiv.appendChild(mybtn);


    function saveItems(){

    let myprice=document.querySelector("#price").value;
    let myquantity=document.querySelector("#quantity").value;

    let a=myprice*myquantity;
    let id=0
    let item={
        id:id,
        
        price:myprice,
        quantity:myquantity,
        amount:a
    }
    orderItems.push(item);
    alert("menu items saved : "+ a);
    document.getElementById("total").value=a;

    console.log(orderItems);
    return false;
}
function saveOrder(event,totalAmount,total) {
    
    // let myprice=document.querySelector("#price").value;
    // let myquantity=document.querySelector("#quantity").value;

    let price=parseInt(event.currentTarget.parentElement.children[2].value);
    let quantity=parseInt(event.currentTarget.parentElement.children[3].value);

    let a=price*quantity;
    let id=0
    let item={
        id:id,
        price:price,
        quantity:quantity,
        amount:a
    }
    orderItems.push(item);
    console.log(orderItems);
    return false;
    alert("Ordered Successfully");
}


    
    quantity.addEventListener("blur",(event)=>{
    console.log(event.currentTarget.parentElement.children[2].value);
    console.log(event.currentTarget.parentElement.children[3].value);

    let price=parseInt(event.currentTarget.parentElement.children[2].value);
    let quantity=parseInt(event.currentTarget.parentElement.children[3].value);
    let totalAmount=price*quantity;
    console.log(totalAmount);
    event.currentTarget.parentElement.children[4].value=totalAmount;
    console.log(event.currentTarget.parentElement.children[4].value);
    console.log(document.getElementById("total").value); 
    document.getElementById("total").value=totalAmount+parseInt(document.getElementById("total").value);
    
});
containerDiv.appendChild(eachOrderDiv);
//addorder.addEventListener("click",addToArray);

}
function orderNow(){
       
     alert ("your total amount: "+document.getElementById('total').value);
 }
orderNow();


function addToArray(event){
    let details = {};
    let cat=event.currentTarget.parentElement.children[0].value;
    let item=event.currentTarget.parentElement.children[1].value;
    let pri=event.currentTarget.parentElement.children[2].value;
    let quant=event.currentTarget.parentElement.children[3].value;
    let amou=event.currentTarget.parentElement.children[4].value;
    details.categoryName=cat;
    details.itemName=item;
    details.price=pri;
    details.quantity=quant;
    details.totalAmount=amou;

arrayList.push(details);
for (const detail of arrayList) {
    console.log(detail)

}
return arrayList;
}
function validateForm(){
    let orderId=document.getElementById('orderid').value;
    let email=document.getElementById('emailId').value;
    let address=document.getElementById('addresslocal').value;
    if(orderId==""||email==""||address==""){
        alert("please enter detals");
        
    }else{
        alert("Order verified");
    
    }
}

function showInput(){
    document.getElementById('display1').innerHTML="order Id:"+document.getElementById('orderid').value;    
    document.getElementById('display2').innerHTML="order Name:"+document.getElementById('name').value;  
    document.getElementById('display3').innerHTML="Email:"+document.getElementById('emailId').value;
    document.getElementById('display4').innerHTML="Date:"+document.getElementById('orderDate').value;  
    document.getElementById('display5').innerHTML="Address:"+document.getElementById('addresslocal').value;  
    document.getElementById('display6').innerText="total:"+document.getElementById('total').value;  
    document.getElementById('display7').innerText="categoryName:"+document.getElementById('categoryName').value; 
    document.getElementById('display8').innerHTML="price:"+document.getElementById('price').value; 
    document.getElementById('display9').innerHTML="quantity:"+document.getElementById('quantity').value; 
    document.getElementById('orderDisplay1').innerHTML=JSON.stringify(arrayList,null,4);
    // document.getElementById('display10').innerHTML="total:"+document.getElementById('total').value; 
     
}
showInput();