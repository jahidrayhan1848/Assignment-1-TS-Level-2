{

 //    problem -1 
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
    const res =formatString("Hello", true)
    // console.log(res);


     // problem -2 

    interface Book {
        title: string;
        rating: number;

    }

    const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 3.0 }
];



    function filterByRating(items: Book[]) : Book [] {
        const result = items.filter((item) => item.rating >= 4)
        return result

    }


    const res1 = filterByRating(books);
    // console.log(res1);

     // problem -3 

 

    function concatenateArrays<T>(...arrays: T[][]) : T[] {
        const newArray : T[] = [];
        for ( const arr of arrays) {
           newArray.push(...arr)
    
        }
        return newArray



    }
    const res2 = concatenateArrays([],[],[]);      
    // console.log(res2);

     // problem -4
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

    const myCar = new Car("Toyota", 2020, "Corolla");

  // problem -5
    function processValue(value : string | number) : number   {
        
        const result = typeof value === 'string' ? value.length : value * 2;
        return result
        
    
    }
    const res3 = processValue(23);
    // console.log(res3);

     // problem -6 

    interface Product {
        name : string;
        price : number;

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
     const products = [
  { name: "Pen", price :100 },
  { name: "Notebook", price:50 },
  { name: "Bag", price: 100 }
];
    const result4 = getMostExpensiveProduct(products)
    // console.log(result4);


     // Problem 7:

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

    const res8 = getDayType(Day.Sunday);
    // console.log(res8);


      // problem -8

    async function squareAsync(n: number): Promise<number> {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                reject("Negative number not allowed")
            }
            else {
                resolve(n *n)
            }
           },1000)
         })
    }

    const res10 =   squareAsync(-3).catch(console.error);
    console.log(res10);

   


}