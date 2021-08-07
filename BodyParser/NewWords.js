const NewWords = (req, res, next, mapa) => {

  
        //req.body.data
    const arrayOfData = req.body.data;
    
   
    arrayOfData.forEach((val) => {
        let rijec = parse_word(val[0])

        let pogodak = val[1];

        if (pogodak !== 0) {
            let points = -1;
            if (pogodak === 1)
                points = 1;
            let exists = mapa.get(rijec)
            if (exists === undefined) {
                mapa.set(rijec, points)
            }
            else {
                points += exists;

                mapa.set(rijec, points)
            }
        }
    })

   
    next();
}


function parse_word(word) {
    let temp = word
    temp=temp.trim()
    return temp;
   
    
}

module.exports = {NewWords}