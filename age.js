let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

function validation(user) {
  const userSplit = user.split("-");
  const useryy = userSplit[0];
  const intyy = parseInt(useryy);
  const usermm = userSplit[1];
  const intmm = parseInt(usermm);
  const userdd = userSplit[2];
  const intdd = parseInt(userdd);
  if (
    !isNaN(userdd) &&
    intdd < 32 &&
    intdd > 0 &&
    !isNaN(usermm) &&
    intmm < 13 &&
    intmm > 0 &&
    !isNaN(useryy) &&
    intyy > 0
  ) {
    return true;
  } else {
    return false;
  }
}
const user = prompt(
  "Please enter a date in the format.\nYear-month-day such as 2000-05-22\n"
);
if (!validation(user)) {
  console.log("Not valid date, please run program again");
}

const userconversion = Date.parse(user);
const todayconversion = Date.parse(today);
const diff = Math.abs(todayconversion - userconversion);
const formateddiff = diff / (1000 * 60 * 60 * 24 * 365.25);
console.log(
  "The difference between todays date and your entered date in years is " +
    formateddiff
);
