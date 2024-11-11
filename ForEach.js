   let fruits = [
        { name: "Apple", color: "Red", size: ["Small", "Big", "XXL"], brand: "BrandA" },
        { name: "Banana", color: "Yellow", size: ["Small", "ToBig", "XXL"], brand: "BrandB" },
        { name: "Orange", color: "Orange", size: ["Small", "Big", "XXL"], brand: "BrandC" },
        { name: "Mango", color: "Yellow", size: ["ToBig", "Big", "XXL"], brand: "BrandD" }
    ];

    fruits.forEach(fruit => {
        if (fruit.size.includes("ToBig")) {
            console.log(fruit.name);
        }
    });
