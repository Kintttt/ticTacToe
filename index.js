window.addEventListener('DOMContentLoaded', (event) => {
    let btn1 = document.getElementById("btn1")
    let btn2 = document.getElementById("btn2")
    let btn3 = document.getElementById("btn3")
    let btn4 = document.getElementById("btn4")
    let btn5 = document.getElementById("btn5")
    let btn6 = document.getElementById("btn6")
    let btn7 = document.getElementById("btn7")
    let btn8 = document.getElementById("btn8")
    let btn9 = document.getElementById("btn9")
    let container=document.getElementById("container")
    let scores = document.getElementById("scores")
    let themes = document.getElementById("themes")
    let btns = document.querySelectorAll(".btn")
    let btnfooter = document.querySelectorAll(".btnfooter")
    let title = document.getElementById("title")
    //alert('DOM fully loaded and parsed');
    
    function blackTheme(){
      container.style.backgroundColor = "black"
      container.style.transition = "background-color 0.2s ease"
    
      for(let i = 0; i < btns.length; i++){
          btns[i].style.backgroundColor = "inherit"
          btns[i].style.border = "2px solid grey"
          btns[i].style.margin = "0"
          btns[i].style.transition = "background-color 0.5s ease-in"
      }
      
      for(let i = 0; i < btnfooter.length; i++){
        btnfooter[i].style.backgroundColor = "#333"
        btnfooter[i].style.color = "whitesmoke"
        btnfooter[i].style.transition = "background-color 0.5s ease"
      }
      btn1.style.borderWidth = "0 1px 1px 0"
      btn2.style.borderWidth = "0 1px 1px 1px"
      btn3.style.borderWidth = "0 0 1px 1px"
      btn4.style.borderWidth = "1px 1px 1px 0"
      btn5.style.borderWidth = "1px 1px 1px 1px"
      btn6.style.borderWidth = "1px 0px 1px 1px"
      btn7.style.borderWidth = "1px 1px 0 0"
      btn8.style.borderWidth = "1px 1px 0 1px"
      btn9.style.borderWidth = "1px 0 0 1px"
      scores.style.color = "whitesmoke"
      title.style.color = "whitesmoke"
    }
    
    function whiteTheme(){
      container.style.backgroundColor = "whitesmoke"
      container.style.transition = "background-color 0.2s ease"
      
      for(let i = 0; i < btns.length; i++){
          btns[i].style.backgroundColor = "black"
          btns[i].style.borderWidth = "0px"
          btns[i].style.margin = "1px"
          btns[i].style.transition = "background-color 0.3s ease-out"    
      }    
      for(let i = 0; i < btnfooter.length; i++){
        btnfooter[i].style.backgroundColor = "inherit"
        btnfooter[i].style.color = "black"
        btnfooter[i].style.transition = "background-color 0.5s ease"
      }
      
      btn1.style.borderRadius = "1em 0 0 0;"
      btn3.style.borderRadius = "0 1em 0 0"
      btn7.style.borderRadius = "0 0 0 1em"
      btn9.style.borderRadius = "0 0 1em 0"
      scores.style.color = "black"
      title.style.color = "black"
    }
    
    themes.addEventListener("click", function(){
        if(container.style.backgroundColor === "whitesmoke"){
        blackTheme()
      }else if (container.style.backgroundColor === "black"){
        whiteTheme()
      }else{
        blackTheme()
      }  
  })
  
  
  });