const inputDonationFirst = document.getElementById('add-money-button-first');
inputDonationFirst.addEventListener('click', function () {
    const addMoney = parseFloat(document.getElementById("input-donation-first").value)
    if (isNaN(addMoney)) {
        warn_modal.showModal()
    } else {
        const totalExpensesElement = document.getElementById('donation-first')
        const totalValue = (parseFloat(totalExpensesElement.innerText) + addMoney).toFixed(2)
        totalExpensesElement.innerText = totalValue;

        const totalDueElement = document.getElementById('B-og-button')
        const totalDueValue = (parseFloat(totalDueElement.innerText) - addMoney).toFixed(2)
        totalDueElement.innerText = totalDueValue;

        sucsesfull_modal.showModal()

         document.getElementById('history').innerHTML += `<div class="border border-gray-500 p-7 rounded-xl max-w-4xl mt-6">
         <h5 class="text-xl font-bold">${addMoney} Taka is Donated for famine-2024 at Fani, bangladesh</h5>
         <p>date: ${new Date()}</p>
       </div>`
    }


})

const inputDonationSecond = document.getElementById('add-money-button-second');
inputDonationSecond.addEventListener('click', function () {
    const addMoney = parseFloat(document.getElementById("input-donation-second").value)
    if (isNaN(addMoney)) {
        warn_modal.showModal()
    } else {
        const totalExpensesElement = document.getElementById('donation-second')
        const totalValue = (parseFloat(totalExpensesElement.innerText) + addMoney).toFixed(2)
        totalExpensesElement.innerText = totalValue;

        const totalDueElement = document.getElementById('B-og-button')
        const totalDueValue =(parseFloat(totalDueElement.innerText )-addMoney).toFixed(2)
        totalDueElement.innerText = totalDueValue;

        sucsesfull_modal.showModal()

         document.getElementById('history').innerHTML += `<div class="border border-gray-500 p-7 rounded-xl max-w-4xl mt-6">
         <h5 class="text-xl font-bold">${addMoney} Taka is Donated for famine-2024 at Fani, bangladesh</h5>
         <p>date: ${new Date()}</p>
       </div>`
    }

})
const inputDonationThird = document.getElementById('add-money-button-third');
inputDonationThird.addEventListener('click', function () {
    const addMoney = parseFloat(document.getElementById("input-donation-third").value)
    if (isNaN(addMoney)) {
        warn_modal.showModal()
    } else {
        const totalExpensesElement = document.getElementById('donation-third')
        const totalValue = (parseFloat(totalExpensesElement.innerText) + addMoney).toFixed(2)
        totalExpensesElement.innerText = totalValue;

        const totalDueElement = document.getElementById('B-og-button')
        const totalDueValue =(parseFloat(totalDueElement.innerText )-addMoney).toFixed(2)
        totalDueElement.innerText = totalDueValue;

        sucsesfull_modal.showModal()

         document.getElementById('history').innerHTML += `<div class="border border-gray-500 p-7 rounded-xl max-w-4xl mt-6">
         <h5 class="text-xl font-bold">${addMoney} Taka is Donated for famine-2024 at Fani, bangladesh</h5>
         <p>date: ${new Date()}</p>
       </div>`
    }

})



