//1+2
function practiceOne(){
return new Promise((resolve,reject)=>{

    let time=new Date();
    if(time.getHours()<12){
        
        resolve ("good morning")
    }

    reject("good after non")



});

}
// practiceOne()
// .then((data)=>{console.log(data);})
// .catch((err)=>{console.log(err);})



//3+4
function practice2(num1,num2){
return new Promise((resolve,reject)=>{


    if(num1%num2==0){

      resolve("yes")
    }

    reject("no")

    });


}

//5+6
// practice2(4,2)
// .then((data)=>{console.log(data);})
// .catch((err)=>{console.log(err);})



function practice3(num,numsArray){
    return new Promise((resolve,reject)=>{

        numsArray.forEach(item=>{

            if(item==num){
        
                resolve("yes4")
            }       
    })
    reject("no4")

})

}
// practice3(4,[7,8,4,9,7])
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})


async function practice2Async(){

    try {
    await practice3(4,[7,8,4,9,7]).then((data)=>{console.log(data);})
    } 
    catch (error) {
        console.log(error);
    }
}


practice2Async();


btn3.onclick=async function fachAddres(){

try {
btn3.disabled=true;
    display.innerHTML=`<img src="https://icon-library.com/images/waiting-icon-gif/waiting-icon-gif-16.jpg">`
 await fetch("https://moviesmern.herokuapp.com/movies/all").then((data)=>{console.log(data);})
} 

catch (error) {


    console.log(error);
}

finally{
    btn3.disabled=false;
    display.innerHTML=""
}

}



