

// Main: Cart Function 
var count = 0;
var tprice = 0;
const cart = (price) => {
    count = count + 1;
    document.getElementById('total-products').innerText = count;
    tprice = tprice + price;
    document.getElementById('price').innerText = tprice;
    DeliveryCharge(tprice);
    // updatePrice(price*102.72);
    // total();

}

// Function for Delivery Charge
var net_price = 0;
const DeliveryCharge = (newPrice) => {
    let DeliveryCharge;
    if (newPrice <= 500) {
        // return document.getElementById('delivery-charge').innerText = 0;
        DeliveryCharge = 0;
    }
    if (newPrice > 500 && newPrice <= 800) {
        // document.getElementById('delivery-charge').innerText = 100;
        DeliveryCharge = 100;
    }
    else if (newPrice > 800 && newPrice <= 1000) {
        // document.getElementById('delivery-charge').innerText = 150;
        DeliveryCharge = 150;
    }
    else if (newPrice >= 1000) {
        // document.getElementById('delivery-charge').innerText = 200;
        DeliveryCharge = 200;
    }
    document.getElementById('delivery-charge').innerText = DeliveryCharge;
    net_price = newPrice + DeliveryCharge;
    document.getElementById('total').innerText = newPrice + DeliveryCharge;
    tax(net_price);
}


const tax = (total) => {
    const taxadd = (total * 0.15);
    document.getElementById('tax').innerText = taxadd.toFixed(2);
    const result = taxadd + total;
    document.getElementById('intotal').innerText = result.toFixed(2);
}

const orderProducts = () => {
    const final = document.getElementById('intotal').innerText;
    alert("Dear Sir," + "\n" + "You have to pay: " + final + "\n" + "Thank You!" + "\n" + "Regrads-" + "\n" + "Twinkles's Shopping Zone");
    document.getElementById('intotal').innerText = 0;
    document.getElementById('total-products').innerText = 0;
    document.getElementById('price').innerText = 0;
    document.getElementById('delivery-charge').innerText = 0;
    document.getElementById('total').innerText = 0;
    document.getElementById('tax').innerText = 0;

    count = 0;
    tprice = 0;
    net_price = 0;
}


const chkout = () => {
    let initial_state = document.getElementById('mycart').style.display;
    if (initial_state == "block") {
        document.getElementById('mycart').style.display = "none";
    }
    else {
        document.getElementById('mycart').style.display = "block";
    }
}