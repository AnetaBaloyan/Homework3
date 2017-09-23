//1- takes at least 3 arguments and returns
// the result of some set of operations using those arguments
const averageAge = function(age1, age2, age3) {
  return (age1+age2+age3)/3;  
};

//2- takes no arguments and returns something
const Pi = function() {
    return 3.14;
};

//3- takes arguments, does something but does not return anything
const maturityCheck = function(age) {
    if(age<18) {
        window.alert('Go home and grow up, kid!');
    } else {
        window.alert('Yes Sir?');
    };
};

//4- takes as argument first name and last name and 
//returns the full name of the person
const fullName = function(name, surname) {
    return name+' '+surname;
};

//that takes 3 strings and returns the string that is the longest
const theLongestStr = function(str1, str2, str3) {
    if(str1.size>=str2.size) {
        if(str1.size>=str3.size) {
            return str1;
        } else {
            return str3;
        };
    } else if(str2.size>=str3.size) {
        return str2;
    } else {
        return str3;
    };  
};

//takes two numbers and returns 0 if they are equal, 
//1 if the first is larger and -1 if the second is larger
const blub = function(num1, num2) {
    if(num1===num2) {
        return '0';
    } else if(num1>num2) {
        return '1';
    } else {
        return '-1';
    };
};

//takes 3 inputs and returns the first truethy value
const firstTruethy = function(input1, input2, input3) {
      const result = (input1 || input2 || input3);
      if (!!result) {
          return result;
      } else {
          return 'no thruethy input';
      };

};
