function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0);
    let bridgeWeight = 0;

    while(truck_weights.length > 0 || bridgeWeight > 0) {
         time++;

         bridgeWeight -= bridge.shift();

         if(truck_weights.length > 0) {
             if(bridgeWeight + truck_weights[0] <= weight) {
                 let truck = truck_weights.shift();
                 bridge.push(truck)
                 bridgeWeight += truck;
             }else{
                 bridge.push(0)
             }
         }
    }
    
    return time
}