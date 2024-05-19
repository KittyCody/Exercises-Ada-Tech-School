const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 8;
    case "Tuesday":
      return 7;
    case "Wednesday":
      return 5;
    case "Thursday":
      return 6;
    case "Friday":
      return 10;
    case "Saturday":
      return 11;
    case "Sunday":
      return 9;
  }
};

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

function getIdealSleepHours() {
  const idealHours = 10;
  return idealHours * 7;
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep !");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        (actualSleepHours - idealSleepHours) +
        "hour(s) more sleep than you needed this week...get up !"
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week...Get some rest!"
    );
  }
}
calculateSleepDebt();
