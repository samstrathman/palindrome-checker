function palindrome(str) {
  let arr = str.toLowerCase().split(""); //split string into array for easier processing
  let processedArr = arr.filter(elem => /[a-z0-9]/.test(elem)); //filter out non-alphanumeric characters
  let backwardsI = processedArr.length - 1;

  for(let i = 0; i <= processedArr.length / 2; i++){
    if(processedArr[i] !== processedArr[backwardsI]){
      return false;
    }
    backwardsI--;
  }
  return true;
}

console.log(palindrome("almostomla"));