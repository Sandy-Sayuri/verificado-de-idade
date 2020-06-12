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
       var gênero=""
       var img=document.createElement("img")
       img.setAttribute('id','foto')
       if(fsex[0].checked){
           gênero="Homen"
           if(idade>=0 && idade<3){
               //bebe
           }
           else if(idade>=3 && idade<10){
               //criança
           }
           else if(idade>=10 && idade<21){
               //adolecente
           }
           else if(idade>=21 && idade<50){
               //adulto
           }
           else if(idade>=50 && idade<200){
               //velho
           }
           else{
               //vampiro
           }
       }
       else if(fsex[1].checked){
        gênero='Mulher'
        if(idade>=0 && idade<3){
            //bebe
        }
        else if(idade>=3 && idade<10){
            //criança
        }
        else if(idade>=10 && idade<21){
            //adolecente
        }
        else if(idade>=21 && idade<50){
            //adulto
        }
        else if(idade>=50 && idade<200){
            //velho
        }
        else{
            //vampiro
        }
     }
       res.style.textAlign='center'
       res.innerHTML=`Detectamos ${gênero} com ${idade} anos`
    }
}