
// Created by: Graydon Ezzeddin
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict";

  // This function calculates the factorial of userNum 
function displayNumbers() { 

  // Declare counter
  let counter = 0 

  // Declare factorial
  let factorial = 1

  // Declare output
  let output = ""

  // Declare user number
  let userNum = parseInt(document.getElementById('user-number').value )

// If else statments for if user enters a negative or nothing
  if (isNaN(userNum) || userNum < 0)  {
    output = "Please enter a positive integer"
  } else {
// do while loop to calculate factorial
    do{ factorial = factorial * (counter+1) ; 
      counter++ 
    } while (counter<userNum)
    output = "Your factorial is: " + factorial
  }


  // DISPLAY PRODUCT
  document.getElementById("display-numbers").innerHTML = output 
  
}