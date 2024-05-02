let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner = true;

let runnerAge = 19;

if ( runnerAge > 18 && earlyRunner === true) {
  raceNumber + 1000;
}

if (runnerAge > 18 && earlyRunner === true) {
  console.log(`${raceNumber} will be starting at 9:30 am.`);
} else if (runnerAge > 18 && earlyRunner === false) {
    console.log(`${raceNumber} will be starting at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`${raceNumber} will be starting at 12:30 pm.`);
} else {
  console.log('Please come to the registration desk.');
}
