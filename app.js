function talk() {
    let saber = {
        "quem e voce": "Olá, Daniel Fernando aqui",
        "como vai": "Bem :)",
        "o que posso fazer por voce": "Pesquisar @dan_hoo no instagram >> Te agradeço depois",
        "seus seguidores":
            "Eu tenho meus seguidores que são apenas 422, são poucos :(",
        ok: "Muito obrigado ",
        tchau: "Ok! A gente se encontra mais tarde :3",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in saber) {
        document.getElementById("chatLog").innerHTML = saber[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Desculpe, não entendi <br>";
    }
}

