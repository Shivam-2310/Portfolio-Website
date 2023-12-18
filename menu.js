document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("button").addEventListener("click" ,showmenu);

    document.getElementById("close").addEventListener("click", close);
    
    document.getElementById("menu_option1").addEventListener("click", close);
    document.getElementById("menu_option2").addEventListener("click", close);
    document.getElementById("menu_option3").addEventListener("click", close);
    document.getElementById("menu_option4").addEventListener("click", close);
    document.getElementById("menu_option5").addEventListener("click", close);

    function showmenu(){
        const menu = document.querySelector("div.menu");
        menu.style.height = "250px";
    }
    function close(){
        const menu = document.querySelector("div.menu");
        menu.style.height = "0";
    }
})