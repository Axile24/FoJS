//Valeurs 
// Suits
const values = [2,3,4,5,6,7,8,9,10,11,12,13,14];
const suits= ['H','K', 'R','S'];
const deck=[];



function generate(){
  
    for (const value of values) {
        for (const suit of suits) {
    
         deck.push(value ,suit);
                     
        }
    
    }
    return deck;
 
}
const H =generate();
let length = H.length;
console.log(H);
console.log(length);





