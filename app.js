function Calculate(){
    var sa=parseInt(document.getElementById("txta").value);
    var disc=0.0;
    var np=0.0;
    if(sa>0){
        if(sa>0 && sa<=2000){
            disc=sa*0.00;
            alert("sorry not eligible for discount")
        } 
        else if(sa>2001 &&sa<=2999){
            disc=sa*0.02;
        }
        else if(sa>3000 &&sa<=4999){
            disc=sa*0.05;
        }
        else if(sa>5000 &&sa<=6999){
            disc=sa*0.10;
        }
        
        else{
            disc=sa*0.15;
        }
          
        document.getElementById("txtb").value=""+disc;
        var np=sa-disc;
        document.getElementById("txtc").value=""+np;
    }
    else{
        alert('Invalid Sale Amount')
    }
    
}
