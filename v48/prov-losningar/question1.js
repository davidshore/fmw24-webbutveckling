// 1. Trängselskatt (3p)
// Skriv en funktion totalTax som räknar ut den totala trängselskatten som ska betalas
// för en array av bil-objekt. Varje bil-objekt har ett registreringsnummer och ett
// klockslag då de passerade betalstationen.

// Här är kostnader för olika tider:
// 6:00 - 6:59: 30 kr
// 7:00 - 7:59: 45 kr
// 8:00 - 8:59: 30 kr
// 9:00 - 18:59: 20 kr
// Övriga tider är gratis.

// Använd funktionen getHour för att plocka ut timmen ur ett klockslag.
// T.ex. "17:45" ger resultatet 17.
function getHour(time) {
  return parseInt(time.split(":")[0]);
}

// Arrayen av bilar följer denna struktur:
const taxedCars = [
  { registrationNumber: "TUU893", time: "6:30" }, // split("6:30") => [6, 30]
  { registrationNumber: "YNK023", time: "7:10" },
  { registrationNumber: "BHN113", time: "8:30" },
  { registrationNumber: "LOP733", time: "18:02" },
  { registrationNumber: "MGY803", time: "23:30" },
];

function totalTax(cars) {
  // Din kod här
  let sum = 0;
  //loop
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const time = car.time;
    const hour = getHour(time);

    if (hour == 6 || hour == 8) {
      sum += 30;
    } else if (hour == 7) {
      sum += 45;
    } else if (hour >= 9 && hour < 19) {
      sum += 20;
    }
  }
  return sum;
}

function totalTax2(cars) {
  // Din kod här
  let sum = 0;
  //loop
  // for (let i = 0; i < cars.length; i++) {
  //   const car = cars[i];

  cars.forEach((car) => {
    const time = car.time;
    const hour = getHour(time);

    if (hour == 6 || hour == 8) {
      sum += 30;
    } else if (hour == 7) {
      sum += 45;
    } else if (hour >= 9 && hour < 19) {
      sum += 20;
    }
  });
  // }
  return sum;
}

console.log("totalTax", totalTax(taxedCars));

module.exports = totalTax;
