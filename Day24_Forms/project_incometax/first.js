const result = document.getElementById("result");
const button = document.getElementById("calculateTax"); 

button.addEventListener("click", (event) => {
    
    event.preventDefault(); // Prevent form submission and page reload
    const income = Number(document.getElementById("income").value);
    let tax = 0;
    if (income <= 1200000) {
        tax = 0;
    } 
    else if (income > 1200000 && income <= 1500000) {
        tax = (income-1200000) * 0.1;
    } 
    else if (income > 1500000 && income <= 1800000) {
        tax = (300000) * 0.1 + (income-1500000) * 0.2;
    }
    else{
        tax =300000*0.1 +300000*0.2 + (income-1800000)*0.3;
    }
    result.innerHTML = `Your tax is: ₹${tax.toFixed(2)}`;

    }
)