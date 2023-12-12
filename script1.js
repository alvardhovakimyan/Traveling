// JavaScript function to handle form submission
document.getElementById("package").style.display = "none";
document.getElementById("package2").style.display = "none";
document.getElementById("package3").style.display = "none";
document.getElementById("package22").style.display = "none";
function a() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const package = document.getElementById('package1').value;
    const currentDate = new Date();
        const selectedDate = new Date(document.getElementById('date').value);
    // document.getElementById("package").style.display = "block";
console.log(selectedDate.getFullYear())
    // Simulated attractions - replace with real data fetching logic
    if(selectedDate.getFullYear() < 2023){
     window.location.href = 'dino.html';
}
else if(selectedDate.getFullYear() < 2050){
   if (departure == "Վանաձոր" && destination == "Երևան" || departure == "Երևան" && destination == "Վանաձոր") {
        document.getElementById("package").style.display = "block";
        document.getElementById("package2").style.display = "block";
        document.getElementById("package3").style.display = "block";
        // div = document.createElement("div")
        // text = document.createTextNode("Արայի լեռ հանգած հրաբուխը գտնվում է Արագածի հարավ-արևելքում Քասաղ և Հրազդան գետերի միջև: Հվ-արմ.-ում կա բնական պատռվածք Կազմված է նեոգենի հրաբխային ապարներից:Ըստ ավանդության, լեռը կոչվել է Արա Գեղեցիկ արքայի անունով:Համաձայն  լեգենդի Արայի լեռը դա հենց Արա Գեղեցիկի մարմինն է, որն ընկել էր ճակատամարտի ժամանակ: Հեռվից այն իրոք նմանվում է, ձեռքերը կրծքին դրած, պառկած մարդու: ");
    }
    else if(departure == "Վանաձոր" && destination == "Գյումրի" || departure == "Գյումրի" && destination == "Վանաձոր"){
        document.getElementById("package22").style.display = "block";
        document.getElementById("package23").style.display = "block";
        // text  = document.createTextNode("aaaa");
    }
}
else{
    window.location.href = 'alion.html';

}


}
