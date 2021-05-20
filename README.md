# Algorithm for a company dedicated to offering banquets

## Description

The rates are as follows: the cost of a plate per person is USD 4.77, but if the number of people is greater than 200 but less than or equal to 300, the cost is USD 4.27, for more than 300 people the cost per plate is USD 3.77.
Determine the budget that must be presented to clients who wish to hold an event.

## Solution

```Javascript

class Banquet
{
    constructor(pnumberofdishes)
    {
        this.number_of_dishes=pnumberofdishes;
    }
    calculate_customer_budget=()=>
    {
        let dishes=this.number_of_dishes;
        let total=0;
        if(dishes>300)
        {
            total=3.77*dishes;
        }
        else
        {
            if(dishes>200&&dishes<=300)
            {
               total=4.27*dishes; 
            }
            else
            {
                total=4.77*dishes;
            }
        }
        return total;
    }
   
}

```
## Usage

```Javascript

 let Banquet=require("./Banquet").Banquet;

let banquet=new Banquet(350);
console.log("Number of dishes is: "+banquet.number_of_dishes);
console.log("                                              ");
console.log("Total to pay is: "+banquet.calculate_customer_budget());

```