export const values={p:100,n:320,b:330,r:500,q:900,k:0};
export function evaluate(game){if(game.isCheckmate())return game.turn()==='w'?-100000:100000;if(game.isDraw())return 0;return game.board().flat().reduce((v,p)=>v+(p?(p.color==='w'?1:-1)*(values[p.type]+(p.type==='p'?(p.color==='w'?7-(Number(p.square[1])-1):Number(p.square[1])-1)*-2:0)):0),0)}
function search(g,d,a,b){if(!d||g.isGameOver())return evaluate(g);let best=g.turn()==='w'?-Infinity:Infinity;const white=g.turn()==='w';for(const m of g.moves({verbose:true}).sort((a,b)=>(values[b.captured]||0)-(values[a.captured]||0))){g.move(m);const v=search(g,d-1,a,b);g.undo();best=white?Math.max(best,v):Math.min(best,v);if(white)a=Math.max(a,best);else b=Math.min(b,best);if(b<=a)break}return best}
export function rankMoves(g,depth=2){const white=g.turn()==='w';return g.moves({verbose:true}).map(m=>{g.move(m);const score=search(g,depth-1,-Infinity,Infinity);g.undo();return {move:m,score}}).sort((a,b)=>white?b.score-a.score:a.score-b.score)}
export const puzzles=[
{title:'The last rank',theme:'Back-rank mate',fen:'6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1',solution:'e1e8',hint:'The rook belongs on the eighth rank.'},
{title:'A royal finish',theme:'Queen and king',fen:'7k/8/5KQ1/8/8/8/8/8 w - - 0 1',solution:'g6g7',hint:'Bring your queen one square closer to the king.'},
{title:'The other side',theme:'Black to move',fen:'4r1k1/5ppp/8/8/8/8/5PPP/6K1 b - - 0 1',solution:'e8e1',hint:'The first rank is unguarded.'},
{title:'A rook’s embrace',theme:'Rook and king',fen:'7k/5K2/8/8/8/8/8/6R1 w - - 0 1',solution:'g1h1',hint:'Close the h-file.'}
];
