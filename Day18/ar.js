
function divide5and3(){
    arr.forEach(item => {
        if(item %3 ==0){
            S1 = S1 + item;
        }else if (item % 5 == 0){
            S2 = S2 + item
        }

    
    
    }) 
    console.log("tong S1:",S1);
    console.log("tong S2:",S2);
}

function ChanAndLe(){
    
    
    arr.forEach(item => {
        if(item %2 ==0){
            S1 = S1 + item;
        }else{
            S2 = S2 + item
        }

    
    
    }) 
    console.log("Tong S1:",S1);  
    console.log("Tong S2:",S2); 
}

var arr = [4,6,3,5,10,20,25,11];
var S1 = 0,S2 = 0;
ChanAndLe();
divide5and3();





