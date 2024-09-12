function calculateTax(income, expense) {
  return income <= 0 || expense < 0 || income < expense
    ? "Invalid Input"
    : (income - expense) * 0.2;
}

function sendNotification(email) {
  let [username, domainName] = email.split("@");
  return username && domainName
    ? `${username} sent you an email from ${domainName}.`
    : "Invalid Email";
}
function checkDigitsInName(name) {
  return typeof name !== "string"
    ? "Invalid Input"
    : /[0-9]/.test(name) || /[^a-zA-Z\s]/.test(name)
    ? false
    : true;
}

function calculateFinalScore(obj) {
  return !obj ||
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
    ? "Invalid Input"
    : Math.max(0, Math.min(obj.testScore, 50)) +
        Math.max(0, Math.min(obj.schoolGrade, 30)) +
        (obj.isFFamily ? 20 : 0) >=
        80;
}

function waitingTime(waitingTimes, serialNumber) {
  return !Array.isArray(waitingTimes) || typeof serialNumber !== "number"
    ? "Invalid Input"
    : (serialNumber - waitingTimes.length - 1) *
        Math.round(
          waitingTimes.reduce((acc, curr) => acc + curr) / waitingTimes.length
        );
}
