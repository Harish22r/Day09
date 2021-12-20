// a)Get all the countries from Asia continent /region using Filter function

var data=new XMLHttpRequest();

data.open('GET','https://restcountries.com/v2/all',true);

data.send();
data.onload=function(){
    
    var name=JSON.parse(data.response)

   
     let cd=name.filter((element)=>element.region=="Asia");
    console.log (cd);
    
}
