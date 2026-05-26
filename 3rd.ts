const getBill = (price: number, deliveryCharge: number, couponCode: string): number => {
    return price + deliveryCharge;
}

let totalBill = getBill(100, 20, "gm");

console.log(totalBill);