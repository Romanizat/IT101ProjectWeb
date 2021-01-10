var index=-1;

function citati(){
    var citat = new Array(5);
    var autor = new Array(5);
    citat[0] = "“The translation called good has original value as a work of art.”";
    autor[0] = "– Benedetto Croce";
    citat[1] = "“Prevod je otac civilizacije.”";
    autor[1] = "– Josif Brodski";
    citat[2] = "“Sudbina sveta ne zavisi samo od diplomatije nego i od prevodilaca.”";
    autor[2] = "- Mark Tven";
    citat[3] = "“Prevođenje je najteži i najnezahvalniji posao od svih književnih radova za koje znam.”";
    autor[3] = "- Aleksandar Sergejevič Puškin";
    citat[4] = "“Prevod je ono što transformiše sve tako da se ništa ne promeni.”";
    autor[4] = "- Ginter Gras";
    citat[5] = "“Ne postoji prevod koji ne odaje svoga prenosioca. Prevoda ima upravo onoliko koliko ima i tumača.”";
    autor[5] = "- Slobodan A. Jovanović";
    citat[6] = "“Words travel worlds. Translators do the driving.”";
    autor[6] = "- Anna Rusconi";

    if(index==6){
        index=0;
    }else{
        index++;
    }

    document.getElementById("p1").innerHTML=citat[index];
    document.getElementById("p2").innerHTML=autor[index];
    setTimeout(citati,5000);
}

function poljeEnter(){
    document.getElementById("polje1").style.opacity=1;
}

function poljeLeave(){
    document.getElementById("polje1").style.opacity = 0;
}
function poljeEnter2(){
    document.getElementById("polje2").style.opacity=1;
}

function poljeLeave2(){
    document.getElementById("polje2").style.opacity = 0;
}
function poljeEnter3(){
    document.getElementById("polje3").style.opacity=1;
}

function poljeLeave3(){
    document.getElementById("polje3").style.opacity = 0;
}

function checked(){
    var chekirani = document.getElementsByClassName("check"); 
    var kvantiteti = document.getElementsByClassName("kvantitet");
    var tarife = [0.05,0.05,1.5,2,0.2];
    var cost=0;
    var test=true;
    var counterKolicine=0;
    var counterChekirani=0;
    for (var i=0; i<chekirani.length; i++){
        console.log(kvantiteti[i].value);
       

        if (chekirani[i].checked && kvantiteti[i].value!=""){
            cost+=(parseFloat(kvantiteti[i].value))*tarife[i];
        }else if(chekirani[i].checked && kvantiteti[i].value==""){
                counterKolicine++;
                test=false;
        }else if(chekirani[i].checked==false){
            counterChekirani++;
        }
    }
    if(counterKolicine==1){    
        window.alert("Unesite količinu za izabranu stavku i probajte ponovo.");
    }else if(counterKolicine>1){
        window.alert("Unesite količine za izabrane stavke i probajte ponovo.");
    }else if(counterChekirani==5){
        test=false;
        window.alert("Niste izabrali nijednu stavku.");
    }

    if(test){
        document.getElementById("result").innerHTML="<b>Ukupna vrednost izabranih usluga je $" + cost + "</b>";
        
        if(chekirani[0].checked){
            document.getElementById("1").innerHTML="Tarifa za prevod ENG > SRB, po reči je $" + tarife[0];
        }
        if(chekirani[1].checked){
            document.getElementById("2").innerHTML="Tarifa za prevod SRB > ENG, po reči je $" + tarife[1];
        }
        if(chekirani[2].checked){
            document.getElementById("3").innerHTML="Tarifa za ENG transkripciju, po minutu je $" + tarife[2];
        }
        if(chekirani[3].checked){
            document.getElementById("4").innerHTML="Tarifa za SRB transkripciju, po minutu je $" + tarife[3];
        }
        if(chekirani[4].checked){
            document.getElementById("5").innerHTML="Tarifa za korekturu, po reči je $" + tarife[4];
        } 
    }
}

