function results () {

var hypotenuse =parseInt(document.getElementById("hypotenuse").value);
var adjacent =parseInt(document.getElementById("opposite").value);
var opposite =parseInt(document.getElementById("adjacent").value);


if (hypotenuse===adjacent && hypotenuse===opposite && adjacent===opposite){
 alert("This is an Equilateral Triangle");
}

else if( (hypotenuse+adjacent)<=opposite||(hypotenuse+opposite)<=adjacent||(adjacent+opposite)<=hypotenuse ){
    alert("This is not a Triangle");
}


else if (hypotenuse===adjacent||hypotenuse===opposite||adjacent===opposite){
    alert("This is an Isosceles");
}

else if (hypotenuse!==adjacent||hypotenuse!==opposite&&adjacent!==opposite){
    alert("This is a ");
  }
}
