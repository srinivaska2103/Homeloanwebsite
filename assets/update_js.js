const fs = require('fs');

const jsLogic = `
// EMI Calculator Logic
document.addEventListener('DOMContentLoaded', () => {
    const loanRange = document.getElementById('loanRange');
    const rateRange = document.getElementById('rateRange');
    const tenureRange = document.getElementById('tenureRange');
    
    if (loanRange && rateRange && tenureRange) {
        const loanVal = document.getElementById('loanVal');
        const rateVal = document.getElementById('rateVal');
        const tenureVal = document.getElementById('tenureVal');
        const emiResult = document.getElementById('emiResult');
        const totalInterest = document.getElementById('totalInterest');
        const totalPayable = document.getElementById('totalPayable');

        const calculateEMI = () => {
            const P = parseFloat(loanRange.value);
            const R = parseFloat(rateRange.value) / 12 / 100;
            const N = parseFloat(tenureRange.value) * 12;

            // Update Labels
            loanVal.innerText = new Intl.NumberFormat('en-IN').format(P);
            rateVal.innerText = rateRange.value;
            tenureVal.innerText = tenureRange.value;

            // EMI Formula: P * R * (1+R)^N / ((1+R)^N - 1)
            const EMI = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
            const totalPayment = EMI * N;
            const totalInt = totalPayment - P;

            // Update Results
            emiResult.innerText = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(EMI);
            totalInterest.innerText = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(totalInt);
            totalPayable.innerText = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(totalPayment);
        };

        loanRange.addEventListener('input', calculateEMI);
        rateRange.addEventListener('input', calculateEMI);
        tenureRange.addEventListener('input', calculateEMI);
        
        // Initial Calculation
        calculateEMI();
    }
});
`;

fs.appendFileSync('assets/js/main.js', jsLogic);
console.log('Appended EMI logic to main.js');
