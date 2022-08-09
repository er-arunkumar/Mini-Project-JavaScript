// Mobile Buying Suggestion Program using If Condition

let savingAmount = 80000;

if (savingAmount > 60000) {
  console.log("Your Amount is " + savingAmount + ". You're Buying Iphone.");
} else if (savingAmount > 10000) {
  console.log(
    "Your Amount is " + savingAmount + ". You're Buying Android Mobile."
  );
} else if (savingAmount > 5000 && savingAmount <= 10000) {
  console.log(
    "Your Amount is " + savingAmount + ". You're Buying Keypad Mobile."
  );
} else {
  console.log(
    "Your Amount is " + savingAmount + ". You can't offered mobile phone now!"
  );
}

// Mobile Buying Suggestion Program using switch case

let amount = 23000;

switch (true) {
  case amount > 60000:
    console.log("Your Amount is " + amount + ". You're Buying Iphone.");
    break;
  case amount >= 10000:
    console.log("Your Amount is " + amount + ". You're Buying Android Mobile.");
    break;
  case amount >=5000 && amount < 10000:
    console.log("Your Amount is " + amount + ". You're Buying Keypad Mobile.");
    break;
  case amount < 5000:
    console.log(
      "Your Amount is " + amount + ". You can't offered mobile phone now!");
    break;
  default:
    console.log("Enter Vaild Number.");
}
