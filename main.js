var img = [
    "family.jpg",
    "dad.jpeg",
    "mom.jpeg",
    "boy.jpeg",
    "girl.jpeg",
    ];
    var names=[
    "Lahoti's",
    "Amit Lahoti",
    "Rita Lahoti",
    "Kshitij Lahoti",
    "Aadya Lahoti",
    ];
    var i = 0;
    function nxt() {
    document.getElementById("names").innerHTML = names[i];
    document.getElementById("img").src= img[i];
    i++;
    if(i == 5){
    i = 0;
    }
    
    }
    