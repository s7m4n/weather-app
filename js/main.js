// Api + Key
const key = "bfcae88cf13f3f2c05b4b4ebd3835341";

// Funções
function consultar(){
    $(".resultados").show(0); // Mostrar resultados na tela
    const cidade = document.getElementById("cidade").value; // Valor inserido pelo usuário
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`; // API
    $.ajax({
        url: url,
        type: "GET", // request do tipo GET
        success: function(result){
            $("#nome").html(result.name);
            $("#pais").html(result.sys.country);
            $("#descricao").html(result.weather[0].description);
            $("#vento").html(result.wind.speed);
            $("#humidade").html(result.main.humidity);
        }
    })
}
/* Escolha feita pelo usuário com badges*/
function cidades(cidade){
    $(".resultados").show(0);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`;
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            $("#nome").html(result.name);
            $("#pais").html(result.sys.country);
            $("#descricao").html(result.weather[0].description);
            $("#vento").html(result.wind.speed);
            $("#humidade").html(result.main.humidity);
        }
    })
}
// esconder resultados e tela de carregamento
$(() => {
    $(".resultados").hide(0);
})
// API
function api(){
    window.open("https://api.openweathermap.org/");
}