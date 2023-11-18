// 1. Write a program to print the series 4,6,12,18,30,42,60,72

function isPrimeNumber(n) {
    for (var i = 2; i < n; i++) { 
      if(n % i === 0) return false; 
    }
    return n > 1; 
  }
  
  function printseries(len){
      let arr=[];
      let i=2;
      while(arr.length!=len){
          if( isPrimeNumber(i-1) && isPrimeNumber(i+1)){
              arr.push(i);
          }
          i++;
      }
      return arr;
  }
  
  console.log(printseries(8)); // Here inside type how many numbers you want in series


//   2.Write a program to find all the Palindrome dates that come between the year 01-01-2001 till 31-12-2021. eg. 10-02-2001


function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
  function generatePalindromeDates() {
    const palindromeDates = [];
  
    for (let year = 2001; year <= 2021; year++) {
      for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= 31; day++) {
            let singlemonth=month;
            let singleday = day;
            if(day < 10) singleday="0"+day;
            if(month < 10) singlemonth="0"+month;
            
            if(month == 2 && day > 28) continue;
            
            if(month %2==0 && day > 30 && month != 8) continue;
            
            if(isPalindrome(`${singleday}${singlemonth}${year}`)){
                palindromeDates.push(`${singleday}-${singlemonth}-${year}`)
            }
        }
      }
    }
  
    return palindromeDates;
  }
  
  const palindromeDates = generatePalindromeDates();
  console.log(palindromeDates);
