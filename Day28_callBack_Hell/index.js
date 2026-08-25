// CALL BACK HELL : function calling inside another function

// callback = ()=>{
//     preparingOrder();
// }


// ----------------------------
// callback = ()=>{
//         preparingOrder();
//     };

// callback();  //means execute the code present inside

function placeOrder(callback){
    console.log("In talk with Domino's...");

    setTimeout(()=>{
        console.log("Order placed successfully.");
        callback();
    },2000)
};

function preparingOrder(callback){
    console.log("Your Pizza is getting prepared...");

    setTimeout(()=>{
        console.log("Pizza has been prepared.!");
        callback();
    },5000)
};

function pickupOrder(callback){
    console.log("Going to pickup your Order...");

    setTimeout(()=>{
        console.log("Order has been picked up.");
        callback();
    },3000)
};

function deliverOrder(callback){
    console.log("Delivery boy is on the way to deliver your order...");

    setTimeout(()=>{
        console.log("Your order has been delivered successfully.!");
        callback();
    },2000)
};

function rating(){
    console.log("Enjoy your meal...");

    setTimeout(()=>{
        console.log("Please rate us. Thank you!");
    },2000)
}


// placeOrder();
// preparingOrder();
// pickupOrder();
// deliverOrder();
 

// placeOrder(preparingOrder);

placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder(()=>{
                rating();
            });
        });
    });
})