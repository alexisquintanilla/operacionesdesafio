window.onload = () => {

    // EJERCICIO 2 GUIA DESAFIO

    // Suma

    let inputSuma = document.getElementById("inputSuma")

    inputSuma.addEventListener('click', function () {

        let numeroUno = document.getElementById("sumaUno").valueAsNumber
        let numeroDos = document.getElementById("sumaDos").valueAsNumber
        let resultado = +numeroUno + +numeroDos
        document.getElementById("resultadoSuma").value = resultado

    })


    // Resta

    let inputResta = document.getElementById("inputResta")

    inputResta.addEventListener('click', function () {

        let numeroUno = document.getElementById("restaUno").valueAsNumber
        let numeroDos = document.getElementById("restaDos").valueAsNumber
        let resultado = +numeroUno - +numeroDos
        document.getElementById("resultadoResta").value = resultado

    })

    // Division

    let inputDivision = document.getElementById("inputDivision")

    inputDivision.addEventListener('click', function () {

        let numeroUno = document.getElementById("divisionUno").valueAsNumber
        let numeroDos = document.getElementById("divisionDos").valueAsNumber
        let resultado = +numeroUno / +numeroDos
        document.getElementById("resultadoDivision").value = resultado

    })

    // Multiplicar

    let inputMulti = document.getElementById("inputMulti")

    inputMulti.addEventListener('click', function () {

        let numeroUno = document.getElementById("multiUno").valueAsNumber
        let numeroDos = document.getElementById("multiDos").valueAsNumber
        let resultado = +numeroUno * +numeroDos
        document.getElementById("resultadoMulti").value = resultado

    })

    // Modulo

    let inputModulo = document.getElementById("inputModulo")

    inputModulo.addEventListener('click', function () {

        let numeroUno = document.getElementById("moduloUno").valueAsNumber
        let numeroDos = document.getElementById("moduloDos").valueAsNumber
        let resultado = +numeroUno % +numeroDos
        document.getElementById("resultadoModulo").value = resultado
        console.log(resultado)

    })


    // EJERCICIO 3 GUIA DESAFIO


    let inputConvertir = document.getElementById("inputConvertir")
    inputConvertir.addEventListener('click', function () {

        let celsius = document.getElementById("celsius").valueAsNumber
        let kelvin = celsius + 273.15
        let fahrenheit = (celsius * (9 / 5)) + 32
        document.getElementById("kelvin").value = kelvin
        document.getElementById("fahrenheit").value = fahrenheit

    })

    // EJERCICIO 4 GUIA DESAFIO

    let inputDias = document.getElementById("inputDias")
    inputDias.addEventListener('click', function () {

        let numDias = document.getElementById("numDias").valueAsNumber
        let anos = Math.floor(numDias / 365)
        let diasSobrantes = numDias % 365
        let semanas = Math.floor(diasSobrantes / 7)
        let dias = diasSobrantes % 7


        document.getElementById("anos").innerHTML = anos
        document.getElementById("semanas").innerHTML = semanas
        document.getElementById("dias").innerHTML = dias
        console.log(anos, semanas, dias)


    })

    // EJERCICIO 5 GUIA DESAFIO

    let inputOperacion = document.getElementById("inputOperacion")
    inputOperacion.addEventListener('click', function () {

        let num1 = document.getElementById("num1").valueAsNumber
        let num2 = document.getElementById("num2").valueAsNumber
        let num3 = document.getElementById("num3").valueAsNumber
        let num4 = document.getElementById("num4").valueAsNumber
        let num5 = document.getElementById("num5").valueAsNumber

        let suma = num1 + num2 + num3 + num4 + num5
        let promedio = suma / 5


        document.getElementById("suma").value = suma
        document.getElementById("promedio").value = promedio
        console.log(suma)

    })









}


