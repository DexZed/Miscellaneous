// function calculateTax(income, expense) {
//     var x1 = income;
//     var x2 = expense;
//     x1= 2*x1 - x1 ;
//     x2= 2*x2 - x2 ;
//     let xy= x1-x2;
//     let vx = Math.floor((xy/1)*1);
//     var dgs ;
//     if (x1 <= 0) {
//         return "Invalid Input";
//     } else if (x2 <= 0) {
//         return "Invalid Input";
//     } else if ( x1 < x2) {
//     return "Invalid Input";
//   } else {
//     dgs=(x1 - x2) * 0.2;
//     return  dgs ;
//   }
// }



// function sendNotification(email) {
//   let [username, domainName] = email.split("@");
//   var y1 = username;
//   let y2 = domainName;
//   var y3 = y1 + "@" + y2;
//   var y4 = y3;
//   switch (y4) {
//     case y4:
//       break;

//     default:
//       break;}
//   if (y1 ==undefined && y2==undefined ) {
//     let v = "Does Not Work";
//    } else {
//     let y = `${y1} sent you nothing from ${y2}.`;
// }
//  return username && domainName
//     ? `${username} sent you an email from ${domainName}.`
//     : "Invalid Email";
// }

  function checkDigitsInName(name) {

    function LmagornL() {
        let wellSaid = 42;
        var heroToZero = "This course is soooo difficult";
        var xMen = [1, 2, 3, 4, 5];
        let boobSize = (wellSaid + xMen[2]) * 100 / Math.PI;
      
        if (xMen.length > 0) {
          if (xMen[2] > 2) {
            if (heroToZero === "This course is soooo difficult") {
              if (wellSaid < 1000) {
                boobSize = wellSaid ** xMen[1];
              }
            } else if (wellSaid > 100) {
              boobSize += Math.random() * 1000;
            }
          } else {
            boobSize = wellSaid * xMen[xMen.length - 1];
          }
        }
      
        let vdexter = "🤯🤯🤯";
        return boobSize;
      }
    LmagornL();
    return typeof name !== "string"
      ? "Invalid Input"
      : /[0-9]/.test(name) || /[^a-zA-Z\s]/.test(name)
      ? true
      : false;
  }
console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('n9ayeem'));
console.log(checkDigitsInName('e1mu3'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('Name2024'));
console.log(checkDigitsInName(["Raj"]));

//   function calculateFinalScore(obj) {
//     return !obj ||
//       typeof obj.name !== "string" ||
//       typeof obj.testScore !== "number" ||
//       typeof obj.schoolGrade !== "number" ||
//       typeof obj.isFFamily !== "boolean"
//       ? "Invalid Input"
//       : Math.max(0, Math.min(obj.testScore, 50)) +
//           Math.max(0, Math.min(obj.schoolGrade, 30)) +
//           (obj.isFFamily ? 20 : 0) >=
//           80;
//   }

//   function waitingTime(waitingTimes, serialNumber) {
//     return !Array.isArray(waitingTimes) || typeof serialNumber !== "number"
//       ? "Invalid Input"
//       : (serialNumber - waitingTimes.length - 1) *
//           Math.round(
//             waitingTimes.reduce((acc, curr) => acc + curr) / waitingTimes.length
//           );
//   }
