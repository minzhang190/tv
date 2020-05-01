document.getElementById('input').addEventListener('input', function(e) {
    var input = e.target;

    if (!/^\d*$/.exec(input.value)) {
        input.value = /\d*/.exec(input.value)[0];
        document.getElementById('form').submit();
    }
});
