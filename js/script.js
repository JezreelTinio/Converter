
 function gramsConverter(){
     let kilo = document.getElementById("kiloConverter").value;
     const gram = 10000;
     const ans = kilo * gram;

     document.getElementById("unit").innerHTML = ans;
     document.getElementById("displayUnit") = "Grams"
 }
 function PoundsConverter(){
    let kilo = document.getElementById("kiloConverter").value;
    const pound = 2.2;
    const ans = kilo * pound;
    
    document.getElementById("unit").innerHTML = ans;
    document.getElementById("displayUnit") = "Pounds";
}
function OuncesConverter(){
    let kilo = document.getElementById("kiloConverter").value;
    const ounce = 35.27;
    const ans = kilo * ounce;
    
    document.getElementById("unit").innerHTML = ans;
    document.getElementById("displayUnit") = "Ounce";
}