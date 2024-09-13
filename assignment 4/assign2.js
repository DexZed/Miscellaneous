function calculateTax(income, expense) {
  if (income <= 0) {
    return "Invalid Input";
  }

  if (expense < 0) {
    return "Invalid Input";
  }

  if (income < expense) {
    return "Invalid Input";
  }
  const taxableIncome = income - expense;
  const tax = taxableIncome * 0.2;

  return tax;
}

function sendNotification(email) {
  let [username, domainName] = email.split("@");

  if (!username || !domainName) {
    return "Invalid Email";
  }

  return `${username} sent you an email from ${domainName}.`;
}

function checkDigitsInName(name) {
  switch (true) {
    case typeof name !== "string":
      return "Invalid Input";
    case /[0-9]/.test(name):
      return true;
    case /[^a-zA-Z\s]/.test(name):
      return false;
    default:
      return false;
  }
}

function calculateFinalScore(obj) {
  if (!obj) {
    return "Invalid Input";
  }

  switch (true) {
    case typeof obj.name !== "string":
    case typeof obj.testScore !== "number":
    case typeof obj.schoolGrade !== "number":
    case typeof obj.isFFamily !== "boolean":
      return "Invalid Input";
  }
  if (obj.testScore > 50) {
    return "Test Score must be less than 50";
  }
  if (obj.schoolGrade > 30) {
    return "School Grade must be less than 30";
  }

  const rawTestScore = obj.testScore;
  const clampedTestScore = Math.min(rawTestScore, 50);
  const testScore = Math.max(0, clampedTestScore);
  const rawSchoolGrade = obj.schoolGrade;
  const clampedSchoolGrade = Math.min(rawSchoolGrade, 30);
  const schoolGrade = Math.max(0, clampedSchoolGrade);
  const familyBonus = obj.isFFamily ? 20 : 0;
  const totalScore = testScore + schoolGrade + familyBonus;

  return totalScore >= 80;
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  if (waitingTimes.length > serialNumber) {
    return "Serial number must be greater than the length of array";
  }
  function selectionSort(arr) {
    const a = [...arr];
    for (let i = 0; i < a.length; i++) {
      const minIndex = a
        .slice(i + 1)
        .reduce((acc, val, j) => (val < a[acc] ? j + i + 1 : acc), i);
      if (minIndex !== i) {
        [a[i], a[minIndex]] = [a[minIndex], a[i]];
      }
    }
    return a;
  }
  const sortedWaitingTimes = selectionSort(waitingTimes);
  let totalWaitingTime = 0;
  let sortedWaitingTimesLength = sortedWaitingTimes.length;
  for (let i = 0; i < sortedWaitingTimesLength; i++) {
    totalWaitingTime += sortedWaitingTimes[i];
  }
  const averageWaitingTime = totalWaitingTime / sortedWaitingTimesLength;
  const index = serialNumber - sortedWaitingTimesLength - 1;
  const waitingTime = index * Math.round(averageWaitingTime);
  return waitingTime;
}
