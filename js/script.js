
 function gramsConverter(){
     let kilo = document.getElementById("kiloConverter").value;
     const gram = 10000;
     const ans = kilo * gram;

     document.getElementById("value").value = ans;
 }
 function PoundsConverter(){
    let kilo = document.getElementById("kiloConverter").value;
    const pound = 2.2;
    const ans = kilo * pound;
  
    document.getElementById("value").value = ans;
}
function OuncesConverter(){
    let kilo = document.getElementById("kiloConverter").value;
    const ounce = 35.27;
    const ans = kilo * ounce; 
    document.getElementById("value").value = ans;
    
}