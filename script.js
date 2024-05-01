xinitWidth = 5
initHeight = 4
$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
    
    function open() {
        envelope.addClass('open')
            .removeClass('close');
    }
    function close() {
        envelope.addClass('close')
            .removeClass('open');
    
    function openWithDelay() {
        open();
        setTimeout(function() {
            close();
            showAlert();
        }, 5000); 
    }
    }
})
document.getElementById("reset").addEventListener("click",()=>{
    initWidth += 3;
    initHeight += 2;
    document.getElementById("open").style.width = `${initWidth}rem`;
    document.getElementById("open").style.height = `${initHeight}rem`;

})
document.getElementById('open').addEventListener('click', () => {

  alert("УРААА Я РАДА!! \nКак насчет того, чтобы 11ого мая(но возможно будет дождь так что это subject to change)  \nвстретиться в Есентай парке и устроить пикник в 13:00!! \nПринесите с собой еду начинающийся с буквы вашего имени!! (приготовленная вами еда ис хайли апрешиейтед :3 и желательно не много еды думаю если что закажем если не хватит) \nсвои айпады если есть и тд и тп \nи если у вас есть какиенибудь мелкие настолки \nили колонка напишите мне :3  \nдумаю еще принести мячь чтобы да..... \nУ вас есть время до воскресенья чтобы ответить и всех жду!  \nССЫЛКА НА ВИШЛИСТ если кому надо ОГО: https://drive.google.com/file/d/14wDr6KtYF9z2CoD6SPF6vqqOqzagWRWq/view?usp=sharing.")
})
