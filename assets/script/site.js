const cardInput = document.getElementById('card');
const cardError = document.getElementById('card-error');

cardInput.addEventListener('input', function (e) {
  let cardNumber = e.target.value.replace(/\D/g, '');
  cardNumber = cardNumber.substring(0, 16);
  cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1-');
  e.target.value = cardNumber;
  validateCardNumber(cardNumber.replace(/\D/g, ''));
});

cardInput.addEventListener('blur', function (e) {
  const cardNumber = e.target.value.replace(/\D/g, '');
  validateCardNumber(cardNumber);
});

function validateCardNumber(cardNumber) {
  var isValid=false;
  const visaPattern = /^[0-9]{16,19}$/;
  if (visaPattern.test(cardNumber)) {
    isValid=true;
    cardError.classList.add('hidden');
    cardInput.classList.remove('border-red-500');
    cardInput.classList.add('border-gray-300');
  } else {
    isValid=false;
    cardError.classList.remove('hidden');
    cardInput.classList.remove('border-gray-300');
    cardInput.classList.add('border-red-500');
  }
  return isValid;
}


const cvvTooltipButton = document.getElementById('cvv-tooltip-button');
const cvvTooltip = document.getElementById('cvv-tooltip');

// Toggle tooltip visibility on button click
cvvTooltipButton.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default button behavior
  cvvTooltip.classList.toggle('invisible');
  cvvTooltip.classList.toggle('opacity-0');
});

// Hide tooltip when clicking outside
document.addEventListener('click', function (e) {
  if (!cvvTooltip.contains(e.target) && !cvvTooltipButton.contains(e.target)) {
    cvvTooltip.classList.add('invisible');
    cvvTooltip.classList.add('opacity-0');
  }
});
