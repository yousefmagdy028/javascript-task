var allproducts = document.querySelectorAll(".list li ")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var money = document.querySelector("#money")
var totlalprice = 0

allproducts.forEach(function (item){
    item.onclick = function(){
        div.innerHTML += item.textContent+ "+"
        totlalprice += +(item.getAttribute("price"))
        if(div.innerHTML !=""){
            btn.style.display = "block"
            btn.style.width = "150px"
            btn.style.height = "40px"
            btn.style.backgroundColor = "blue"
            btn.style.color = "white"
            btn.style.borderRadius = "5px"
            btn.style.cursor = "pointer"

        }
    }
})
btn.onclick = function(){
    money.innerHTML ="total :" +totlalprice
}