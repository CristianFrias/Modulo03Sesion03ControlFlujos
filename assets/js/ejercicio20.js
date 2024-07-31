$(document).ready(function() {
    $("#formulario").submit(function(evento) {
        evento.preventDefault();
        $("#msg-nombre").html("")
        $("#msg-salario-bruto").html("")
        
        var nombre = $("#txt-nombre").val();
        var salarioBruto = $("#txt-salario-bruto").val();

        if(nombre == "") {
            return $("#msg-nombre").html("Ingrese el nombre")
        }

        if(salarioBruto == "") {
            return $("#msg-salario-bruto").html("Ingrese el salario bruto")
        }

        var retencion = obtenerRetencion(salarioBruto)
        var salarioNeto = obtenerSalarioNeto(salarioBruto,retencion)

        $("#result-nombre").html(nombre)
        $("#result-salario-bruto").html(salarioBruto)
        $("#result-retencion").html(retencion+"%")
        $("#result-salario-neto").html(salarioNeto)
    })

    function obtenerRetencion(salarioBruto) {
        var retencion = 0
        if(salarioBruto > 1500) {
            retencion = 5
        }
        if(salarioBruto > 3000) {
            retencion = 8
        }

        return retencion
    }

    function obtenerSalarioNeto(salarioBruto, retencion) {
        var salario = salarioBruto - (salarioBruto * (retencion / 100))
        return salario
    }
})