// ============================================
// JavaScript Session 4 - Student Task Solution
// Academy of Digital Arts Egypt
// Arrays, Iteration Methods, and ES6 Features
// ============================================

console.log("=== JavaScript Session 4: Arrays, Iteration Methods, and ES6 Features ===");
console.log("Instructor: Saad Hassan Saad - Head of Software Department, ADA Egypt");
console.log("\n");

// ============================================
// STEP 1: Create Product Data and Basic Array Operations
// ============================================

console.log("=== STEP 1: Product Data and Basic Array Operations ===");

// Initialize empty products array
let products = [];

// Add products using push() - adds to the end of array
console.log("--- Adding Products with push() ---");
products.push({
    id: 1,
    name: "MacBook Pro M3",
    price: 45000,
    category: "Electronics",
    inStock: true,
    quantity: 15
});

products.push({
    id: 2,
    name: "iPhone 15 Pro",
    price: 32000,
    category: "Electronics",
    inStock: true,
    quantity: 25
});

products.push({
    id: 3,
    name: "Nike Air Max",
    price: 3500,
    category: "Footwear",
    inStock: false,
    quantity: 0
});

products.push({
    id: 4,
    name: "Samsung Galaxy S24",
    price: 28000,
    category: "Electronics",
    inStock: true,
    quantity: 12
});

products.push({
    id: 5,
    name: "Adidas Ultraboost",
    price: 4200,
    category: "Footwear",
    inStock: true,
    quantity: 8
});

console.log(`Products added: ${products.length} items`);

// Use unshift() to add urgent products to the beginning
console.log("\n--- Adding Urgent Products with unshift() ---");
products.unshift({
    id: 0,
    name: "ADA Egypt Course Bundle",
    price: 15000,
    category: "Education",
    inStock: true,
    quantity: 50
});

console.log(`After unshift, total products: ${products.length}`);
console.log(`First product (urgent): ${products[0].name}`);

// Apply pop() and shift() to demonstrate removal
console.log("\n--- Removing Products with pop() and shift() ---");
const removedFromEnd = products.pop();
const removedFromStart = products.shift();

console.log(`Removed from end: ${removedFromEnd.name}`);
console.log(`Removed from start: ${removedFromStart.name}`);
console.log(`Remaining products: ${products.length}`);

// Add products back for full demonstration
products.unshift(removedFromStart);
products.push(removedFromEnd);

// Use slice() to create product pages (pagination)
console.log("\n--- Creating Product Pages with slice() ---");
const pageSize = 2;
const page1 = products.slice(0, pageSize);
const page2 = products.slice(pageSize, pageSize * 2);
const page3 = products.slice(pageSize * 2, pageSize * 3);

console.log(`Page 1 products: ${page1.map(p => p.name).join(", ")}`);
console.log(`Page 2 products: ${page2.map(p => p.name).join(", ")}`);
console.log(`Page 3 products: ${page3.map(p => p.name).join(", ")}`);

// Implement splice() to insert new products at specific positions
console.log("\n--- Inserting Products with splice() ---");
const newProduct = {
    id: 6,
    name: "Dell XPS 13",
    price: 35000,
    category: "Electronics",
    inStock: true,
    quantity: 10
};

// Insert at position 2, delete 0 items
products.splice(2, 0, newProduct);
console.log(`After splice insertion at position 2: ${products.length} products`);
console.log(`Product at position 2: ${products[2].name}`);

console.log("\n");

// ============================================
// STEP 2: Process Products with Iteration Methods
// ============================================

console.log("=== STEP 2: Processing Products with Iteration Methods ===");

// Use forEach() to display all products with formatted output
console.log("--- Displaying Products with forEach() ---");
products.forEach((product, index) => {
    const stockStatus = product.inStock ? "In Stock" : "Out of Stock";
    const stockColor = product.inStock ? "✓" : "✗";
    console.log(`${index + 1}. ${product.name} - EGP ${product.price.toLocaleString()} | ${stockColor} ${stockStatus} (Qty: ${product.quantity})`);
});

// Apply map() to create price lists with tax calculations and currency formatting
console.log("\n--- Price Lists with Tax using map() ---");
const TAX_RATE = 0.14; // 14% VAT in Egypt
const pricesWithTax = products.map(product => {
    const taxAmount = product.price * TAX_RATE;
    const totalPrice = product.price + taxAmount;
    
    return {
        id: product.id,
        name: product.name,
        originalPrice: product.price,
        taxAmount: Math.round(taxAmount),
        finalPrice: Math.round(totalPrice),
        formattedPrice: `EGP ${Math.round(totalPrice).toLocaleString()}`
    };
});

pricesWithTax.forEach(item => {
    console.log(`${item.name}: ${item.formattedPrice} (includes EGP ${item.taxAmount} tax)`);
});

