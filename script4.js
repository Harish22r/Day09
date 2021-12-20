var  request= new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload=function(){
var data=JSON.parse(request.response);

var res=data.reduce((acc,element)=>{
    return acc+element.population;
},0)
console.log(res);


}