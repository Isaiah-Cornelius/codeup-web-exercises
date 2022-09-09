"use strict";

console.log("Hello from external JavaScript")
alert("Welcome to my Website!")
let FavColor = prompt("What is your favorite color?")
alert(FavColor + " is my favorite color too!")

let TheLittleMermaidRentalDays = prompt("How many days did you rent The Little Mermaid?");
let BrotherBearRentalDays = prompt("How many days did you rent Brother Bear?");
let HerculesRentalDays = prompt("How many days did you rent Hercules?");
let RentalCostPerDay = 3.00
let TotalRentalCost = (parseInt(TheLittleMermaidRentalDays) + parseInt(BrotherBearRentalDays) + parseInt(HerculesRentalDays)) * RentalCostPerDay;
alert("Your cost for renting movies is " + RentalCostPerDay + " per day. Your total cost will be : $" + TotalRentalCost.toFixed(2));

let GooglePay = 400;
let AmazonPay = 380;
let FacebookPay = 350;
let GoogleHoursWorked = prompt("How many Google hours worked this week?");
let AmazonHoursWorked = prompt("How many Amazon hours worked this week?");
let FacebookHoursWorked = prompt("How many Facebook hours worked this week?");
let WeeklyPay = (parseFloat(GoogleHoursWorked) * GooglePay) + (parseFloat(AmazonHoursWorked) * AmazonPay) + (parseFloat(FacebookHoursWorked) * FacebookPay);
alert("Your Google rate is $" + GooglePay + " per hour. Your Amazon rate is $" + AmazonPay + " per hour. Your Facebook rate is $" + FacebookPay + " per hour. You will be paid $" + WeeklyPay.toFixed(2) + " for your work this week.");

let ClassNotFull = confirm("Select 'OK' if there is room in the class. Select 'Cancel' if the class is full.");
let NoConcflict = confirm("Do you have time in your schedule to attend this class? Select 'OK' if there are no conflicts in your schedule. Select 'Cancel' if this class conflicts with your schedule.");
let CanAttendClass = ClassNotFull && NoConcflict;
alert("It is " + CanAttendClass + " that you can attend this class.");


console.log("Question 3.4")
var ItemCount = 1, OfferExpired = true, PremiumMember = true
var OfferApplied = (PremiumMember && !OfferExpired) || (ItemCount >= 2 && !OfferExpired)
console.log(OfferApplied)

let OfferActive = confirm("Is the offer active? Select 'OK' if the offer is active. Select 'Cancel' if the offer is expired.");
let PremiumMember = confirm("Are you a Premium Member? Select 'OK' if you are a Premium Member. Select 'Cancel' if you are not a Premium Member.");
let ItemCount = confirm("Select 'OK' if you are purchasing two or more items, otherwise, select 'Cancel'.");
let OfferApplied = OfferActive && (PremiumMember || ItemCount);
alert("It is " + OfferApplied + " that the product offer has been applied.");