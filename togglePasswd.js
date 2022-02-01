function togglePasswd() {
    var x = document.getElementById("demo");
    if (x.type === 'password')
        x.type = 'text';
    else
        x.type = 'password';
}