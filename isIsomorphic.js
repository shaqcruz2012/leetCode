var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    let mapS = new Map(), mapT = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!mapS.has(s[i])) {
            if (mapT.has(t[i])) return false;
            mapS.set(s[i], t[i]);
            mapT.set(t[i], s[i]);
        }
        else if (mapS.get(s[i]) !== t[i]) return false;
    }
    return true;
};
