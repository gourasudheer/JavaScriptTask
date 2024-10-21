const translations = {
    english: "Hi welcome to Google translation",
    hindi: "नमस्ते, गूगल अनुवाद में आपका स्वागत है",
    french: "Bonjour, bienvenue dans la traduction Google",
    telugu: "హాయ్, గూగుల్ అనువాదంలో స్వాగతం",
    dutch: "Hallo, welkom bij Google vertaling"
};
function LanguageChange() {
    const languageSelect = document.getElementById('languageSelect');
    const translatedText = document.getElementById('translatedText');
    const selectedLanguage = languageSelect.value;
    translatedText.textContent = translations[selectedLanguage]; // Update the translated text
}
document.addEventListener('DOMContentLoaded', function() {  // Add event listener to the dropdown 
    const languageSelect = document.getElementById('languageSelect');
    document.getElementById('translatedText').textContent = translations['english']; // Initial text in English
    languageSelect.addEventListener('change', LanguageChange);  //  changing the event listener
});