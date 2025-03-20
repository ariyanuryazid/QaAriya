export function kalkulator(angka1, angka2, operator) {
    switch (operator) {
    case "+":
    return angka1 + angka2;
    break;
    case "-":
    return angka1 - angka2;
    break;
    case "*":
        return angka1 * angka2;
        break;
    case "/":
        return angka2 === 0 ? "tidak dapat terdefinisikan" : angka1 / angka2;
    default:
        return "Operator tidak valid!";
    }
    }
    