// Implement filter() to find products by various criteria
console.log("\n--- Filtering Products with filter() ---");

// Filter by category
const electronics = products.filter(product => product.category === "Electronics");
console.log(`Electronics products: ${electronics.length} items`);
electronics.forEach(product => console.log(`  - ${product.name}`));

// Filter by price range
const affordableProducts = products.filter(product => product.price < 20000);
console.log(`\nAffordable products (< EGP 20,000): ${affordableProducts.length} items`);
affordableProducts.forEach(product => console.log(`  - ${product.name}: EGP ${product.price.toLocaleString()}`));

// Filter by stock status
const inStockProducts = products.filter(product => product.inStock && product.quantity > 0);
const outOfStockProducts = products.filter(product => !product.inStock || product.quantity === 0);
console.log(`\nIn stock: ${inStockProducts.length} | Out of stock: ${outOfStockProducts.length}`);

// Use reduce() for calculations
console.log("\n--- Calculations with reduce() ---");

// Calculate total inventory value
const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);
console.log(`Total inventory value: EGP ${totalInventoryValue.toLocaleString()}`);

// Calculate average price
const averagePrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;
console.log(`Average product price: EGP ${Math.round(averagePrice).toLocaleString()}`);

// Count products by category
const categoryCount = products.reduce((counts, product) => {
    counts[product.category] = (counts[product.category] || 0) + 1;
    return counts;
}, {});
console.log("Products by category:", categoryCount);

// Chain multiple methods for complex processing
console.log("\n--- Method Chaining Example ---");
const expensiveInStockElectronics = products
    .filter(product => product.category === "Electronics")
    .filter(product => product.inStock)
    .filter(product => product.price > 30000)
    .map(product => ({
        name: product.name,
        price: product.price,
        priceWithTax: Math.round(product.price * (1 + TAX_RATE))
    }));

console.log("Expensive in-stock electronics:");
expensiveInStockElectronics.forEach(item => {
    console.log(`  - ${item.name}: EGP ${item.priceWithTax.toLocaleString()} (with tax)`);
});

console.log("\n");

// ============================================
// STEP 3: Implement ES6 Features for Modern Syntax
// ============================================

console.log("=== STEP 3: ES6 Features Implementation ===");

// Template literals for product description cards
console.log("--- Product Description Cards with Template Literals ---");

const createProductCard = (product) => {
    const { id, name, price, category, inStock, quantity } = product;
    const status = inStock ? "Available" : "Unavailable";
    const stockWarning = quantity < 10 ? "⚠️ Low Stock" : "";
    
    return `
╭─────────────────────────────────────╮
│ Product ID: ${id.toString().padStart(3, '0')}                       │
│ Name: ${name.padEnd(25)} │
│ Category: ${category.padEnd(21)} │
│ Price: EGP ${price.toLocaleString().padStart(15)} │
│ Status: ${status.padEnd(23)} │
│ Quantity: ${quantity.toString().padStart(3)} units ${stockWarning.padStart(12)}    │
╰─────────────────────────────────────╯`;
};

// Display cards for first 3 products
products.slice(0, 3).forEach(product => {
    console.log(createProductCard(product));
});

// Object destructuring in function parameters
console.log("\n--- Object Destructuring Examples ---");

const displayProductSummary = ({ name, price, category, inStock }) => {
    const availability = inStock ? "✅ Available" : "❌ Out of Stock";
    console.log(`${name} (${category}) - EGP ${price.toLocaleString()} ${availability}`);
};

console.log("Product summaries using destructuring:");
products.forEach(displayProductSummary);

// Array destructuring for extracting data
console.log("\n--- Array Destructuring Examples ---");
const productNames = products.map(p => p.name);
const [firstProduct, secondProduct, thirdProduct, ...remainingProducts] = productNames;

console.log(`First product: ${firstProduct}`);
console.log(`Second product: ${secondProduct}`);
console.log(`Third product: ${thirdProduct}`);
console.log(`Remaining products count: ${remainingProducts.length}`);

// Spread operator examples
console.log("\n--- Spread Operator Examples ---");

// Merge product arrays
const newProducts = [
    { id: 7, name: "iPad Pro", price: 25000, category: "Electronics", inStock: true, quantity: 20 },
    { id: 8, name: "AirPods Pro", price: 8500, category: "Electronics", inStock: true, quantity: 30 }
];

const allProducts = [...products, ...newProducts];
console.log(`Original products: ${products.length}, All products: ${allProducts.length}`);

// Clone and modify objects
const discountedProduct = {
    ...products[0],
    price: products[0].price * 0.8,
    onSale: true
};
console.log(`Original: ${products[0].name} - EGP ${products[0].price}`);
console.log(`Discounted: ${discountedProduct.name} - EGP ${discountedProduct.price} (20% off)`);

