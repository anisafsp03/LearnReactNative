
 const Nama = [ 
        firstName : "Anisa" ,
        middleName : "febryanti",
        lastName : "suci",
]

function getSplitName(givenNumber){
    for(let i=0; i<Nama.length; i++){
        if(givenNumber < (Nama.length+1)){
            return 
        }else{
            return "input angka maksimal 3"
        }
    }
        
}

console.log(getSplitName(2))
    
    

    
