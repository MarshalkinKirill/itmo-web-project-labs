let check_name = false;
let check_num = false;
let check_quality = false;
let check_sugg = false;

function showAppointment() {
    let appointments = JSON.parse(localStorage.getItem('appoint'));
    let appointment_field = document.getElementById('appointments_field');
    let out = '';
    for (let item in appointments) {
        out += '<tr>'
        if (check_name)
            out += '<td class="table-secondary">' + appointments[item].name + '</td>'
        if (check_num)
            out += '<td class="table-secondary">' + appointments[item].num + '</td>'
        if (check_quality)
            out += '<td class="table-secondary">' + appointments[item].quality + '</td>'
        if (check_sugg)
            out += '<td class="table-secondary">' + appointments[item].sugg + '</td>'
        out += '</tr>'
        appointment_field.innerHTML = out;
    }
    if (appointments == null){
        out += '<tr>'
        out += '<td class="table-secondary">' + "none" + '</td>'
        out += '<td class="table-secondary">' + "none" + '</td>'
        out += '<td class="table-secondary">' + "none" + '</td>'
        out += '<td class="table-secondary">' + "none" + '</td>'
        out += '</tr>'
        appointment_field.innerHTML = out;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    check_name = true;
    check_num = true;
    check_quality = true;
    check_sugg = true;
    let columnsTable_field = document.getElementById('columnsTable_field');
    let out = ''
    out += '<th scope="col">Название предмета</th>'
    out += '<th scope="col">Количество</th>'
    out += '<th scope="col">Качество</th>'
    out += '<th scope="col">Комментарии</th>'
    columnsTable_field.innerHTML = out;
    showAppointment();
});
document.getElementById("table_add").addEventListener('click', function (event) {
    event.defaultPrevented;
    if (document.getElementById('check_name').checked)
    {
        check_name = true;
    }
    else{
        check_name = false;
    }
    if (document.getElementById('check_num').checked)
        check_num = true;
    else{
        check_num = false;
    }
    if (document.getElementById('check_quality').checked)
        check_quality = true;
    else{
        check_quality = false;
    }
    if (document.getElementById('check_sugg').checked)
        check_sugg = true;
    else{
        check_sugg = false;
    }
    // let checkboxField = document.getElementById('delete');
    let columnsTable_field = document.getElementById('columnsTable_field');
    let out = ''
    if (check_name)
        out += '<th scope="col">Название предмета</th>'
    if (check_num)
        out += '<th scope="col">Количество</th>'
    if (check_quality)
        out += '<th scope="col">Качество</th>'
    if (check_sugg)
        out += '<th scope="col">Комментарии</th>'
    columnsTable_field.innerHTML = out;
    showAppointment();
});

document.getElementById("appointment_add").addEventListener('click', function (event) {
    event.defaultPrevented;
    /*Adding appointment*/
    let appointment = {
        name: document.getElementById('name').value,
        num: document.getElementById('num').value,
        quality: document.getElementById('quality').value,
        sugg: document.getElementById('sugg').value,
    }
    let appointments = [];
    if (localStorage.getItem("appoint") !== null) {
        appointments = JSON.parse(localStorage.getItem('appoint'));
    }
    appointments.push(appointment);
    localStorage.setItem('appoint', JSON.stringify(appointments));
    showAppointment();
    /*Cleaning appointment form*/
    document.getElementById("name").value = "";
    document.getElementById("num").value = "";
    document.getElementById("quality").value = "";
    document.getElementById("sugg").value = "";
});