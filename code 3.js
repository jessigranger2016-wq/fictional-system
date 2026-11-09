function printPatterns(matrix) {
    let mainDiagonal = []
    // TODO: Implementieren
    console.log("Main Diagonal:", mainDiagonal.join(" "));
    
    let antiDiagonal = [];
    // TODO: Implementieren
    console.log("Anti-Diagonal:", antiDiagonal.join(" "));
    
    let topBorder = [];
    // TODO: Implementieren
    console.log("Top Border:", topBorder.join(" "));
    
    let bottomBorder = [];
    // TODO: Implementieren
    console.log("Bottom Border:", bottomBorder.join(" "));
    
    let leftBorder = [];
    // TODO: Implementieren
    console.log("Left Border:", leftBorder.join(" "));
    
    let rightBorder = [];
    // TODO: Implementieren
    console.log("Right Border:", rightBorder.join(" "));
}
// Schreiben Sie nichts außerhalb der Funktion
function printPatterns(matrix) {
    const n = matrix.length;
    
    // Hauptdiagonale
    let mainDiagonal = [];
    for(let i = 0; i < n; i++) {
        mainDiagonal.push(matrix[i][i]);
    }
    console.log("Main Diagonal:", mainDiagonal.join(" "));
    
    // Nebendiagonale
    let antiDiagonal = [];
    for(let i = 0; i < n; i++) {
        antiDiagonal.push(matrix[i][n-1-i]);
    }
    console.log("Anti-Diagonal:", antiDiagonal.join(" "));
    
    // Oberer Rand
    let topBorder = matrix[0];
    console.log("Top Border:", topBorder.join(" "));
    
    // Unterer Rand
    let bottomBorder = matrix[n-1];
    console.log("Bottom Border:", bottomBorder.join(" "));
    
    // Linker Rand
    let leftBorder = [];
    for(let i = 0; i < n; i++) {
        leftBorder.push(matrix[i][0]);
    }
    console.log("Left Border:", leftBorder.join(" "));
    
    // Rechter Rand
    let rightBorder = [];
    for(let i = 0; i < n; i++) {
        rightBorder.push(matrix[i][n-1]);
    }
    console.log("Right Border:", rightBorder.join(" "));
}