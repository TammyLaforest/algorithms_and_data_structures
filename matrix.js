// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result = []

    let count = 1

    let rowlen = n - 1
    let colheight = n - 1
    let rowstart = 0
    let colstart = 0


    // Push n empty arrays
    for (let i = 0; i < n; i++) {
        result.push([])
    }
    // fill arrays with n 0s
    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n; k++) {
            result[i].push(0)
        }
    }
    // Loop through outer then inner layers
    for (let layer = n - 2; layer > 0; layer--) {

        // forward
        for (let i = rowstart; i <= rowlen; i++) {
            result[colstart].splice(i, 1, count)
            count++
        }
        // topmost empty row now filled
        colstart++

        // down
        for (let i = colstart; i <= rowlen; i++) {
            result[i].splice(rowlen, 1, count)
            count++
        }
        // empty column furthest right now filled
        rowlen--

        // backwards
        for (let i = rowlen; i >= rowstart; i--) {
            result[colheight].splice(i, 1, count)
            count++
        }
        // empty row most bottom now filled
        colheight--

        // up 
        for (let i = colheight; i >= colstart; i--) {
            result[i].splice(rowstart, 1, count)
            count++
        }
        // empty column most left now filled
        rowstart++

        // loop to most empty row top, left column
    }

    console.log(result)

}
matrix(5)
