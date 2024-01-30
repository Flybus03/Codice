Date.prototype.toDateInputValue = (function(){
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

document.getElementById('start').value = new Date().toDateInputValue();
document.getElementById('start').min = new Date().toDateInputValue();

document.getElementById('end').value = new Date().toDateInputValue();
document.getElementById('end').min = new Date().toDateInputValue();