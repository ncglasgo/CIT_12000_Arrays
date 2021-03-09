var wrap = document.body.querySelector(".wrap");
var list = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
];

for (var i=0; i < list.length; i++) {
  var ele = document.createElement("div");
   var nameEle = document.createElement("h1");
     var damageEle = document.createElement("h3");
       var healthEle = document.createElement("h3");
         ele.appendChild(nameEle);
           ele.appendChild(damageEle);
            ele.appendChild(healthEle);
  
  if (list[i].health >= 10 && list[i].damage >=2 && list[i].warrior===true) {
    nameEle.innerHTML = list[i].name;
     damageEle.innerHTML = "Damage: " + list[i].damage;
      healthEle.innerHTML = "Health: " + list[i].health;
  };
  
  if(list[i].name.includes("a")){
    ele.style.color = "red"
  };
    
  wrap.appendChild(ele);
}