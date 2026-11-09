function stringWeaver(str1, str2) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    // Zahlen aus beiden Zeichenfolgen entfernen
    let cleanStr1 = '';
    for (let i = 0; i < str1.length; i++) {
        if (!numbers.includes(str1[i])) {
            cleanStr1 += str1[i];
        }
    }
    
    let cleanStr2 = '';
    for (let i = 0; i < str2.length; i++) {
        if (!numbers.includes(str2[i])) {
            cleanStr2 += str2[i];
        }
    }
    
    // Bereinigte Zeichenfolgen kombinieren (zuerst alles von str1, dann alles von str2)
    let combined = cleanStr1 + cleanStr2;
    
    // Vokale in Großbuchstaben umwandeln
    let result = '';
    for (let i = 0; i < combined.length; i++) {
        let char = combined[i];
        if (vowels.includes(char)) {
            char = char.toUpperCase();
        }
        result += char;
    }
    
    return result;
}