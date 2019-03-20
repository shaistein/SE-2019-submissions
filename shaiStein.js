function arrayUnique(array) {
    var d = array.concat();
    for(var i=0; i<d.length; ++i) {
            for(var j=i+1; j<d.length; ++j) {
                if(d[i] === d[j])
                    d.splice(j--, 1);
            }
        }
    
        return d;
    }
function union(a,b) {
    if(Array.isArray(a) && Array.isArray(b)){
            var c =arrayUnique(a.concat(b));
        }
    if( typeof a === 'object' && typeof b === 'object')
    return c;
    }

union();
    
