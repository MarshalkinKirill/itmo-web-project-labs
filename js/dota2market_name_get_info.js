let appointments = JSON.parse(localStorage.getItem('appoint'));
let name = appointments[4].name

const url = 'https://market.dota2.net/api/SearchItemByName/'+ name +'/?key=dk9c2T7yGw8tRuFZ5rzQl4B10R4pVp8'
const header = new Headers({ "Access-Control-Allow-Origin": "*" });

// fetch('https://cors-anywhere.herokuapp.com/' + 'https://market.dota2.net/api/SearchItemByName/'+ name +'/?key=dk9c2T7yGw8tRuFZ5rzQl4B10R4pVp8')
//     .then(res => res.json())
//     .then(data => loadMarketJSON(data))
//     .catch((e) => {
//         insertException(e.message)
//     });
//
//     let appointments = JSON.parse(localStorage.getItem('appoint'));
//     let appointment_field = document.getElementById('appointments_field');
//     let out = '';
//     for (let item in appointments) {
//         out += '<tr>'
//         if(data[1].name === appointments[item].name)
//         {
//
//         }
//         appointments[item].name
//         data[1].name
//     }



window.addEventListener('load', function (event) {

    fetch('https://cors-anywhere.herokuapp.com/' + 'https://market.dota2.net/api/SearchItemByName/'+ name +'/?key=dk9c2T7yGw8tRuFZ5rzQl4B10R4pVp8')
        .then(res => res.json())
        .then(data => loadMarketJSON(data))
        .catch((e) => {
            insertException(e.message)
            console.log(e);

        });

});

function loadMarketJSON(data){
    let suggestion = {
        i_classid: data.list[0].i_classid,
        i_instanceid: data.list[0].i_instanceid,
        i_name: data.list[0].name,
        price: data.list[0].price
    }

    // let out = ''
    // let api_field = document.getElementById('api_field');
    // out += '<p>price: ' + Number(suggestion.price)/100 + '</p>';
    // api_field.innerHTML = out;
    let comm_field = document.getElementById('comm_field');
    let out1 = suggestion.price/100;
    // out1 += '<p class="alert alert-primary">Price: ' + data[1][0].name + '</p>';
    comm_field.innerHTML += out1;

    let appointments = JSON.parse(localStorage.getItem('appoint'));
    let appointment_field = document.getElementById('appointments_field');
    let out = '';
    for (let item in appointments) {
        out += '<tr>'
        out += '<td class="table-secondary">' + appointments[item].name + '</td>'
        out += '<td class="table-secondary">' + appointments[item].num + '</td>'
        out += '<td class="table-secondary">' + appointments[item].quality + '</td>'
        out += '<td class="table-secondary">' + suggestion.price/100 + '</td>'
        out += '</tr>'
        appointment_field.innerHTML = out;
    }
}
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