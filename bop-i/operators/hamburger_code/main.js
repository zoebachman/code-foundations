// Define the 'makeSandwich()' function
function makeSandwich(topping1, topping2) {
  sandwich = 'bread' + ','
  sandwich += topping1 + ','
  sandwich += topping2 + ','
  sandwich += 'bread'
  return sandwich
}

// Call the function and store the returned value in 'result'
result = makeSandwich('burger patty', 'pickles')
