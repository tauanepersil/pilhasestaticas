const array1 = [3, 10, 7, 15, 20]
const array2 = [5, 12, 15, 30, 2]
// 5, 12, 15, 30, 2

function maiorElemento() {

    const maxValue1 = array1.reduce(function(prev, current) { 
        return prev > current ? prev : current; 
    });
    const maxValue2 = array2.reduce(function(prev, current) { 
        return prev > current ? prev : current; 
    });

    document.querySelector("#MaiorElemento").innerHTML = `
      <p>Os numeros do array 1 sao: [ ${array1} ] e do array 2: [ ${array2} ]</p>
      <p>O maior valor do array e: ${maxValue1} e do array 2 e: ${maxValue2}</p>
    `
}

function menorElemento() {
    const minValue1 = array1.reduce(function(prev, current) { 
        return prev < current ? prev : current; 
    });
    const minValue2 = array2.reduce(function(prev, current) { 
        return prev < current ? prev : current; 
    });

    document.querySelector("#MenorElemento").innerHTML = `
      <p>Os nemeros do array 1 sao: [ ${array1} ]  e do array 2: [ ${array2} ]</p>
      <p>O menor valor do array e: ${minValue1}  e do array 2 e: ${minValue2}</p>
    `
}

function mediaArray() {
    const tamanhoArray1 = array1.length
    const tamanhoArray2 = array2.length
    
    let sumArray1 = array1.reduce((acc, item) => {
      return acc + item
    }, 0)
    
    let sumArray2 = array2.reduce((acc, item) => {
      return acc + item
    }, 0)
    

    let medArray1 = sumArray1 / tamanhoArray1
    let medArray2 = sumArray2 / tamanhoArray2

    document.querySelector("#MediaDoArray").innerHTML = `
      <p>Os numeros do array 1 sao: [ ${array1} ] e do array 2: [ ${array2} ]</p>
      <p>A soma do array 1 e: ${sumArray1} e do array 2 e: ${sumArray2}</p>
      <p>A media do array e: ${medArray1} e do array 2 e: ${medArray2}</p>
    `
}

function difArray() {
  Array.prototype.equals = function(getArray) {
    if(this.length != getArray.length)
      return 'Nao';
    
    for (var i = 0; i < getArray.length; i++) {
      if (this[i] instanceof Array && getArray[i] instanceof Array){
        if(!this[i].equals(getArray[i])) return false;
      } else if (this[i] != getArray[i]) {
        return 'Nao';
      }
    }
    return 'Sim'
  }

  console.log("comparando array 1 e array 2", array1.equals(array2));

  document.querySelector("#Diferenca").innerHTML = `
      <p>Os nemeros do array 1 sao: [ ${array1} ]</p>
      <p>Os nemeros do array 2 seo: [ ${array2} ]</p>
      <p>Comparando Array 1 com Array 2 eles sao iguais: ${array1.equals(array2)}</p>
    `
}