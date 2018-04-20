
//product names

var ProductOne = "Trip to Amsterdam"

var ProductTwo = "Trip to London"

var ProductThree = "Trip to Paris"

var ProductFour = "Trip to Copenhagen"

//product prices

var PriceProductOne = 1189

var PriceProductTwo = 2360

var PriceProductThree = 2480

var PriceProductFour = 2569

//sum of all prices

var SumPrices = PriceProductOne + PriceProductTwo + PriceProductThree + PriceProductFour

console.log(SumPrices)


 //write string





 document.write("<p> If you want to book a " + ProductOne + " and a " + ProductTwo + " and a " + ProductThree + " and a " + ProductFour + " it costs: " + SumPrices + " EUR. </p>")


 //cost of trips for Golden Card holders 

 var SumGoldenCard = SumPrices*0.9 


 document.write ("<p> If you want to book a " + ProductOne + ", a " + ProductTwo + ", a " + ProductThree + " and a " + ProductFour + " as a GoldenCard-Holder, the price is " + SumGoldenCard + " EUR. </p>")
