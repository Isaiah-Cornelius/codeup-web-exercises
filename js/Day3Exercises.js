//These exercises are located at https://java.codeup.com/javascript-i/introduction/working-with-data-types-operators-and-variables/

console.log("Exercises");
console.log("1. For each of the following code blocks, read the code and predict what the result of evaluating it would be, then execute the statement(s) in the Chrome console.")

console.log("Question 1.1:")
console.log('var a = 1; var b = a++; var c = ++a. What is the value of a, b, and c?')
var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
console.log('I predict var a will equal 3, var b will equal 1, and var c will equal 3')
console.log('var a = ' + a + ', var b = ' + b + ', and var c = ' + c + '.')

console.log('Question 1.2:')
console.log('var d = "hello"; var e = false; d++; e++;')
var d = "hello";
var e = false;

d++;
e++;
console.log('I predict that var d will evaluate to \'NaN\' and var e will evaluate to the number 1 because boolean false is 0.')
console.log('var d = ' + d +'; var e = ' + e)

console.log('Question 1.3:')
console.log('var perplexed; // perplexed is undefined (no value is assigned); perplexed + 2;')
var perplexed; // perplexed is undefined (no value is assigned)
//console.log(perplexed + 2);
console.log('I predict var perplexed will still be undefined.')
console.log('perplexed + 2 = NaN')

console.log('Question 1.4:')
console.log('var price = 2.7; price.toFixed(2);')
var price = 2.7;
price.toFixed(2);
console.log('I predict that var price will stay the same but the expression price.toFixed(2) will show 2.70')
console.log('price = ' + price +'; price.toFixed(2) = ' + price.toFixed(2) + '.')

console.log('Question 1.5:')
console.log('var price = "2.7"; price.toFixed(2);')
var price = "2.7";
//price.toFixed(2);
console.log('I predict that the function will error because it is a number function acting on a string.')
console.log('price.toFixed(2) = commented out to continue the exercise')//price.toFixed(2) + '.')

console.log('Question 1.6: NaN Questions')

console.log('Question 1.6.1: isNaN(0); I predict False')
console.log('isNaN(0) = ' + isNaN(0))

console.log('Question 1.6.2: isNaN(1); I predict False')
console.log('isNaN(1) = ' + isNaN(1))