// Rest parameters function
const calculateBulkDiscount = (baseDiscount, ...quantities) => {
    console.log(`Base discount: ${baseDiscount}%`);
    console.log(`Processing ${quantities.length} quantities: [${quantities.join(", ")}]`);
    
    const totalQuantity = quantities.reduce((sum, qty) => sum + qty, 0);
    const extraDiscount = totalQuantity > 50 ? 5 : totalQuantity > 20 ? 3 : 0;
    
    return baseDiscount + extraDiscount;
};

const bulkDiscount = calculateBulkDiscount(10, 15, 25, 12, 8, 30);
console.log(`Final bulk discount: ${bulkDiscount}%`);

console.log("\n");

// ============================================
// STEP 4: Build Advanced Features with Combined Concepts
// ============================================

console.log("=== STEP 4: Advanced Features with Combined Concepts ===");

// Search function using filter() and destructuring
const searchProducts = (searchTerm, { category = null, minPrice = 0, maxPrice = Infinity, inStock = null } = {}) => {
    return allProducts.filter(({ name, price, category: prodCategory, inStock: stockStatus }) => {
        const matchesName = name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !category || prodCategory === category;
        const matchesPrice = price >= minPrice && price <= maxPrice;
        const matchesStock = inStock === null || stockStatus === inStock;
        
        return matchesName && matchesCategory && matchesPrice && matchesStock;
    });
};

console.log("--- Advanced Search Function ---");
const searchResults1 = searchProducts("pro", { category: "Electronics", minPrice: 20000 });
console.log(`Search "pro" in Electronics > EGP 20,000: ${searchResults1.length} results`);
searchResults1.forEach(({ name, price }) => console.log(`  - ${name}: EGP ${price.toLocaleString()}`));

// Shopping cart system
console.log("\n--- Shopping Cart System ---");
class ShoppingCart {
    constructor() {
        this.items = [];
        this.createdBy = "Saad Hassan Saad - ADA Egypt";
    }
    
    addItem(productId, quantity = 1) {
        const product = allProducts.find(p => p.id === productId);
        if (!product) {
            console.log(`Product with ID ${productId} not found`);
            return false;
        }
        
        if (!product.inStock || product.quantity < quantity) {
            console.log(`Insufficient stock for ${product.name}`);
            return false;
        }
        
        const existingItem = this.items.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ productId, quantity, addedAt: new Date() });
        }
        
        console.log(`Added ${quantity}x ${product.name} to cart`);
        return true;
    }
    
    removeItem(productId, quantity = null) {
        const itemIndex = this.items.findIndex(item => item.productId === productId);
        if (itemIndex === -1) {
            console.log("Item not found in cart");
            return false;
        }
        
        if (quantity === null) {
            this.items.splice(itemIndex, 1);
            console.log("Item removed from cart");
        } else {
            this.items[itemIndex].quantity -= quantity;
            if (this.items[itemIndex].quantity <= 0) {
                this.items.splice(itemIndex, 1);
            }
            console.log(`Removed ${quantity} item(s) from cart`);
        }
        return true;
    }
    
    getTotal() {
        return this.items.reduce((total, { productId, quantity }) => {
            const product = allProducts.find(p => p.id === productId);
            return total + (product.price * quantity);
        }, 0);
    }
    
    displayCart() {
        if (this.items.length === 0) {
            console.log("Cart is empty");
            return;
        }
        
        console.log("Shopping Cart Contents:");
        this.items.forEach(({ productId, quantity }) => {
            const product = allProducts.find(p => p.id === productId);
            const subtotal = product.price * quantity;
            console.log(`  - ${product.name} x${quantity} = EGP ${subtotal.toLocaleString()}`);
        });
        console.log(`Total: EGP ${this.getTotal().toLocaleString()}`);
    }
}

const cart = new ShoppingCart();
cart.addItem(1, 1); // MacBook Pro
cart.addItem(2, 2); // iPhone 15 Pro
cart.addItem(7, 1); // iPad Pro
cart.displayCart();

// Discount calculations using map() and template literals
console.log("\n--- Discount Calculations ---");
const applyDiscounts = (cartItems, discountRules) => {
    return cartItems.map(({ productId, quantity }) => {
        const product = allProducts.find(p => p.id === productId);
        const { name, price } = product;
        
        const subtotal = price * quantity;
        const discountPercent = discountRules[productId] || 0;
        const discountAmount = subtotal * (discountPercent / 100);
        const finalPrice = subtotal - discountAmount;
        
        return {
            name,
            quantity,
            originalPrice: subtotal,
            discountPercent,
            discountAmount,
            finalPrice,
            savings: discountAmount
        };
    });
};

