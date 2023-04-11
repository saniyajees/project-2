////ques1///////

let input_1 = +prompt("enter no 1");
let input_2 = +prompt("enter no 2");

 function parent_function(value_1){
     return function child_functon(value_2){
         console.log(value_1 + value_2);
 let a = 4;//scope error
    }
 }

 let function_1 = parent_function(input_1);
 let function_2 = function_1(input_2);





/////ques2//////

// function checkArray(arr, val) {
//     if (!arr.length) {
     
//       return false;
//     } else if (arr[0] === val) {
     
//       return true;
//     } else {
      
//       return checkArray(arr.slice(1), val);
//     }
//   }
//   const arr = [1, 2, 3, 4, 5, 6, 7];
//   const val = 2;
//   const result = checkArray(arr, val);
//   console.log(result); // Output: true
  
//   const val2 = 10;
//   const result2 = checkArray(arr, val2);
//   console.log(result2); // Output: false




////ques 3///

// let input_text = prompt("enter content:")
// let para = document.createElement("p");
//  let parent = document.getElementsByTagName("html")[0];
//  console.log(parent);
//  function para_work(string) {
//      para.innerHTML = string;
//      parent.appendChild(para);
//      parent.insertAdjacentElement("afterbegin", para);
// }

//  para_work(input_text)
      

//////ques 4//////
// localStorage.clear()
// let object_1 = {
//     name:"zunaisha",
//     age: 23,
//     cell_no:"0300187679",
//     height:"5'4",
//     cnic: "42101-2-332030",
//     language:"eng",
    
// }


// let object_2 = {
//     name:"sidra",
//     age: 17,
//     cell_no:"03217482999",
//     height:"4'3",
//     isla_marks:60,
//     eng_marks:90,
//     compu_marks:90
// }


// let object_3 = {
//     name:"saniya",
//     age: 22,
//     cell_no:"03339277272",
//     height:"5'6",
//     cnic: "42101-4-23239",
//     eng_marks:50,
//     urdu_marks:80,
//     maths_marks:60
// }

// function object_saving(key , value){
//     let new_object = JSON.stringify(value);
//     localStorage.setItem(key, new_object);
// }


// object_saving("data of zunaisha" , object_1);
// object_saving("data of sidra", object_2 );
// object_saving("data of saniya", object_3 );
// object_saving("data of zunaisha" , object_1);
// object_saving("data of sidra", object_2 );
// object_saving("data of saniya", object_3 );l


////ques 5///////


// function changeBackgroundColor(p, newColor) {
//     p.style.backgroundColor = newColor;
//    }
//    const newBg = document.getElementById('addhere');
//    changeBackgroundColor(newBg, 'orange');   

  
   // Questio 6
// function saveToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
//   const varObj = { name: 'soha', age: 22 };
//   saveToLocalStorage('varObj', varObj);

/////ques7///////

// function getObjectFromLocalStorage(key) {
//     const storedValue = localStorage.getItem(key);
//     try {
//       return JSON.parse(storedValue);
//     } catch (error) {
//       console.error(`Failed to parse the value for key "${key}"`, error);
//       return null;
//     }
//   }

//   const myObject = getObjectFromLocalStorage('myKey');
// console.log(myObject); // logs the retrieved object or null

//////ques8///////

// function saveToLocalStorage(obj) {
//     for (let prop in obj) {
//       localStorage.setItem(prop, JSON.stringify(obj[prop]));
//     }
    
//     let newObj = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       let key = localStorage.key(i);
//       newObj[key] = JSON.parse(localStorage.getItem(key));
//     }
    
//     return newObj;
//   }
  

