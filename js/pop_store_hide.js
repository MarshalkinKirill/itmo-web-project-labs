document.getElementById("slider").addEventListener('click', function (event) {
    event.defaultPrevented;

    const min = Number(document.getElementById("range_slider_1_input_from").value);
    const max = Number(document.getElementById("range_slider_1_input_to").value);
    // console.log(max, typeof(max))

    let id_arr = ['other_price1','other_price2','other_price3','other_price4','other_price5']
    for(let i=0;i<(id_arr.length); i++){
        //console.log(id_arr[i])
        // console.log(document.getElementById(id_arr[i]).value);
        if(Number(document.getElementById(id_arr[i]).value) > max || Number(document.getElementById(id_arr[i]).value) < min){
            let css = '#product_'+(i+Number(1))+'{ display: none; }'
            // console.log(min,max, document.getElementById(id_arr[i]).value);
            // console.log(css);
            let style = document.createElement('style');
            style.appendChild(document.createTextNode(css.toString()));
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        if(Number(document.getElementById(id_arr[i]).value) <= max && Number(document.getElementById(id_arr[i]).value) >= min){
            let css = '#product_'+(i+Number(1))+'{ display: block; }'
            let style = document.createElement('style');
            style.appendChild(document.createTextNode(css.toString()));
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }
});