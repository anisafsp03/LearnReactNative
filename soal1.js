
function changeWord(SelectedText, ChangedText, Text){
  return Text.replace(SelectedText, ChangedText);
     
 }
   const kalimat1 = "Andini mencintai kamu selamanya";
   const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";
 
 
   console.log(changeWord('mencintai','membenci',kalimat1))
   console.log(changeWord('bromo','semeru',kalimat2))
  

/*
function cekNilai(nilai){
  if(nilai>=1&&nilai<=100){
    if(nilai>=70){
      return "lulus"
    }else if(nilai<70){
      return "tidak lulus"
    }else{
      return "nilai tidak diantara 1-100"
    }
  }
}
console.log(cekNilai(105))
*/