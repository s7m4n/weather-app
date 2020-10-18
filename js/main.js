// Api + Key
const key = "bfcae88cf13f3f2c05b4b4ebd3835341";

// Funções
function consultar() {
    // Mostrar resultados na tela
    search(document.getElementById("cidade").value); 
    $(".resultados").show(0);
}

/* Escolha feita pelo usuário com badges*/
function cidades(cidade) {
    search(cidade);
}

// Função de procurar por cidades/países/etc
function search(valueToSearch) {
    const currentPage = $(".resultados").html();
    $(".resultados").html("Carregando...");
    $(".resultados").show(0);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${valueToSearch}&appid=${key}&lang=pt_br`;
    $.ajax({
        url: url,
        type: "GET",
        success: (result) => {
            $(".resultados").html(currentPage);
            displayResultOnScreen(result);
        },
    }).fail((xhr, textStatus, errorThrown) => {
        alert('Nenhum resultado encontrado.');
        $(".resultados").html(currentPage);
        $(".resultados").hide(0);
    });
}

// Coloca informações na tela do usuário
function displayResultOnScreen(result) {
    displayResultOnScreen(result);
}

// Coloca informações na tela do usuário
function displayResultOnScreen (result) {
    $("#nome").html(result.name);
    $("#pais").html(result.sys.country);
    $("#descricao").html(result.weather[0].description);
    $("#vento").html(result.wind.speed);
    $("#humidade").html(result.main.humidity);
}

// esconder resultados e tela de carregamento
$(() => {
    $(".resultados").hide(0);
})

// API
function api() {
    window.open("https://api.openweathermap.org/");
}
