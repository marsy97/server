const HardWords = (req, res, next, mapa) => {
 
    const word = req.params.word;
    const val = mapa.get(word.trim())
    if (val === undefined) {
        console.log("sending")
        res.json({ val: 0 })
    }
    else {
        if (val > 30)
            res.json({ val: 2 });
        else if (val > 10) {
            res.json({ val: 1 })
        }
        else if (val < -30) {
            res.json({ val: -1 })
        }
        else if (val < -10) {
            res.json({ val: -2 })
        }else
        res.json({ val:0});
    }

}


module.exports = {HardWords}