const discountRules = { 1: 15, 2: 10, 7: 20 }; // productId: discount%
const discountedItems = applyDiscounts(cart.items, discountRules);

console.log("Discounted Cart:");
discountedItems.forEach(item => {
    const discountInfo = item.discountPercent > 0 
        ? `(${item.discountPercent}% off - Save EGP ${Math.round(item.savings).toLocaleString()})`
        : '';
    
    console.log(`${item.name} x${item.quantity}: EGP ${Math.round(item.finalPrice).toLocaleString()} ${discountInfo}`);
});

const totalSavings = discountedItems.reduce((sum, item) => sum + item.savings, 0);
console.log(`Total savings: EGP ${Math.round(totalSavings).toLocaleString()}`);

// Sales report using reduce() and formatted output
console.log("\n--- Sales Report Generation ---");
const generateSalesReport = (products, timeframe = "monthly") => {
    const report = products.reduce((acc, product) => {
        const { category, price, quantity } = product;
        
        if (!acc.categories[category]) {
            acc.categories[category] = {
                totalProducts: 0,
                totalValue: 0,
                averagePrice: 0
            };
        }
        
        acc.categories[category].totalProducts += 1;
        acc.categories[category].totalValue += price * quantity;
        acc.totalValue += price * quantity;
        acc.totalProducts += 1;
        
        return acc;
    }, { categories: {}, totalValue: 0, totalProducts: 0 });
    
    // Calculate average prices
    Object.keys(report.categories).forEach(category => {
        const categoryData = report.categories[category];
        const categoryProducts = products.filter(p => p.category === category);
        categoryData.averagePrice = categoryProducts.reduce((sum, p) => sum + p.price, 0) / categoryProducts.length;
    });
    
    return report;
};

const salesReport = generateSalesReport(allProducts);

console.log(`
SALES REPORT - ${new Date().toLocaleDateString()}
Generated by: Saad Hassan Saad - ADA Egypt
═══════════════════════════════════════════════

Overall Statistics:
- Total Products: ${salesReport.totalProducts}
- Total Inventory Value: EGP ${salesReport.totalValue.toLocaleString()}

Category Breakdown:`);

Object.entries(salesReport.categories).forEach(([category, data]) => {
    console.log(`
${category}:
  - Products: ${data.totalProducts}
  - Total Value: EGP ${Math.round(data.totalValue).toLocaleString()}
  - Average Price: EGP ${Math.round(data.averagePrice).toLocaleString()}`);
});

// Inventory management with stock warnings
console.log("\n--- Inventory Management & Stock Alerts ---");
const checkInventoryStatus = (products) => {
    const lowStockThreshold = 10;
    const criticalStockThreshold = 5;
    
    const inventoryStatus = products.map(({ id, name, quantity, inStock, category }) => ({
        id,
        name,
        quantity,
        category,
        status: !inStock ? 'OUT_OF_STOCK' :
                quantity <= criticalStockThreshold ? 'CRITICAL' :
                quantity <= lowStockThreshold ? 'LOW' : 'NORMAL',
        alert: !inStock ? 'URGENT: Restock immediately!' :
               quantity <= criticalStockThreshold ? 'WARNING: Critical stock level' :
               quantity <= lowStockThreshold ? 'CAUTION: Low stock' : null
    }));
    
    return inventoryStatus;
};

const inventoryAlerts = checkInventoryStatus(allProducts)
    .filter(item => item.alert !== null)
    .sort((a, b) => {
        const priority = { URGENT: 3, WARNING: 2, CAUTION: 1 };
        const aPriority = a.status === 'OUT_OF_STOCK' ? priority.URGENT :
                         a.status === 'CRITICAL' ? priority.WARNING : priority.CAUTION;
        const bPriority = b.status === 'OUT_OF_STOCK' ? priority.URGENT :
                         b.status === 'CRITICAL' ? priority.WARNING : priority.CAUTION;
        return bPriority - aPriority;
    });

console.log("INVENTORY ALERTS:");
console.log("================");
if (inventoryAlerts.length === 0) {
    console.log("All products have sufficient stock levels.");
} else {
    inventoryAlerts.forEach(({ name, quantity, alert, category }) => {
        console.log(`${alert}`);
        console.log(`  Product: ${name} (${category})`);
        console.log(`  Current Stock: ${quantity} units\n`);
    });
}

// Final system summary
console.log("=== System Summary ===");
console.log(`Total products in database: ${allProducts.length}`);
console.log(`Products requiring attention: ${inventoryAlerts.length}`);
console.log(`Cart total value: EGP ${cart.getTotal().toLocaleString()}`);
console.log(`Total inventory value: EGP ${salesReport.totalValue.toLocaleString()}`);
console.log("\nProduct Management System fully operational!");
console.log("All JavaScript arrays, iteration methods, and ES6 features demonstrated!");