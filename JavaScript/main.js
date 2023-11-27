
/*Antwoord voor de opdracht controleren*/
/*uiterlijk aanpassen naar vernieuwing prototype*/
/*kruisje is nu ook doorstreept*/
function controleren(){
    /*fout*/
    if (document.getElementById("antwoord1").checked){
        document.getElementById("a1").style.color = "red";
        document.getElementById("a1").style.textDecoration = "line-through";
        document.getElementById("hulpfunctieShow").style.visibility = "visible";        
    };
    /*goed*/
    if (document.getElementById("antwoord2").checked){
        document.getElementById("a2").style.color = "#77B72A";
        document.getElementById("controleren").innerHTML = "Volgende";
        document.getElementById("hulpfunctieShow").style.visibility = "hidden"; 
        document.getElementById("gefeliciteerd").style.visibility = "visible";               
    };
    /*fout*/
    if (document.getElementById("antwoord3").checked){
        document.getElementById("a3").style.color = "red";
        document.getElementById("a3").style.textDecoration = "line-through";
        document.getElementById("hulpfunctieShow").style.visibility = "visible";        
    };
};

/*--------Uitleg popup aan en uit-------*/
function openUitleg(){
    document.getElementById("uitlegPopup").style.visibility = "visible";
};

function closeUitleg(){
    document.getElementById("uitlegPopup").style.visibility = "hidden";
}


/*-------------------------------- HULPFUNCTIE ------------------------------------*/

/*-------------Hulpfunctie aan uit--------*/
function openHulpfunctie(){
    document.getElementById("hulpfunctiePopup").style.visibility = "visible";
    document.getElementById("tekstGelezen").style.visibility = "visible";
};

function closeHulpfunctie(){
    document.getElementById("hulpfunctiePopup").style.visibility = "hidden";
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