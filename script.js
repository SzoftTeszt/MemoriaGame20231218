const mOszlop=2
const mSor=2

function init(){
    for (let i = 0; i < mSor; i++) {
        let sor= document.createElement('div')
        sor.className="sor"
        for (let j = 0; j < mOszlop; j++) {
            let cella= document.createElement('div')
            cella.className="cella"
            sor.appendChild(cella)
        }
        document.getElementById('palya').appendChild(sor)
    }

}


init()