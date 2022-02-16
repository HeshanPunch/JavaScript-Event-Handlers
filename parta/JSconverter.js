/* Javascript for converting units
JSconverter.js
*/


function convertUnits(){
    var selection = document.form.unitSelect.value; // unit to convert selection
    var value = parseFloat(document.form.UserValue.value); //unit value
    
    
    switch(selection){
        case "select":{
            prompt("Error, select the units to convert from drop down")
        }
        case "kmMile":{
            var result = value/1.609
            ;
            document.form.result.value = result.toFixed(2) + " mi";
            break;
        }
        case "mileKm":{
            var result = value*1.609;
            document.form.result.value = result.toFixed(2) + " km";
            break;
        }
        case "kgLb":{
            var result = value*2.205;
            document.form.result.value = result.toFixed(2)+ " lb";
            break;
        }
        case "lbKg":{
            var result = value/2.205;
            document.form.result.value = result.toFixed(2)+ " kg";
            break;
        }
        case "cmIn":{
            var result = value/2.54;
            document.form.result.value = result.toFixed(2)+ " in";
            break;
        }
        case "inCm":{
            var result = value*2.54;
            document.form.result.value = result.toFixed(2)+ " cm";
            break;
        }
        case "mY":{
            var result = value*1.094;
            document.form.result.value = result.toFixed(2) + " yd";
            break;
        }
        case "yM":{
            var result = value/1.094;
            document.form.result.value = result.toFixed(2)+ " m";
            break;
        }
        
        default:
        prompt("Error, refresh and try again")
    }
    
    
    
}