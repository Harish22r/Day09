
// 3)Print the following details name, capital, flag using forEach function


var data=new XMLHttpRequest();

data.open('GET','https://restcountries.com/v2/all',true);

data.send();

data.onload=function(){
  
    
    var value=JSON.parse(data.response)
    console.log(value)
   
     value.forEach(function(element){
        console  .log(element.name)
        console.log(element.capital)
        console.log(element.flag)

     });
    
    
}