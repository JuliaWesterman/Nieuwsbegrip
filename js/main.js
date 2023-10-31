
/*Antwoord voor de opdracht controleren*/
/*uiterlijk aanpassen naar vernieuwing prototype*/
/*kruisje is nu ook doorstreept*/
function controleren(){
    if (document.getElementById("antwoord1").checked){
        document.getElementById("a1").style.color = "red";
        document.getElementById("a1").style.textDecoration = "line-through";
        document.getElementById("hiddena1").style.visibility = "visible";
        document.getElementById("hiddena1").style.textDecoration = "none";        
    };
    if (document.getElementById("antwoord2").checked){
        document.getElementById("a2").style.color = "#77B72A";
        document.getElementById("controleren").innerHTML = "Volgende";
        document.getElementById("controleren").onclick("location.href='index.html'");
    };
    if (document.getElementById("antwoord3").checked){
        document.getElementById("a3").style.color = "red";
        document.getElementById("a3").style.textDecoration = "line-through";
    };
}

/*Uitleg popup aan en uit*/
function openUitleg(){
    document.getElementById("uitlegPopup").style.visibility = "visible";
};

function closeUitleg(){
    document.getElementById("uitlegPopup").style.visibility = "hidden";
}