// //1+2
// function practiceOne(){
// return new Promise((resolve,reject)=>{

//     let time=new Date();
//     if(time.getHours()<12){
        
//         resolve ("good morning")
//     }

//     reject("good after non")



// });

// }
// practiceOne()
// .then((data)=>{console.log(data);})
// .catch((err)=>{console.log(err);})



//3+4
// function practice2(num1,num2){
// return new Promise((resolve,reject)=>{


//     if(num1%num2==0){

//       resolve("yes")
//     }

//     reject("no")

//     });


// }

// //5+6
// // practice2(4,2)
// // .then((data)=>{console.log(data);})
// // .catch((err)=>{console.log(err);})



// function practice3(num,numsArray){
//     return new Promise((resolve,reject)=>{

//         numsArray.forEach(item=>{

//             if(item==num){
        
//                 resolve("yes4")
//             }       
//     })
//     reject("no4")

// })

// }
// // practice3(4,[7,8,4,9,7])
// // .then((data)=>{console.log(data)})
// // .catch((err)=>{console.log(err)})


// // async function practice2Async(){

// //     try {
// //     await practice3(4,[7,8,4,9,7]).then((data)=>{console.log(data);})
// //     } 
// //     catch (error) {
// //         console.log(error);
// //     }
// // }


// // practice2Async();



// async function getData(){

//     try {
//     const respo=await fetch("https://api.jikan.moe/v4/anime")
       
//     return respo.json()
//     }
//        catch (error) {
       
       
//            console.log(error);
//        }
       
//        finally{
           
//        }
// }


// btn3.onclick=function printData(){

// getData()
// .then((res)=>{
//     res.data.forEach(item=>{
//         display.innerHTML+=`<img style="width:100px;height:100px" src=${item.images.jpg.image_url}>${item.title}`;


//     })
// })


// }
// }



 


 


// async function postMovie(e){
//     e.preventDefault();

//     const data={
//         movie:{
//             image:`${imginput.value}`,
//             linkToMovie:`${linkinput.value}`,
//             movieName:`${nameinput.value}`,
//             ratimg:`${rateinput.value}`,
//             synopsis:`${ssinput.value}`,

//         }
//     }
//     return await fetch("https://moviesmern.herokuapp.com/movies/saveMovie",{ 
//         method:"POST",
//         body:JSON.stringify(data),
//         headers:{
//             'Content-Type':'application/json'

//         }, 
//     })
 
// }

const basic_api="https://moviesmern.herokuapp.com/movies/"

async function getMovieByName(){

    try {
    const respo=await fetch(`${basic_api}movie/searchByName/${inputserch.value}`)
       
    return respo.json()
    }
       catch (error) {
       
       
           console.log(error);
       }
       
       finally{
           
       }
}

function showMovie(){
    fd.innerHTML=""
    getMovieByName().then((res)=>{

        res.data.forEach(item => {
            console.log(item);
      fd.innerHTML +=`<li>${item.movieName}</li>`
        });
    })
    
}