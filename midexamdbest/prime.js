const { checkCondition } = require('./weather');  
const { optimizeLand } = require('./land');       

const weather = {
    temperature: 25,
    humidity: 60,
    windSpeed: 10                                          
};

const land = [
    ["fertile", "dry", "fertile", "fertile"],
    ["dry", "fertile", "dry", "dry"],
    ["fertile", "fertile", "fertile", "dry"],
    ["barren", "dry", "dry", "dry"]
];


const totalFertilePlots = optimizeLand(land);


const suitableWeather = checkCondition(weather); 
// Result
console.log(`Total fertile plots: ${totalFertilePlots}`);
console.log(`Plots to be planted: ${suitableWeather === 'ideal condition' ? totalFertilePlots : 0}`);

if (suitableWeather !== 'ideal condition') {
    console.log('Warning: The weather is not suitable for planting.');
}
