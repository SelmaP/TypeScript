function topla(x, y) {
    return x + y;
}
function davetEt(ilkDavetli) {
    var diğerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        diğerleri[_i - 1] = arguments[_i];
    }
    return diğerleri.join("");
}
console.log(davetEt("Engin", "Derin", "Salih", "Ahmet"));
