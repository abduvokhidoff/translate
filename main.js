const input = document.querySelectorAll('textarea');
const select1 = document.querySelector('.select1');
const select2 = document.querySelector('.select2');
const button = document.querySelectorAll('button');

const fetchFunction = () => {
   
    const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '2758ee9fe6mshcdf69593720aef3p128205jsn8d08ef1876ad',
            'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: input[0].value,
            source: select1.value,
            target: select2.value,
            format: 'text'  // Обязательно передайте формат текста
        })
        
    };


    fetch(url, options)
        .then(res => res.json())
        .then(data => {

            console.log(data);
            input[1].innerHTML = data.data.translations.translatedText

        })
}

button[2].addEventListener('click', () => {
    console.clear()
    fetchFunction();
});

const url1 = 'https://deep-translate1.p.rapidapi.com/language/translate/v2/languages';
const options1 = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '2758ee9fe6mshcdf69593720aef3p128205jsn8d08ef1876ad',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com'
    }
};

fetch(url1, options1)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.languages.forEach(v => {
            [select1, select2].forEach(select => {
                const option = document.createElement('option');
                option.value = v.language;
                option.innerHTML = v.name;
                select.appendChild(option);

            });
        });
    })
    .catch(err => console.error('Ошибка:', err));




    const textToVoice = () => {
        const inputValue = input[0].value.trim();
        if (!inputValue) {
            alert('Введите текст для озвучивания');
            return;
        }

        const utterance = new SpeechSynthesisUtterance(inputValue);

        utterance.lang = select1.value; 
        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.volume = 1; 

        window.speechSynthesis.speak(utterance);
    };

    const textToVoice1 = () => {
        const inputValue1 = input[1].value.trim();
        if (!inputValue1) {
            alert('Введите текст для озвучивания');
            return;
        }

        const utterance = new SpeechSynthesisUtterance(inputValue1);

        utterance.lang = select2.value; 
        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.volume = 1; 

        window.speechSynthesis.speak(utterance);
    };

    button[0].addEventListener('click', () => {
        textToVoice()
    })
    button[1].addEventListener('click', () => {
        textToVoice1()
    })


