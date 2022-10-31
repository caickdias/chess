import King from '../components/pieces/King';
import Queen from '../components/pieces/Queen';
import Bishop from '../components/pieces/Bishop';
import Knight from '../components/pieces/Knight';
import Rook from '../components/pieces/Rook';
import Pawn from '../components/pieces/Pawn';

import * as MS from '../utils/movesets';

const king = {
    type: <King />,
    name: 'king',
    moveset: MS.king,
}

const bishop = {
    type: <Bishop />,
    name: 'bishop',
    moveset: MS.bishop,
}

const rook = {
    type: <Rook />,
    name: 'rook',
    moveset: MS.rook,
}

const queen = {
    type: <Queen />,
    name: 'queen',
    moveset: MS.queen,
}

const knight = {
    type: <Knight />,
    name: 'knight',
    moveset: MS.knight,
}

const pawn = {
    type: <Pawn />,
    name: 'pawn',
    moveset: MS.pawn,
}

export {
    king,
    bishop,
    rook,
    queen,
    knight,
    pawn,
}