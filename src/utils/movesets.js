let king = [];
let rook = [];
let bishop = [];
let queen = [];
let knight = [];
let pawn = [];

//king moveset
for(let x=-1; x<2; x++){
    for(let y=-1; y<2; y++){
        king.push([x, y]);
    }
}

//rook moveset
for(let x=-7; x<8; x++){
    rook.push([x, 0]);
}
for(let y=-7; y<8; y++){
    rook.push([0, y])
}

//bishop moveset
for(let x=-7; x<8; x++){
    bishop.push([x, x]);
    bishop.push([x, x * -1]);
}

//queen moveset
queen = [...bishop, ...rook];

//knight moveset
knight.push(...[
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
]);

//pawn moveset
pawn.push(...[
    [0, 1],
    [0, 2],
    [0, -1],    
    [0, -2],    
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1]
])

export {
    king,
    bishop,
    rook,
    queen,
    knight,
    pawn
}