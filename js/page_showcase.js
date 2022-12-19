
function slider () {
    let $range = $("#range_slider_1");
    let $inputFrom = $("#range_slider_1_input_from");
    let $inputTo = $("#range_slider_1_input_to");
    let instance;
    let min = 0;
    let max = 500;
    let from = 0;
    let to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 0,
        to: 500,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);

    }

    $inputFrom.on("change", function () {
        let val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).prop("value", val);

    });

    $inputTo.on("change", function () {
        let val = $(this).prop("value");
        console.log(val);
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).prop("value", val);
    });
}




$(function () {
    slider();
});
