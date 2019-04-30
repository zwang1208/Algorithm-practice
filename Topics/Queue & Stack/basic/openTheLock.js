/**
 * You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.
 * The lock initially starts at '0000', a string representing the state of the 4 wheels.
 * You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.
 * Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.
 */

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
function convertDigit (digit) {
    let plusOne = digit + 1;
    let minusOne = digit - 1;
    if(plusOne === 10) plusOne = 0;
    if(minusOne === -1) plusOne = 9;
    return [plusOne, minusOne];
}

function findNeighbour(current) {
    let neighbours = [];
    for(let i = 0; i < current.length; i++) {
        const [plusOne, minusOne] = convertDigit(Number(current[i]));
        neighbours.push(`${current.substring(0,i)}${plusOne}${current.substring(i+1, current.length)}`)
        neighbours.push(`${current.substring(0,i)}${minusOne}${current.substring(i+1, current.length)}`)
    }
    return neighbours;
}

var openLock = function(deadends, target) {
    let visited = new Set([...deadends]);
    let queue = [];
    let steps = -1;
    
    if(visited.has('0000')) return -1;
    
    queue.push('0000');
    visited.add('0000');
    
    while(queue.length) {
        steps += 1;
        for(let i = 0; i < queue.length; i++) {
            let curr = queue.shift();
            if(curr === target) return steps;
            let neighbours = findNeighbour(curr);
            for(let neighbour of neighbours) {
                if(!visited.has(neighbour)) {
                    queue.push(neighbour);
                    visited.add(neighbour)
                }
            }
        }
    }
    return -1
};