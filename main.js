class EX1 {    
    constructor() {
        
        this.input = document.getElementById("ex1_input").value;
        if (this.input.length > 3 || this.input === "" || isNaN(this.input)) {
            alert("Введите число от 0 до 999!")
            return;
        }
        this.writeAnswer(this.getSplitedNumber(this.input));
        
    }
    getSplitedNumber(x) {
        let sx = String(x);
        for (let i = sx.length; i < 3; i++) {
            sx = "0" + sx;
        }
        return {
            hundreds: Number(sx[0]),
            tens: Number(sx[1]),
            units: Number(sx[2])
        }
        //тут и ответ можно было сделать циклом (+немного поработать над циклом выше), тогда не было бы ограничения на число
    }
    writeAnswer(obj) {
        document.getElementById("ex1_answer").innerHTML = "";
        for (let key in obj) {
            document.getElementById("ex1_answer").innerHTML += key + ": " + obj[key] + "<br>";
        }
        
    }
}