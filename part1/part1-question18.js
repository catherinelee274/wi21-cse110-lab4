let statistics = {
    redCars:21,
    blueCars:45,
    greenCars:12,
    raceCars: 5,
    blackCars:40,
    rareCars:2
};

for (const [key, value] of Object.entries(statistics)) {
    if(key[0] == 'r' || value%2 != 0){
        console.log(value);
    }
}