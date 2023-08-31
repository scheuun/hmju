$(document).ready(function () {
    function getChosung(character) {
        var choSungCode = character.charCodeAt(0) - 0xAC00;
        var choIndex = parseInt(choSungCode / 588);
        return ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"][choIndex];
    }

    var chosungs = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

    var chosung1 = chosungs[Math.floor(Math.random() * chosungs.length)];
    var chosung2 = chosungs[Math.floor(Math.random() * chosungs.length)];

    document.getElementById("chosung1").textContent = chosung1;
    document.getElementById("chosung2").textContent = chosung2;


    $("form").submit(function (event) {
        event.preventDefault();
        
        var subWord = $("input[type='text']").val();

        if (subWord.length != 0) {
   
            var subChosung1 = getChosung(subWord[0]);
            var subChosung2 = getChosung(subWord[1]);

            if (subChosung1 === chosung1 &&  subChosung2 === chosung2) {
                
                $.ajax({
                    url: 'https://krdict.korean.go.kr/api/search?key=5A340B3B26C1D4C0CBA1CC80AD1B98C6&q=' + subWord + '&advanced=y&method=exact',
                    type: 'GET',
                    success: function (data) {

                        var total = data.querySelector("total").textContent;
                        var count = sessionStorage.getItem("count") || 0;
                        
                        if (total > 0) {                            
                            count++;
                            sessionStorage.setItem("count", count);
                            location.reload();
                        } 
                        
                        else location.href="/html/result.html"
                    },
                    error: function () {
                        alert("실패");
                        location.href="/html/result.html"
                    }
                });
            } 
            else location.href="/html/result.html"
        } 
        else location.href="/html/result.html"
    });        
});


