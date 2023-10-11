// маска ввода телефона
document.addEventListener('DOMContentLoaded', function() {
  var phones = document.querySelectorAll('[id=phone]');

  phones.forEach(function(phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      var inputValue = e.target.value;
      var sanitizedValue = inputValue.replace(/[^\d+]/g, '');
      e.target.value = sanitizedValue;
    });

    phoneInput.addEventListener('blur', function() {
      if (phoneInput.value.trim() === '') {
        phoneInput.value = '';
      }
    });
  });
});


// маска ввода телефона