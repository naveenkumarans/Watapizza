// //Write code to get menu data from the json-server using axios API


// //Write code to load menu data using window onload event: getPromise is the promise result obained from Axios call
// window.onload = () => getPromise.then((response) => {

// });

// //Write code to filter the menu item from list
// const category = document.getElementById('category');
// category.addEventListener('change', function (e) {
//     findItems(category.value);
// });

// function findItems(categoryName) {

// }
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
  // Close the dropdown menu if the user clicks outside of it

function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = x;
  }

//Write code to get menu data from the json-server using axios API
// const fetch="http://localhost:3000/menu";
// let array=[];
// function fetchData(){
//    const menuPromise= axios.get(fetch);
//    menuPromise.then((response)=>{
//     response.data.forEach(element => {
// array.push(element);
//     });
   

//    });
// }
// // fetchData();


// //Write code to filter the menu item from list
// const category = document.getElementById('category');

// category.addEventListener('change', function (e) {
//     findItems(category.value);
// });

// function findItems(categoryName) {
// let filterMenu=array.filter((category)=>categoryName===category.category);
// return filterMenu;
   
// }