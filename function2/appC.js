const unesiBroj =()=>{

    //const num = prompt('Unesi neki broj:');
    const num = console.log('Unesi neki broj:');


for (let index = 0; index < num; index++) {                             //index =num              let num = 0; num < 3; num++
    //
    if (num > 50) {
       //const num = prompt('Broj mora biti manji od 50');
        const num = console.log('Broj mora biti manji od 50');
        break;
    }else if(num > 10 && num < 50){
        const num2 = console.log('Unesi broj manji od 10:');

        for (let index = 0; index <num2; index++) {
            if (num2 > 10) {
                const num2 = console.log('NISI TI ZA RACUNARE!')
                break;
            }else if(num2 < 10){
                //const num2 =prompt('Kralji si xD');
                //break;
                 const num3 = console.log('Unesi taj broj ponovo')
                for (let index = 0; index < num3; index++) {
                    //const element = array[index];
                    const num3 =console.log('Broj morate uneti onoiliko puta koliko je vrednost unestog broja');
                
                }
            }break;
        }
        
        break;
    }else if(num < 10){
        const num = console.log('PONOVO')
    }else{
       break; //const num3 =prompt('Iz kojeg si vijeka TI ?')
    }
     //const num = prompt('Unesi opet:');
}
   

}
unesiBroj();


//var num = console.log('broj')