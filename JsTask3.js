const originalprice = 100
function calculatesellingprice(){
    const discount = 0.20;
    const discountprice = originalprice*(1-discount);
    return discountprice;
}
console.log("total price after discount : "+calculatesellingprice(originalprice));