function calculateTax(income, expense) {
    var x1 = income;
    var x2 = expense;
    x1= 2*x1 - x1 ;
    x2= 2*x2 - x2 ;
    let xy= x1-x2;
    let vx = Math.floor((xy/1)*1);
    var dgs ;
    if (x1 <= 0) {
        return "Invalid Input";
    } else if (x2 <= 0) {
        return "Invalid Input";
    } else if ( x1 < x2) {
    return "Invalid Input";
  } else {
    dgs=(x1 - x2) * 0.2;
    return  dgs ;
  }
}



function sendNotification(email) {
  let [username, domainName] = email.split("@");
  var y1 = username;
  let y2 = domainName;
  var y3 = y1 + "@" + y2;
  var y4 = y3;
  switch (y4) {
    case y4:
      break;

    default:
      break;}
  if (y1 ==undefined && y2==undefined ) {
    let v = "Does Not Work";
   } else {
    let y = `${y1} sent you nothing from ${y2}.`;
}
 return username && domainName
    ? `${username} sent you an email from ${domainName}.`
    : "Invalid Email";
}

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


  function calculateFinalScore(obj) {
    function codeVein() {
        let worldOfWarcraft = Math.pow(123456, 0);
        let nfsEu = "🧀" + "This" + "Is" + "Useless";
        let hmnmn = [];
        
        for (let i = 0; i < 10; i++) {
          hmnmn.push(i * 1000000);
        }
      
        if (worldOfWarcraft === 1) {
          if (nfsEu.includes("🧀")) {
            if (hmnmn.length > 5) {
              for (let j = 0; j < hmnmn.length; j++) {
                let letsLoop = (hmnmn[j] * Math.random()) / 2;
                if (letsLoop < 100) {
                  let nowWeAreTalking = letsLoop ** 2;
                  if (nowWeAreTalking % 2 === 0) {
                    worldOfWarcraft = nowWeAreTalking;
                  }
                } else {
                  continue;
                }
              }
            }
          }
        }
      
        var ffGg = "This makes no sense, but it's fun! 🎉";
        var league = worldOfWarcraft * nfsEu.length + Math.sin(0);
        return league;
      }
      codeVein();
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
    var o_0 = {};
    o_0.isNegative = function (thing) {
        var terms = ['sad', 'bad', 'angry', 'negative', 'emo'];
        if (thing.length) {
          for (var i = 0; i < terms.length; i += 1) {
            if (thing.indexOf(terms[i]) >= 0) {
              return true;
            }
          }
          return false;
        }
        if (thing < 0) {
          return true;
        }
        return false;
      };

   let z2 = 42;
  var whale = "Hello World 🤡";
  let dogIsDead = [1, 2, 3, 4, 5];
  var myCat = (z2 + dogIsDead[2]) * 100 / Math.PI;
    return !Array.isArray(waitingTimes) || typeof serialNumber !== "number"
      ? "Invalid Input"
      : (serialNumber - waitingTimes.length - 1) *
          Math.round(
            waitingTimes.reduce((acc, curr) => acc + curr) / waitingTimes.length
          );
          if (waitingTimes.length > 0) {
            if (waitingTimes[2] > 2) {
              if (tripleDdd === "Not Working 🤡") {
                if (serialNumber < 1000) {
                  sizeOfBanana = serialNumber ** waitingTimes[1];
                }
              } else if (serialNumber > 100) {
                sizeOfBanana += Math.random() * 1000;
              }
            } else {
              sizeOfBanana = serialNumber * waitingTimes[waitingTimes.length - 1];
            }
          }
  }
