// challenge 1 : your age in days 

function ageindays() {
    var birthyear = prompt("what year were you born.... Good Friend");
    var ageindayss = (2022 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageindayss + ' days');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageindayss);
}

function reset() {

    document.getElementById('ageindays').remove();

}