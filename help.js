document.querySelectorAll('a[show]').forEach(function(el){
    el.onclick = function(){
        this.parentNode.parentNode.parentNode.nextSibling.nextSibling.style.display = 'table-row';
    }
})

document.querySelectorAll('a[hide]').forEach(function(el){
    el.onclick = function(){
        this.parentNode.parentNode.parentNode.nextSibling.nextSibling.style.display = 'none';
    }
})
