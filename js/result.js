document.addEventListener("DOMContentLoaded", function() {
    var sessionValue = sessionStorage.getItem("count");
    var outputElement = document.getElementById("result");

    if (sessionValue > 0) {
        outputElement.textContent = "총 " + sessionValue + "개 맞췄습니다!";
    } else {
        outputElement.textContent = "총 0개 맞췄습니다ㅠ";
    }
});

function retry() {
    sessionStorage.setItem("count", 0);
    location.href="/html/main.html";
};

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        retry();
    }
});