$(document).ready(function(){
    // 초기선언부
    // current = cur // dir = direction
    var timer = 5000;
    var cur = 0; //우리가 보고 있는 슬라이드의 번호 또는 보게 될 슬라이드의 번호
    var len = $(".sbox").length; // 슬라이드의 전체 개수
    for(i=0 ; i<len ; i++){
        $("#dots").append("<button type='button'></button>");
    }
    $("#dots button").eq(0).addClass("active");

    paging();
    
    function paging(){
        // 전체 슬라이드의 개수와 현재 우리가 보고있는 슬라이드의 번호를
        // #page라는 곳에 써 주는 일.
        $("#page").text(cur+1+"/"+len);
    }
    
    for (i=0; i<len; i++){
        $("#dots").append("<div class='div'> </div>");
    }  
    $("")
    function sliding(dir){ // 핵심(별)*별)
        cur = cur + dir; // cur를 dir만큼 증가시켜라 (dir이 음수라면 : 감소시켜라)
        if(cur >= len){     //혹시 cur가 너무 커져서 len보다 큰거 아니냐?
            cur = 0;    //그렇다면 처음 슬라이드를 보도록 바꿔치기
        }else if(cur < 0 ){ // 아님 혹시 cur가 너무 작아져서 0보다 작아진건 아니냐?
            cur = len - 1;  //그렇다면 마지막 슬라이드를 보도록 len-1 (마지막 그림번호)
        }
        $("#dots button").removeClass("active");
        $("#dots button").eq(cur).addClass("active");
  
        paging();
       // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
   
    }
    $("#prev").click(function(){sliding(-1); // #prev버튼이 눌리면 sliding함수를 -1이라는 재료와함께 실행
    });
    $("#next").click(function(){sliding(1); // #next 버튼이 눌리면 sliding함수를 1이라는 재료와함께 실행
    });
    // 자동슬라이딩 타이머

    // dot 실행부
    // 1. 방금누른 dot 버튼이 몇번쨰 버튼인지?
    // 2. cur가 0이었다 라고 뻥치기
    // 3. sliding(번째수)  
    $("#dots button").click(function(){
        var btnidx = $(this).index();
        cur = 0;
        sliding(btnidx);
    });

});