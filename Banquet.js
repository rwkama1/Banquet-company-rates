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
module.exports={Banquet}