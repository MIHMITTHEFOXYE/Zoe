var tDay = new Date();
var dd = tDay.getDate();
if(dd < 10){
    dd = '0' + dd
}
var mm = tDay.getMonth() +1;
    if (mm < 10){
        mm = '0' + mm
    }
var yyyy = tDay.getFullYear();
    console.log(`Hoje é ${dd}/${mm}/${yyyy}`)
