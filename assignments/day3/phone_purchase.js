/*

Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
Finally, check the amount against your bank account balance to see if you can afford it or not.
You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.

*/

const tax_rate = .0875;
const phone_price = 800;
const accessory_price = 50;

let bank_account = 1000;        // total money that can be spent
let spending_threshold = 900;   // money that can be spent on one phone

let current_phone_total = 0;
let spending_total = 0;

let affordable = false;

while (spending_total + phone_price < bank_account) {
  //buy a phone
  current_phone_total = current_phone_total + phone_price;
  console.log("purchased phone for " + current_phone_total);

  //while the price of this phone is under the threshold
  while (current_phone_total + accessory_price <= spending_threshold) {
    current_phone_total = current_phone_total + accessory_price;
  }
  console.log("with accessories: " + current_phone_total);

  //after buying accessories, add to spending_total, reset current_phone_total
  spending_total = spending_total + current_phone_total;
  current_phone_total = 0;
}

console.log("all phones + accessories: " + spending_total);

//calc tax
spending_total = spending_total * (1 + tax_rate);

console.log("total cost after tax " + spending_total);

if (spending_total < bank_account){
  affordable = true;
}

if (affordable){
  console.log("You can make this purchase after taxes");
}
else {
  console.log("You cannot make this purchase afer taxes");
}
