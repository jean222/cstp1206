function sum(){

    var a = 10;
    //var b; // Declaration
    a = 


    if (true) {
        var b = 11; // Assignemtn/Call
        let c = 10; // died within the block
        const d = 20; // died within  the block
    }

    console.log(a); // 10
    console.log(b); // 11
    console.log(c); // Error Referential Error
    console.log(d); // Error 
}

sum();

function random() {
    let a = 5;

    if (true) {
        console.log(a);
    }
}

random();