function isEmpty(){
    var pozicijeChekirane= document.getElementsByClassName("pozicija");
    var barJednoChekirano=true;

    for(var i=0; i<pozicijeChekirane.length; i++){
        if(pozicijeChekirane[i].checked){
            barJednoChekirano=false;
        }
    }
    return barJednoChekirano
}


function hello(){
    if(document.getElementById("ime").value==""){
        window.alert("Morate uneti ime");
    }else if(document.getElementById("prezime").value==""){
        window.alert("Morate uneti prezime");
    }else if(document.getElementById("cv").value==""){
        window.alert("Morate postaviti CV");
    }else if(isEmpty()){
        window.alert("Morate izabrati bar jednu poziciju");
    }else{
        document.getElementById("hello").innerHTML="Zdravo "+document.getElementById("ime").value+", primili smo Vaše podatke!";
        document.getElementById("formica").reset();
    }
}

// function filterin1(){
//     document.getElementById("img1").style.filter="grayscale(0%)";
// }

// function filterout1(){
//     document.getElementById("img1").style.filter="grayscale(100%)";
// }

// function filterin2(){
//     document.getElementById("img2").style.filter="grayscale(0%)";
// }

// function filterout2(){
//     document.getElementById("img2").style.filter="grayscale(100%)";
// }

// function filterin3(){
//     document.getElementById("img3").style.filter="grayscale(0%)";
// }

// function filterout3(){
//     document.getElementById("img3").style.filter="grayscale(100%)";
// }

//proba sa parametrom
function filterin(id){
    document.getElementById("img"+String(id)).style.filter="grayscale(0%)";
}

function filterout(id){
    document.getElementById("img"+String(id)).style.filter="grayscale(100%)";
}


function sadrziBroj(string){
    var niz= [0,1,2,3,4,5,6,7,8,9];
    for(var i=0;i<niz.length;i++){
        if(string.includes(String(niz[i]))){
            return true;
        }
    }
    return false;
}

function fonProvera(string){
    if(string.length<8){
        window.alert("Broj telefona mora imati bar 7 cifara.");
        return false;
    }else if(string.length>20){
        window.alert("Proverite dužinu broja telefona i probajte ponovo.");
        return false;
    }
    for (var i=1; i<string.length;i++){
        if(isNaN(string[i])){
            return false;
        }
    }
    return true;
}


function proveraContact (){
    var ime = document.getElementById("ime").value; //  ime i prezime moraju 
    var prezime = document.getElementById("prezime").value; //da budu jedna reč i da ne sadrže brojeve
    var naslov = document.getElementById("msgSubject").value;
    var poruka = document.getElementById("msg").value; //mora da ima minimalnu i maksimalnu dužinu
    var fon = document.getElementById("fon").value; //mogu se nalaziti samo brojevi i karakter + koji jedino može da bude na početku


    if(ime.includes(" ") || sadrziBroj(ime) || ime==""){
        window.alert("Ime ne sme biti prazno, sadržati razmake ili brojeve.");
    }else if(prezime.includes(" ") || sadrziBroj(prezime) || prezime==""){
        window.alert("Prezime ne sme biti prazno, sadržati razmake ili brojeve.");
    }else if(naslov == ""){
        window.alert("Naslov ne sme biti prazan.");
    }else if(poruka.length<5){
        window.alert("Poruka mora imati bar 5 karaktera.");
    }else if(poruka.length>300){
        window.alert("Poruka mora biti manja od 300 karaktera.");
    }else if(fon.charAt(0)!="+"){
        window.alert("Broj telefona mora početi znakom '+'");
    }else if(!fonProvera(fon)){
        window.alert("Broj telefona mora sadržati samo cifre nakon znaka '+'");
    }else{
        window.alert("Hvala na poruci!");
        document.getElementById("formica").reset();
    }
}