// Code your solution in this file!

const hqlocation=42


function distanceFromHqInBlocks(location){
         let numberofBlocks= location-hqlocation
         if(numberofBlocks> 0) {
            return numberofBlocks
         } else{
             numberofBlocks= hqlocation-location
             return numberofBlocks
        }
               
         }
        

function distanceFromHqInFeet(location ){
    
    const numberofBlocks= distanceFromHqInBlocks(location)
    const numberofBlocksInFeet= numberofBlocks*264
    return numberofBlocksInFeet

}

 function distanceTravelledInFeet(start, destination){
     let startDestination= (destination-start)*264
     if(startDestination > 0) {
         return startDestination
     }else{
          startDestination=(start - destination)*264
         return startDestination
     }
     
}

function calculatesFarePrice(start, destination){
    let startDestination= distanceTravelledInFeet(start, destination)
     if(startDestination <= 400 ){
         return 0
     }else if (startDestination > 400 && startDestination<= 2000){
         startDestination= (startDestination - 400)*2/100
         return startDestination
     }
     else if(startDestination > 2000 && startDestination <= 2500){
         return 25
     }else {
        return "cannot travel that far"
     }
    

}
