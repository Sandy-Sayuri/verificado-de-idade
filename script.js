function verificar(){
    var data=new Date()
    var ano =data.getFullYear()
    var fano=document.getElementById('txtano')
    var res=document.querySelector('div#res')
    if(fano.value.length==0||Number(fano.value)>ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        var fsex=document.getElementsByName('radsex')
        var idade=ano-Number(fano.value)
        var genero=""
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero="Homen"
            if(idade>=0 && idade<4){
                //bebe
                img.setAttribute('src','bebe H.jpg')
            }
            else if (idade>=4 && idade<10){
                //crinça
                img.setAttribute('src','criançaH.jpg')
            }
            else if(idade>=10 && idade<20){
                //jovem
                img.setAttribute('src','jovemH.jpg')
            }
            else if (idade>=20 && idade<50){
                //adulto
                img.setAttribute('src','adultoH.png')
            }
            else if(idade>=50 && idade<100){
                //velho
                img.setAttribute('src','velhoH.jpg')
            }
            else{
                //vampiro
                img.setAttribute('src','vampiroH.jpg')
            }
        }
        if(fsex[1].checked){
            genero="Mulher"
            if(idade>=0 && idade<4){
                //bebe
                img.setAttribute('src','bebeM.jpg')
            }
            else if (idade>=4 && idade<10){
                //crinça
                img.setAttribute('src','criançaM.jpg')
            }
            else if(idade>=10 && idade<20){
                //jovem
                img.setAttribute('src','jovemM.jpg')
            }
            else if (idade>=20 && idade<50){
                //adulto
                img.setAttribute('src','adultoM.png')
            }
            else if(idade>=50 && idade<100){
                //velho
                img.setAttribute('src','velhoM.jpg')
            }
            else{
                //vampiro
                img.setAttribute('src','vampiroM.jpg')
            }
        }
        res.innerHTML=` Dectamos ${genero} com ${idade} anos` 
        res.innerHTML+="<br>"
        res.appendChild(img)  
    }
    
}