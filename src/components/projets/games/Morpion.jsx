import { useState,useEffect } from "react";

function Morpion(){

    const[tab,setTab]=useState([])
    const[End,setEnd] = useState(false)
    const[Player, setPlayer] = useState(0)
    const[winner,setWinner] = useState(null)
    const length = 3;
    
    useEffect(()=>{
        initTab(length)
    },[])

    function initTab(){
        const newTab = []
        for(let i = 0; i<length; i++){
            newTab.push(Array(length).fill(-1))
        }
        setTab(newTab)
    }

    //Fin de partit si toute les cases sont remplis
    function endGame(currentTab){
        for(let i = 0; i<length; i++){
            for(let j = 0; j<length; j++){
                if(currentTab[i][j] === -1){
                    return false
                }
            }
        }
        setEnd(true)
        return true
    }
    
    //fonction pour savoir qui a gagné
    function whoWin(currentTab){
        for(let i = 0; i<length; i++){
            //si toute les cases d'une colonne sont === entre elles et différentes à -1 alors un joueur a gagné
            if(currentTab[i][0]!==-1 && currentTab[i].every(cell => cell === currentTab[i][0])){
                setEnd(true)
                setWinner(currentTab[i][0])
                return currentTab[i][0]
            }           
        }

        for(let j = 0; j<length;j++){
            const col = currentTab.map(row => row[j])
            if(col[0] !== -1 && col.every(cell => cell === col[0])){
                setEnd(true)
                setWinner(col[0])
                return col[0]
            }
        }

        if(currentTab[0][0] !== -1 && currentTab.every((row,i) => row[i] === currentTab[0][0])){
            setEnd(true)
            setWinner(currentTab[0][0])
            return currentTab[0][0]
        }

        if(currentTab[0][length - 1] !== -1 && currentTab.every((row,i) => row[length - 1 - i] === currentTab[0][length - 1])){
            setEnd(true)
            setWinner(currentTab[0][length - 1])
            return currentTab[0][length - 1]
        }
        return null
    }

    function handleClick(i,j){

        //si case deja joué ou partit terminé on stop
        if(tab[i][j]!==-1 || End === true) return

        //modifie le tableau au click
        const newTab = tab.map((lig,indLig) =>
            lig.map((col,indCol) =>
                indLig === i && indCol === j ? Player : col
            )
        )
        setTab(newTab)

         //si quelqu'un a gagné on stop
         const winner = whoWin(newTab)
         if(winner!==null){
             setEnd(true)
             return
         }

         endGame(newTab)

         setPlayer((prev)=>1-prev)

    }

    function remake(){
        initTab()
        setEnd(false)
        setPlayer(0)
        setWinner(null)
    }

    return(
        <div className="flex flex-col items-center justify-center">
            {End && (
                <div className="text-center mt-4 text-lg font-semibold">
                    {winner !== null ? `Le joueur ${winner === 0 ? "O" : "X"} a gagné !` : "Match nul !"}
                </div>
            )}
            <div className="grid grid-cols-3 gap-2  p-2 border border-black rounded-xl">
            {tab.map((lig,indLig) => 
                    lig.map((col,indCol) =>
                        <div
                            key={indLig+indCol}
                            className="w-14 h-14 flex items-center justify-center border border-gray-400 text-xl font-bold cursor-pointer bg-white hover:bg-gray-100"
                            onClick={()=> handleClick(indLig,indCol)}
                        >
                            {col === -1 ? "" : col === 0 ? "O" : "X"}
                        </div>
                        
                    )
                )}
            </div>
            <div>
                <button
                    onClick={() => remake()}
                    className="mt-6 mx-auto block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"

                >remake
                </button>
            </div>
        </div>
    )
}

export default Morpion
