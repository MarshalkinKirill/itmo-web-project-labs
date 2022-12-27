function loadJSON(data) {
    let randomFrom;
    let randomTo;
    if (sessionStorage.getItem('check') === '1') {
        randomFrom = 0;
        randomTo = 20;
        sessionStorage.removeItem('check')
    } else {
        if (sessionStorage.getItem('check') == null) {
            sessionStorage.setItem('check', '1');
            randomFrom = 20;
            randomTo = 40;
        }
    }
    let comm_field = document.getElementById('comm_field');
    let out = '';
    for (let item = randomFrom; item < randomTo; item++) {
        out += '<p class="alert alert-primary">Username: ' + data[item].name + '</p>';
        out += '<p class="alert alert-primary">Email: : ' + data[item].email + '</p>';
        out += '<p class="alert alert-primary">Comment: ' + data[item].body + '</p>';

    }
    comm_field.innerHTML = out;
}

window.addEventListener('load', function (event) {
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => loadJSON(data))
            .catch((e) => {
                insertException(e.message)
            });
        document.getElementById('preloader').remove();
    }, 3000)
});

function insertException(message) {
    let errorText = "Что-то пошло не так";
    if (message === "500" || message === "404") {
        errorText = "Сеть перестала быть доступна и запрос не был выполнен";
    }else
    if (message === "401") {
        errorText = "Я ебал в рот апишку стима, хз почему не работает ключ";
    }
    let out = errorText
    comm_field.innerHTML = out;
}