console.log('Question 1.6.3: isNaN(""); I predict True')
console.log('isNaN(" ") = ' + isNaN(" "))
console.log('Formatting these are taking too long but I did see string concatenation effecting the expression values because of this effort so be careful of that as well.')
console.log('Question 1.6.4: isNaN("string"); I predict True; True')
console.log('Question 1.6.5: isNaN("0"); I predict False; False')
console.log('Question 1.6.6: isNaN("1"); I predict False; False')
console.log('Question 1.6.7: isNaN("3.145"); I predict False; False')
console.log('Question 1.6.8: isNaN(Number.MAX_VALUE); I predict False; False')
console.log('Question 1.6.9: isNaN(Infinity); I predict False; False')
console.log('Question 1.6.10: isNaN("true"); I predict False; True')
console.log('Question 1.6.11: isNaN(true); I predict False; False;')
console.log('Question 1.6.12: isNaN("false"); I predict True; True')
console.log('Question 1.6.13: isNaN(false); I predict False; False')
console.log('Question 1.6.13: NaN == NaN; I predict False; False')
console.log('Question 1.7.1: !true; I predict False; False')
console.log('Question 1.7.2: !false; I predict True; True')
console.log('Question 1.7.3: !!true; I predict True; True')
console.log('Question 1.7.4: !!false; I predict False; False')
console.log('Question 1.7.5: !!0; I predict False; False')
console.log('Question 1.7.6: !!-0; I predict False; False')
console.log('Question 1.7.7: !!1; I predict True; True')
console.log('Question 1.7.8: !!-1; I predict True; True')
console.log('Question 1.7.9: !!0.1; I predict type error; True; It seems any positive or negative number evaluates as boolean true')
console.log('Question 1.7.10: !!"hello"; I predict type error; True; It seems any string with characters evaluates as boolean true')
console.log('Question 1.7.11: !!""; I predict False; False; "" is False but with a space (" ") is true')
console.log('Question 1.7.12: !!\'\'; I predict False; False;')
console.log('Question 1.7.13: !!"false"; I predict True; True')
console.log('Question 1.7.14: !!"0"; I predict False; True')
console.log('Question 2')
var sample = "Hello Codeup";
console.log(sample.length)
console.log(sample.toUpperCase())
console.log(sample.toLowerCase())
console.log(sample = sample.slice(0,1).toUpperCase() + sample.slice(1,6) + sample.slice(6,7).toUpperCase() + sample.slice(7) + " Students")
console.log(sample = sample.replace("Students", "Class"))
console.log("sample.indexOf(\"c\") evaluates as '-1'. sample.charAt(-1) evaluates as ' ' because there are no lower case 'c' characters. Any negative numbers in the .charAt() function evaluate as ' '.")
console.log("sample.indexOf(\"C\") evaluates as: " + sample.indexOf('C') + " Note: Needed escape characters to create this console.log()")
console.log("Used substring() to retrieve 'Codeup'. sample.substring(6, 12): " + sample.substring(6, 12))
console.log("Question 3")
console.log("Question 3.1")
console.log("var TheLittleMermaid = 3, var BrotherBear = 5, var Hercules = 1")
console.log("var TotalCostOfMovies = (TheLittleMermaid + BrotherBear + Hercules) * 3")
var TheLittleMermaid = 3, BrotherBear = 5, Hercules = 1
var TotalCostOfMovies = (TheLittleMermaid + BrotherBear + Hercules) * 3
console.log(TheLittleMermaid)
console.log(TotalCostOfMovies)
console.log("$" + TotalCostOfMovies.toFixed(2))
console.log("Question 3.2")
var GooglePay = 400, AmazonPay = 380, FacebookPay = 350
var GoogleHoursWorked = 6, AmazonHoursWorked = 4, FacebookHoursWorked = 10
var TotalDollarsThisWeek = (GooglePay * GoogleHoursWorked) + (AmazonPay * AmazonHoursWorked) + (FacebookPay * FacebookHoursWorked)
console.log("$" + TotalDollarsThisWeek)
console.log("Question 3.3")
console.log("var ClassFull = false, ClassConflictWithSchedule = false, CanAttend = !ClassFull && !ClassConflictWithSchedule evaluates as True")
console.log("Question 3.4")
var ItemCount = 1, OfferExpired = true, PremiumMember = true
var OfferApplied = (PremiumMember && !OfferExpired) || (ItemCount >= 2 && !OfferExpired)
console.log(OfferApplied)
console.log("Question 4")
var username = 'codeup';
var password = 'notastrongpassword';
var MinPasswordLength = (password.length >=5);
console.log("Username : '" + username + "'")
console.log("Password : '" + password + "'")
console.log("MinPasswordLength is greater than or equal to 5 characters : " + MinPasswordLength)
var PasswordIncludesUsername = (password.indexOf(username) >= 0);
console.log("PasswordIncludesUsername : " + PasswordIncludesUsername);
var MaxUsernameLength = (username.length <= 20)
console.log("MaxUsernameLength is less than or equal to 20 characters : " + MaxUsernameLength)
var WhiteSpaceCheckUsernamePasswordPass = ((username.charAt(0) != " ") && (username.charAt(username.length-1) != " ")) && ((password.charAt(0) != " ") && (password.charAt(password.length-1) != " "))
console.log("WhiteSpaceCheckUsernamePasswordPass: Both Username and Password do not start or end with whitespace: " + WhiteSpaceCheckUsernamePasswordPass)
console.log("Password.charAt(-1) : '" + password.charAt(password.length-1) + "'")
console.log("Username.charAt(-1) : '" + username.charAt(username.length-1) + "'")
var UsernameAndPasswordPass = MinPasswordLength && !PasswordIncludesUsername && MaxUsernameLength && WhiteSpaceCheckUsernamePasswordPass;
console.log("UsernameAndPasswordPass : " + UsernameAndPasswordPass)















