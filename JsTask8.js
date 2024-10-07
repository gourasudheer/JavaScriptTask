function fibseries(n){
    let fibseries = [0,1];
    for(i=2; i<n; i++){
        fibseries.push(fibseries[i-1]+fibseries[i-2]);
    }
    let reversefibseries = fibseries.reverse();
    console.log("Fibseries in reverse order");
    console.log(reversefibseries.join(", "));
}
fibseries(10);