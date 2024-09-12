// function calculateTax(income, expense) {
//   return income <= 0 || expense < 0 || income < expense
//     ? "Invalid Input"
//     : (income - expense) * 0.2;
// }

// function sendNotification(email) {
//   let [username, domainName] = email.split("@");
//   return username && domainName
//     ? `${username} sent you an email from ${domainName}.`
//     : "Invalid Email";
// }
// function checkDigitsInName(name) {
//     return typeof name !== "string"
//       ? "Invalid Input"
//       : /[0-9]/.test(name) || /[^a-zA-Z\s]/.test(name)
//       ? false
//       : true;
//   }

function calculateFinalScore( obj ) {
  if (!obj || typeof obj.name !== "string" || typeof obj.testScore !== "number" || 
    typeof obj.schoolGrade !== "number" || typeof obj.isFFamily !== "boolean") {
  return "Invalid Input";
}
  let score = Math.max(0,Math.min(obj.testScore,50)) + Math.max(0,Math.min(obj.schoolGrade,30)) + (obj.isFFamily ? 20 : 0);
  return score >=80; 
}
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
