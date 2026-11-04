
miraziz.onkeyup = function () {
    // m_2.innerHTML=`${miraziz.value}`
    console.log(miraziz.value.length)      
    if(miraziz.value.length > 19){
        Swal.fire({
  icon: "error",
  title: "ВЫ ДОСТИГЛИ ЛИМИТА!!!",
});
        miraziz.type = 'text'
    } 
    else{
        m_2.innerHTML=`${miraziz.value}`        
    }
}

m_1.innerHTML = `0${date.getMonth() +1 } / ${date.getFullYear() + 3}` 
// console.log(m50.innerHTML = m85.getFullYear())


anor.onclick = function (){
    miraziz1.src='https://api.logobank.uz/media/logos_preview/Anorbank-01.png'
    miraziz1.style.width = '100px'
    miraziz1.style.top = '-10px'
    miraziz1.style.right = '10px'
}
tbs.onclick = function (){
    miraziz1.src='https://upload.wikimedia.org/wikipedia/ru/thumb/e/e2/TBC_Bank_logo.svg/960px-TBC_Bank_logo.svg.png'
    miraziz1.style.width = '100px'
    miraziz1.style.top = '20px'
    miraziz1.style.right = '20px'
}
kapital.onclick = function (){
    miraziz1.src='https://api.logobank.uz/media/logos_preview/Kapitalbank-01.png'
    miraziz1.style.width = '150px'
    miraziz1.style.top = '-35px'
    miraziz1.style.right = '5px'
}
infin.onclick = function (){
    miraziz1.src='https://uzmrc.uz/uploads/partners/6bf3d4fc269f.webp'
    miraziz1.style.width = '100px'
    miraziz1.style. top= '15px'
    miraziz1.style.right = '19px'
}
agro.onclick = function (){
    miraziz1.src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Agrobank_Logo.svg/1280px-Agrobank_Logo.svg.png'
    miraziz1.style.width = '100px'
    miraziz1.style. top= '25px'
    miraziz1.style.right = '19px'
}

btn[0].onclick=function(){
 footer.style.backgroundImage='url(https://img.magnific.com/premium-vector/blue-block-dimension-background_470590-31.jpg?semt=ais_hybrid&w=740)'
 div.style.backgroundImage='url(https://img.magnific.com/premium-vector/blue-block-dimension-background_470590-31.jpg?semt=ais_hybrid&w=740)'
}
btn[1].onclick=function(){
footer.style.backgroundImage='url(https://cdn.vectorstock.com/i/500p/90/39/abstract-and-modern-hexagon-pattern-backdrop-vector-55549039.jpg)'
 div.style.backgroundImage='url(https://cdn.vectorstock.com/i/500p/90/39/abstract-and-modern-hexagon-pattern-backdrop-vector-55549039.jpg)'
}
btn[2].onclick=function(){
 footer.style.backgroundImage='url(https://img.magnific.com/premium-vector/abstract-black-grey-wavy-background_291930-853.jpg?semt=ais_hybrid)'
 div.style.backgroundImage='url(https://img.magnific.com/premium-vector/abstract-black-grey-wavy-background_291930-853.jpg?semt=ais_hybrid)'
}
btn[3].onclick=function(){
  footer.style.backgroundImage='url(https://img.magnific.com/premium-photo/shiny-fabric-floating-stripes-luxury-texture-background-3d-illustration_357568-1735.jpg?semt=ais_hybrid&w=740&q=80)'
 div.style.backgroundImage='url(https://img.magnific.com/premium-photo/shiny-fabric-floating-stripes-luxury-texture-background-3d-illustration_357568-1735.jpg?semt=ais_hybrid&w=740&q=80)'  
}
btn[4].onclick=function(){
 footer.style.backgroundImage='url(https://img.magnific.com/premium-psd/abstract-monochrome-waves-create-dramatic-contrast-lig_1276726-20885.jpg?semt=ais_hybrid)'
 div.style.backgroundImage='url(https://img.magnific.com/premium-psd/abstract-monochrome-waves-create-dramatic-contrast-lig_1276726-20885.jpg?semt=ais_hybrid)'
}
btn[5].onclick=function(){
 footer.style.backgroundImage='url(https://img.magnific.com/premium-vector/beautiful-abstract-gradient-studio-background-vector_901408-30116.jpg?semt=ais_hybrid&w=740)'
 div.style.backgroundImage='url(https://img.magnific.com/premium-vector/beautiful-abstract-gradient-studio-background-vector_901408-30116.jpg?semt=ais_hybrid&w=740)'
}