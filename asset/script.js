cl=console.log();


/*
const player =[
    {
    name:"ronaldo",age:37,
    teams:["madirid","united"]
},

{
    name:"Rohit",age:37,
    teams:["madirid","united"]
},

{
    name:"Aswin",age:37,
    teams:["madirid","city"]
},
{
    name:"Nitin",age:37,
    teams:["madirid","city"]
}];

console.table(player.filter(p=> p.teams.includes("united")));

console.table(player.map(p=>p.name.includes("nitin")));*/

let str="I love Javascript.";
let strLentgth=str.length; 
console.log(strLentgth); 
str="I  love javascript knowledge and i am not a person that have knowledge on that ";
let indexofAndular=str.indexOf("knowledge");

 let indexof2lAndular=str.indexOf("knowledge",19+1);
 console.log(indexof2lAndular);

 let indexof2Andular =str.charAt(10);
console.log( indexof2Andular );
 

string="<p>loremfjnbkjn  ioo frhveohiov ugiutb gtrig rtigubgui  g fg otgob f gt gf tohgigioh</p>";

for(let i = 0; i<=string.length; i++){
    console.log(string[i]);
};
 

let two="Hii i lov you darling";
let newstring = two.length;
console.log(newstring);

let skills=["html","css","javascript", "Angular" ];
let skill=skills.toString();
console.log(skill,typeof skill);
skill.push("NOde.js");
console.log(skill);  