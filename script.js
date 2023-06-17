function highlight() {
    const strele = document.getElementsByTagName("strong");

    for(let i = 0; i < strele.length; i++){
        strele[i].classList.add("green");
    }


}


function return_normal() {
    const normele =  document.getElementsByTagName("strong");

    for(let i = 0; i < normele.length; i++){
        normele[i].classList.add("black");
    }


    
}
