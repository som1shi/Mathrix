function volume(){
    let radius = document.getElementById("input_radius").value;

    let volume = (4/3)* Math.PI * Math.pow(radius, 3);

    document.getElementById("vol").innerHTML = "The volume of a sphere: "+volume.toFixed(2);
}


 