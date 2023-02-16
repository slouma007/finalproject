const x=document.getElementsByClassName("plus")
const w=document.getElementsByClassName("minus")
const y=document.getElementsByClassName("quantity")
var   total=document.getElementsByClassName("total")
const table = document.getElementById('myTable');
const numRows = table.childElementCount;
console.log('Number of child:'+ numRows);


function add(a){
    var r=parseInt(a.innerHTML)+1 ;
    a.innerHTML=r 
    total.innerHTML=parseFloat(a.parentElement.children[1].child.innerHTML)+ parseFloat(parentElement.child[1].child.innerHTML) 
a.parentElement.parentElement.children[3].children[1].innerHTML=parseFloat(a.parentElement.parentElement.children[1].children[1].innerHTML)*a.innerHTML


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
        total.innerHTML=parseFloat(a.parentElement.children[1].child.innerHTML)- parseFloat(total.innerHTML) 
        }
}

