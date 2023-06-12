var selectedColor = '';
var x = new Array();
x.push({
    // name : 'A',
    color: 'Red'
});
x.push({
    // name : 'B',
    color: 'Green'
});
x.push({
    // name : 'C',
    color: 'Blue'
});
x.push({
    // name : 'D',
    color: 'Yellow'
});
x.push({
    // name : 'E',
    color: 'Pink'
});
x.push({
    // name : 'F',
    color: 'Purple'
});
setDivs();
setInterval(nextPerson,1000);

$('#sel-colors').change(function (e) {
    selectedColor = e.target.value;
});



function setDivs() {
    $('.grid-1').empty();
    for(let c = 0; c<x.length; c++){
        $('.grid-1').append(`<div style="background-color: ${x[c].color}"></div>`);
    }
}

function nextPerson() {
    let last = x.pop();
    x.unshift(last);
    setDivs();
}