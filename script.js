let translateButton = document.getElementById('translateBtn');
let outputText = document.getElementById('outputText');
let inputText = document.getElementById('inputText');
let languageSelect = document.getElementById('languageSelect');

// For long press detection
let pressTimer;
const longPressDuration = 1000; // 1 second for long press

translateButton.addEventListener('click', function() {
  if (translateButton.classList.contains('active')) {
    // Already in active mode, process translation immediately
    performTranslation();
  } else {
    // Regular translation
    performTranslation();
  }
});

translateButton.addEventListener('mousedown', function() {
  pressTimer = setTimeout(function() {
    // Trigger the long press action
    translateButton.classList.add('active');
    outputText.textContent = "Active Translate Mode: Ready for ongoing translation...";
  }, longPressDuration);
});

translateButton.addEventListener('mouseup', function() {
  clearTimeout(pressTimer);
  if (translateButton.classList.contains('active')) {
    outputText.textContent = "Active Translate Mode: Translation in progress...";
  }
});

translateButton.addEventListener('mouseleave', function() {
  clearTimeout(pressTimer); // Clear if mouse leaves before long press
});

function performTranslation() {
  var inputTextValue = inputText.value.trim();
  var selectedLanguage = languageSelect.value;

  if (inputTextValue !== "") {
    outputText.textContent = `Translated (${selectedLanguage}): ${inputTextValue}`;
  } else {
    outputText.textContent = 'Please enter some text to translate.';
  }
  
}

