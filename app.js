
//listen for submit
document.getElementById('laon-form').addEventListener('submit',calculateResults);
//calculate resulte
function calculateResults(e){
    console.log('Calculating....');
    //ui vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlypayment = document.getElementById('monthly-payments');
    const totalPayment = document.getElementById('total-payment');
    const totalIterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100/ 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //comput monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlypayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalIterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    } else {
        showError('please chack your numbers');
        console.log(showError);
    }

    e.preventDefault();
}
    //show error
    function showError(error)  {
        //creat a div
        const errorDiv = document.createElement('div');

        //get element
        const card = document.querySelector('.card')
        const heading = document.querySelector('.heading');

        //Add class
        errorDiv.className = 'alert alert-danger';
        //creeat text node and append to div
        errorDiv.appendChild(document.createTextNode(error));

        //insert error above heading
        card.insertBefore(errorDiv, heading);

        //clear error after 3 seconds
        setTimeout(clearError, 3000);

    }
    //clear error
    function clearError() {
        document.querySelector('.alert').remove();
    }
