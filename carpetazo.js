const blackList = [
    "gordas", "gorda", 
    "negra", "negras", 
    "judia", "judias", 
    "paraguaya", "paraguayas", 
    "boliviana", "bolivianas", 
    "putas", "puto",
    "negro", "trolo", 
    "putos", "negros", 
    "trolos", "boliviano", 
    "bolivianos", "paraguayo", 
    "paraguayos", "judio",
    "judios", "puta",
    "militares", "videla",
    "desaparecidos", "africanos",
    "africana", "africanas",
    "de%20mierda"
  ];

const queryurl = "https://twitter.com/search?q=from%3A";
const queryend = blackList.join("%22%20OR%20%22") + "%22&src=typed_query&f=top";

function crearCarpetazo(id) {
    let username = document.getElementById("userName").value;
    if(id === "carpetazo") window.location.href = queryurl + username + "%20%20%22" + queryend;
    if(id === "carpetazo2017") window.location.href = queryurl + username + "%20until%3A2017-01-01%20%20%22" + queryend;
}