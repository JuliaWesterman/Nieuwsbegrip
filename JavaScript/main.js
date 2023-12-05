
/*--------Uitleg popup aan en uit-------*/
function openUitleg(){
    document.getElementById("uitlegPopup").style.visibility = "visible";
};

function closeUitleg(){
    document.getElementById("uitlegPopup").style.visibility = "hidden";
}


/*Antwoord voor de opdracht controleren*/
function controleren(){
        /*fout*/
        if (document.getElementById("antwoord1").checked){
            document.getElementById("a1").style.color = "red";
            document.getElementById("a1").style.textDecoration = "line-through";
            document.getElementById("gefeliciteerd").style.visibility = "hidden";               
            document.getElementById("hulpfunctieShow").style.visibility = "visible";        
            document.getElementById("hulpfunctieKleinShow").style.visibility = "visible";
            document.getElementById("hulpfunctieTekstKleinShow").style.visibility = "visible";   
            document.querySelector('input[name="antwoord"]:checked').style.accentColor = "#FF0000";  
        };
        /*goed*/
        if (document.getElementById("antwoord2").checked){
            document.getElementById("a2").style.color = "#77B72A";
            document.getElementById("controleren").innerHTML = "Volgende";
            document.getElementById("gefeliciteerd").style.visibility = "visible";               
            document.getElementById("hulpfunctieShow").style.visibility = "hidden"; 
            document.getElementById("hulpfunctieKleinShow").style.visibility = "hidden";  
            document.getElementById("hulpfunctieTekstKleinShow").style.visibility = "hidden";  
            document.querySelector('input[name="antwoord"]:checked').style.accentColor = "#77B72A";      

        };
        /*fout*/
        if (document.getElementById("antwoord3").checked){
            document.getElementById("a3").style.color = "red";
            document.getElementById("a3").style.textDecoration = "line-through";
            document.getElementById("gefeliciteerd").style.visibility = "hidden";               
            document.getElementById("hulpfunctieShow").style.visibility = "visible";        
            document.getElementById("hulpfunctieKleinShow").style.visibility = "visible";        
            document.getElementById("hulpfunctieTekstKleinShow").style.visibility = "visible"; 
            document.querySelector('input[name="antwoord"]:checked').style.accentColor = "#FF0000";         
        };        

    };


/*-------------------------------- HULPFUNCTIE ------------------------------------*/

/*-------------Hulpfunctie aan uit--------*/
function openHulpfunctie(){
    document.getElementById("hulpfunctiePopup").style.visibility = "visible";
    document.getElementById("tekstGelezen").style.visibility = "visible";
};



/*-----door de hulpfunctie heen----*/

/*tekst gelezen ja/nee*/
function ja(){
    document.getElementById("moeiteMet").style.visibility = "visible";
    document.getElementById("tekstGelezen").style.visibility = "hidden";
}
function nee(){
    document.getElementById("naarTekst").style.visibility = "visible";
    document.getElementById("tekstGelezen").style.visibility = "hidden";
}

/*nee -> naar tekst*/
function tekstOke(){
        alert("gaat naar tekst");
        document.getElementById("naarTekst").style.visibility = "hidden";
        document.getElementById("hulpfunctiePopup").style.visibility = "hidden";
}

/*tekst gelezen ja hulp */
function tekst(){
    document.getElementById("hulpTekst").style.visibility = "visible";
    document.getElementById("moeiteMet").style.visibility = "hidden";
}
function vraag(){
    document.getElementById("hulpVraag").style.visibility = "visible";
    document.getElementById("moeiteMet").style.visibility = "hidden";
}

/*hulp gehad*/
function oke(){
    document.getElementById("hulpVraag").style.visibility = "hidden";
    document.getElementById("hulpTekst").style.visibility = "hidden";
    document.getElementById("hulpfunctiePopup").style.visibility = "hidden";
}



function closeHulpfunctie(){ /*alles moet sluiten*/
    // document.getElementById("hulpfunctiePopup").style.visibility = "hidden";
    document.getElementById("tekstGelezen").style.visibility = "hidden";
    document.getElementById("moeiteMet").style.visibility = "hidden";
    document.getElementById("naarTekst").style.visibility = "hidden";
    document.getElementById("hulpVraag").style.visibility = "hidden";
    document.getElementById("hulpTekst").style.visibility = "hidden";
    document.getElementById("hulpfunctiePopup").style.visibility = "hidden";
};
