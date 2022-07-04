module.exports = function toReadable (number) {

  let nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  let arrayOfNumbers = [nums, tens, hundreds];
  
  let result = '';
  
  let string = number + '';
  let array = Array.from(string);
  let reverseArray = array.reverse();
  
  if (number === 0) {
    return 'zero';
  }
  
  if (number < 10) {
    return nums[number - 1];
  }

  if (number <= 19) {
    return teens[number%10];
  }

  if (string.slice(-2) <= 19 && string.slice(-2) >= 10) {
    for (let i = 1; i < array.length; i++) {
      result = teens[number%10];
      result = arrayOfNumbers[i][reverseArray[i] - 1] + ' ' + result;
    }
    return result.toString().trim();
    }
  
  else {
    for (let i = 0; i < array.length; i++) {
      if (reverseArray[i] == 0) {
        continue;
      }
    result = arrayOfNumbers[i][reverseArray[i] - 1] + ' ' + result;
    }
return result.toString().trim();
  }
}

