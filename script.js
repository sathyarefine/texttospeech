// Check browser support
if ('speechSynthesis' in window) {
    const convertBtn = document.getElementById('convert-btn');
    const textInput = document.getElementById('text-input');
    const languageSelect = document.getElementById('language-select');

    // Create speech synthesis utterance
    const utterance = new SpeechSynthesisUtterance();

    // Event listener for button click
    convertBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text !== '') {
            const selectedLanguage = languageSelect.value;
            utterance.text = text;
            utterance.lang = selectedLanguage;
            speechSynthesis.speak(utterance);
        }
    });
} else {
    alert('Text-to-speech is not supported in this browser.');
}
