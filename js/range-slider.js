const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, 100],
        connect: true,
        step: 1,
        range: {
            'min': [0],
            'max': [100]
        }
    });

    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function(values, handle){
        inputs[handle].value = Math.round(values[handle]);

        const min = Number(document.getElementById("input-0").value);
        const max = Number(document.getElementById("input-1").value);
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

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        console.log(arr);

        rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            console.log(index);
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}
