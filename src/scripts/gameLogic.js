export async function splitImageIntoTiles(imagePath, numRows, numCols) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = async () => {
            const widthOfOnePiece = image.width / numCols;
            const heightOfOnePiece = image.height / numRows;
            const imagePieces = [];
            for (let y = 0; y < numRows; ++y) {
                for (let x = 0; x < numCols; ++x) {
                    const canvas = document.createElement('canvas');
                    canvas.width = widthOfOnePiece;
                    canvas.height = heightOfOnePiece;
                    const context = canvas.getContext('2d');
                    context.drawImage(
                        image,
                        x * widthOfOnePiece,
                        y * heightOfOnePiece,
                        widthOfOnePiece,
                        heightOfOnePiece,
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );
                    imagePieces.push({img:canvas.toDataURL(),x:x,y:y});
                }
            }
            resolve(imagePieces);
        };
        image.onerror = (error) => reject(error);
        image.src = imagePath;
    });
}
export function shuffleArray(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export function array1dTo2d(array, numCols){
    const newArr = [];
    while(array.length) newArr.push(array.splice(0,numCols));
    return newArr;
}

export function array2dTo1d(array){
    return [].concat(...array);
}

export function isFinnished(pieces){
    for (let y = 0; y < pieces.length; y++) {
        for (let x = 0; x < pieces[y].length; x++) {
            if(pieces[y][x].x!==x || pieces[y][x].y!==y){
                return false;
            }
        }
    }
    return true;
}

export function formatTime(numberOfSeconds){
    const minuts = Math.floor(numberOfSeconds/60);
    const seconds = numberOfSeconds%60;
    return `${minuts}:${seconds<10?"0"+seconds:seconds}`
}