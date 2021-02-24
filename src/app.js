let express = require('express');
let nextPrime = require('./prime');
let app = express();
let prompt = require('prompt-sync')();
// let number = prompt('enter num: ');



let num=2
let list=[]
let count=0


function prime(number){
    
    while(count !=number){
        for (let i=num-1;i>0;i--)
        if(num%i===0 & i != 1){
            num=num+1+1
            break
        }else if (num%2==0){
            num=num+1
            break
        }else if(i==1){
            count=count+1
            list=list+" "+num
            num=num+1
        }
    }
}





app.use((req, res, next)=>{
req.on('data',(chank)=>{
    console.log(chank.toString());
    Num = (chank.toString());
    // console.log(chankString)
    for (let i=Num-1;i<Num;i--){
        if(Num % i === 0) {
            
            bool = "false"
            console.log(i)
            break
            
            
        }else{if(i==2){
            bool = "true"
            break
        }
        }
    };
    next();
    req.on('end',()=>{
    })
    })
})



app.post('/api/numbers/prime/validate', (req, res,data) => {
    res.status(200).json({
    // geting(ch)
        message: bool
            
    })
})


app.get('/api/numbers/prime', (req, res, data) => {
    let number = (req.query.amount)
    prime(number)    
    res.status(200).json({
        message: list
    })
    
    
});


module.exports = app;