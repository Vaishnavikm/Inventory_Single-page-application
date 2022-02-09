angular.module("inv",["ngroute"])
.controller("invctrl", ()=>{
    document.getElementById("variable").innerHTML = "inv"

})

inv.config("homeRt", ($routeProvider)=>{

})

document.getElementById("abc").addEventListener('keydown',(e)=>{
 console.log(e)
})