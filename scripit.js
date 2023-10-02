function calculate() {
    const n1 = +document.querySelector('#n1').value;
    const n2 = +document.querySelector('#n2').value;

    const result = document.querySelector('#result');

    const media = (n1 > n2);

    if(n1 > n2 == true) {
        result.innerHTML = n1 + ' é maior que ' + n2;
    } else if(!n1 || !n2) {
        alert('Campos vazios!');
    } else if(n1 == n2) {
        alert('Os números são iguais!');
    } else {
        result.innerHTML = n2 + ' é maior que ' + +n1;
    }
}