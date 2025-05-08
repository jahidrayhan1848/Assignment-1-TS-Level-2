{

    function formatString(input: string, upper?: boolean) {
    
        if (upper === true || upper=== undefined) {
            const result = input.toUpperCase()
             return result;
        }
        else {
            const low = input.toLowerCase()
            return low
       } 

    }
      

    function filterByRating(items: Book[]) : Book [] {
        const result = items.filter((item) => item.rating >= 4)
        return result

    }
    
 

    function concatenateArrays<T>(...arrays: T[][]) : T[] {
        const newArray : T[] = [];
        for ( const arr of arrays) {
           newArray.push(...arr)
    
        }
        return newArray



    }
 
  
    class Vehicle {
        private make: string;
         private year: number;


        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
            
        }

        getInfo() {
            return `Make : ${this.make}, Year: ${this.year}`
        }
    }
    

    class Car extends Vehicle {
     private   modal: string;


        constructor(make: string, year: number, modal: string) {
            super(make, year);
            this.modal = modal;
            
        }
        getModel() {
            return `Modal: ${this.modal}`
        }

    }



 
    function processValue(value : string | number) : number   {
        
        const result = typeof value === 'string' ? value.length : value * 2;
        return result
        
    
    }
 

  

   
    function getMostExpensiveProduct(products: Product[] ): Product[] | null {
        
        if (products.length === 0) {
            return null
            
        }
        else {
             
        const filterArray = products.map(pd => pd.price ??  0 );
     
        const Max = Math.max(...filterArray);
        const highestPrice = products.filter((pd) => pd.price === Max);
       return highestPrice
         

        }
       
    
    }
 
   

    

    enum Day {
         Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday

    }

    function getDayType(day: Day) : string {
    
        const result = (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday";
        return result;
  

    }


 

    async function squareAsync(n: number): Promise<number> {
      if (n < 0) {
    throw new Error("Negative number not allowed");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000); 
  });
    }

}