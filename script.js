const mOszlop=2
const mSor=2

function init(){
    for (let i = 0; i < mSor; i++) {
        let sor= document.createElement('div')
        sor.className="sor"
        for (let j = 0; j < mOszlop; j++) {
            let cella= document.createElement('div')
            cella.className="cella"
            // cella.addEventListener("click")
            cella.onclick=function(){
                let nyitottak=document.getElementsByClassName("nyitott")
                let idozito

               

                if (nyitottak.length<2){
                    this.classList.add("nyitott")
                    this.style="background-image:url(./img/"+this.dataset.kep+".png)"
                    if (nyitottak.length==1) idozito=setTimeout(function(){
                        let nyitottak=document.getElementsByClassName("nyitott")
                        console.log("length", nyitottak.length)
                        while(nyitottak[0]){
                            console.log("elem:",nyitottak[0])
                            nyitottak[0].style="background-image:url('')"
                            nyitottak[0].classList.remove("nyitott")
                        }
                    },2000)
                } // itt a vége

                if (nyitottak.length==2){
                  
                    if (nyitottak[0].dataset.kep==nyitottak[1].dataset.kep)
                    {
                        clearInterval(idozito)
                        while(nyitottak[0]){                           
                            nyitottak[0].classList.add('szurke')
                            nyitottak[0].classList.add("kitalalt")
                            nyitottak[0].onclick=null
                            nyitottak[0].classList.remove("nyitott")
                        }
                    }
                }
                
            }
            sor.appendChild(cella)

        }
        document.getElementById('palya').appendChild(sor)
    }

    for (let i = 1; i <= (mSor*mOszlop)/2; i++) {
        
        for (let j = 0; j < 2; j++) {
            let x = Math.round(Math.random()*(mSor-1))
            let y = Math.round(Math.random()*(mOszlop-1))
            let cella= document.getElementById("palya").children[x].children[y]
            if (!cella.dataset.kep) {
                cella.dataset.kep=i
                // cella.style="background-image:url(./img/"+i+".png)"
            }
            else j--
        }
    }

}


init()