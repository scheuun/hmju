$(document).ready(function () {
        var chosungs = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

        var chosung1 = chosungs[Math.floor(Math.random() * chosungs.length)];
        var chosung2 = chosungs[Math.floor(Math.random() * chosungs.length)];

        document.getElementById("chosung1").textContent = chosung1;
        document.getElementById("chosung2").textContent = chosung2;

        $.ajax({
            url: 'https://krdict.korean.go.kr/api/search?key=5A340B3B26C1D4C0CBA1CC80AD1B98C6&q=나무&advanced=y&method=exact',
            type: 'GET',
            success: function (data) {
               
                var word = data.querySelector("word").textContent;

                $("form").submit(function (event) {
                    event.preventDefault();
                    
                    var submittedWord = $("input[type='text']").val();
                    
                    if (submittedWord === word) {
                        console.log("단어가 일치합니다.");
                    } else {
                        console.log("단어가 일치하지 않습니다.");
                    }
                    
                });
            },
            error: function (data) {
                console.log(data);
                alert("실패");
            }
        });

});


