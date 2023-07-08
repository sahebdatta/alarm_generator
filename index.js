const displayTime = document.getElementById("time");
const alarmMessages = ["TransformationError", "Z_PathLimitPositiveExceeded", "FollowingError2", "AxesGroupInErrorStop", "AxesGroupNotHomed"]
const alarmCodes = [21004, 17039, 20503, 21222, 21258]
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();

function myFunction() {
  let randomCode = Math.floor(Math.random()*(alarmMessages.length))
  let time = new Date();
  document.getElementById("alarm-banner").style.display = "block";
  document.getElementById("message").innerHTML = `<strong>Alarm | </strong> ${time.toLocaleTimeString("en-US", { hour12: false })} | ${alarmCodes[randomCode]} | ${alarmMessages[randomCode]} !`
}