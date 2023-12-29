class UberClaculator{
    constructor(distance, time, surgeCharge=1){
        this.distance = distance;
        this.time = time;
        this.surgeCharge = surgeCharge;
    }

    calculateFare(minCharge = 50, ratePerKM = 7, ratePerMin = 1){
        //minimum charge
        let baseCharge = minCharge * this.surgeCharge;

        //for distance greater than 5 KM, charge of 7 per KM is applied
        let rideCharge = 0
        if(this.distance>5){
            rideCharge = (this.distance-5) * ratePerKM;
        }

        //for waiting, charge of 1 per min is applied
        let waitCharge = this.time * ratePerMin;

        //total fare is the sum of baseCharge, rideCharge and waitCharge
        const totalFare = baseCharge + rideCharge + waitCharge;

        return totalFare;
    }
}

let trip1 = new UberClaculator(10, 5)

console.log(trip1.calculateFare());
//Expected output: 90