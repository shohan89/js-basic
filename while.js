// ================ While Loop ===========
let num = 0; // loop variable
while  (num < 5) {
    console.log("Looping " + num);
    num++;
    while(num == 5){
        console.log('The number is equal to 5!!');
        break;
    }
}