const x=document.getElementsByClassName("plus")
const w=document.getElementsByClassName("minus")
const y=document.getElementsByClassName("quantity")
var   total=document.getElementsByClassName("total")
const t=document.getElementById("basket")
const table = document.getElementById('myTable');
const numRows = table.childElementCount;
console.log('Number of child:'+ numRows);


function add(a){
    var r=parseInt(a.innerHTML)+1 ;
    a.innerHTML=r 
a.parentElement.parentElement.children[3].children[1].innerHTML=parseFloat(a.parentElement.parentElement.children[1].children[1].innerHTML)*a.innerHTML
t.innerHTML=parseFloat(t.innerHTML)+parseFloat(a.parentElement.parentElement.children[1].children[1].innerHTML)

}
for (var i=0 ; i<x.length ;i++){
        const btnplus =x[i]
        const z=y[i]
        const btnmoins =w[i]
        btnplus.onclick=  function() {
        add(z);
}
        btnmoins.onclick = function() {
        minus(z); 
        btnmoins.onclick = function() {
        minus(z); 
}
}


}
function minus(a){
        var r=parseInt(a.innerHTML) ;
        if (r>0){
        a.innerHTML=r-1
        a.parentElement.parentElement.children[3].children[1].innerHTML=parseFloat(a.parentElement.parentElement.children[1].children[1].innerHTML)*a.innerHTML 
        t.innerHTML=parseFloat(t.innerHTML)-parseFloat(a.parentElement.parentElement.children[1].children[1].innerHTML)

    }
}










