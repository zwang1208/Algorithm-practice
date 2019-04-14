/**
 * Write an algorithm such that if an element in an MxN matrix is 0, 
 * its entire row and column are set to O.
 * 
 * @param {array} m 
 * @return {array}
 */



const zeroMatrix = (m) => {
    if(m.length === 0) {
        return m
    }

    let r = new Array(m.length),
        c = new Array(m[0].length)
    
    r.fill(false);
    c.fill(false);

    for(let x = 0; x < r.length; ++x) {
        for(let y = 0; y < c.length; ++y) {
            if(m[x][y] === 0) {
                r[x] = true;
                c[y] = true
            } 
        }
    }

    for(let x = 0; x < r.length; ++x) {
        for(let y = 0; y < c.length; ++y) {
            if(r[x] || c[y]) {
                m[x][y] = 0;
            } 
        }
    }

    return m
}