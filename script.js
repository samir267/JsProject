
x=Math.floor(Math.random() * 9000)+1000;
console.log(x)
tab1=generertab(Number(x));
   


max=10;


btn=document.getElementById("btn").addEventListener("click",()=>{
    max--;
    document.getElementById("res3").innerHTML=max;
    posjuste=0;
    justepresent=0;
    if(max>0){


        function generertab(num){
            let tab=[];
            tab[0]=Math.floor(num / 1000);  
            tab[1]=Math.floor((num % 1000)/100);  
            tab[2]=Math.floor((num % 100)/10);  
            tab[3]=(num % 100)%10;  
            return tab;
            }
            

    nb=document.getElementById("number").value;
    tab2=generertab(Number(nb));
    document.getElementById("number").value = "";

    tab3=Array.from(tab1);
    for (let index = 0; index <4; index++) {
        if(tab3[index]===tab2[index]){
            posjuste++;
            tab3[index]=-1;  
            tab2[index]=-1;
        }
    }
        checkSet=new Set(tab2);
        for (let index = 0; index <4; index++) {
            if (tab3[index]!==-1){
            if(checkSet.has(tab3[index])){
                justepresent++;
            }
            }
           

        
    }


    res1=document.getElementById("res1").innerHTML=posjuste;
    res1=document.getElementById("res2").innerHTML=justepresent;

    
    if(posjuste==4){
        document.getElementById("div1").style.backgroundColor ="rgb(84, 192, 192)";
        document.getElementById("h5").innerHTML="vous avez gagnés";
        document.getElementById("titre1").innerHTML="";
        document.getElementById("titre2").innerHTML="";
        document.getElementById("titre3").innerHTML="";
        document.getElementById("btn").disabled=true;
        enablePlayAgainButton();



    }
    
   
    }else{
        document.getElementById("btn").disabled=true;
        document.getElementById("h5").innerHTML="vous avez echoué";
        document.getElementById("titre1").innerHTML="";
        document.getElementById("titre2").innerHTML="";
        document.getElementById("titre3").innerHTML="";
        document.getElementById("btn").disabled=true;
        enablePlayAgainButton();


    }
   
   

})



document.getElementById("playAgain").addEventListener("click", () => {
    window.location.reload();
});

function enablePlayAgainButton() {
    document.getElementById("playAgain").style.display = "block";
}