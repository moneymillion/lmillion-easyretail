const rotatingText = document.getElementById('rotatingText');
const texts = [
    "How much is my phone bill every month",
    "Find the amount of money about to be spent towards new expense",
    "What is the total amount after tax am I being committed to pay",
    "Check the difference of amount between finance and lease",
    "What is the 2 year expense for the new cellphone contract",
    "Total amount of money paid at the end of 7 year finance",
    "Find the total amount of money being saved every month by leasing",
    "Discover your annual spending on streaming services",
    "Evaluate the long-term costs of your gym membership",
    "Assess the monthly savings from refinancing your home loan",
    "Calculate the lifetime costs of owning vs. renting a home",
    "Determine the financial impact of paying off debt early",
    "Analyze the yearly costs of public transportation versus a personal vehicle",
    "Estimate the savings from switching to energy-efficient appliances"
    // Add more texts as needed
];
let textIndex = 0;

function rotateText() {
    rotatingText.innerHTML = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(rotateText, 2500); // Rotate text every 2 seconds
}

document.addEventListener('DOMContentLoaded', (event) => {
   // Get the button with the id 'tech'
   document.getElementById('telecom').addEventListener('click', function() {
       // Redirect to 'tech.html' when the button is clicked
       window.location.href = 'http://bill.lmillion.com'; // or https:// if the site supports SSL
   });
});

window.onload = rotateText;
