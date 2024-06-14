header_title = document.querySelector(".header h1");
paragraph_subtitle = document.querySelector(".header p")

window.addEventListener("load", (event)=>{
  setTimeout(()=>{
    header_title.classList.remove("title-up");
    paragraph_subtitle.classList.remove("title-up");
  }, 250)
})
