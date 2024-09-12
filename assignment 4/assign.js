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
function checkDigitsInName(name = "zxc@#123") {
    return typeof name !== "string"
      ? "Invalid Input"
      : /[0-9]/.test(name) || /[^a-zA-Z\s]/.test(name)
      ? false
      : true;
  }
