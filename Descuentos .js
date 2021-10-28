const Cupones  = [
    {name: "30% de descuento en Bicicletas", discount: 30},
    {name: "20% de descuento en Laptops", discount: 20},
    {name: "15% de descuento en Smartphones", discount: 15},
];

function calcularValorConDescuento() {
    const precioOriginal = document.getElementById("Price");
    const precio = parseInt(precioOriginal.value);
    const coupon = document.getElementById("Coupon");
    const couponValue = coupon.value;

    const isUsersCouponValid = function (Cupon){
        return Cupon.name === couponValue;
    }

    const userCoupon = Cupones.find(isUsersCouponValid);

    if(!userCoupon){
        alert("Tu cupon " + couponValue + " no es valido");
    }
    else {
        const descuento = userCoupon.discount / 100;
        const devolverPreciofinal = priceWithDiscount(precio, descuento);
        const resultP = document.getElementById("ResultPr");
        resultP.innerText = "El precio con descuento es: $" + devolverPreciofinal.toFixed(2) + " pesos";
    }
}

function priceWithDiscount (price, descuentototal){
    const value = price - (price * descuentototal);
    return value;
}
