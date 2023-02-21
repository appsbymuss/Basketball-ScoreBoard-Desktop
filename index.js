let scoreHomeNode = document.getElementById("score-home")
let scoreGuestNode = document.getElementById("score-guest")



let scoreHomeRecord = 0 ;
let scoreGuestRecord =0 ;
function add1home(){
    scoreHomeRecord += 1
    scoreHomeNode.textContent = scoreHomeRecord
}
function add2home(){
    scoreHomeRecord += 2
    scoreHomeNode.textContent = scoreHomeRecord
} 
function add3home(){
    scoreHomeRecord += 3
    scoreHomeNode.textContent = scoreHomeRecord
}

function add1guest(){
    scoreGuestRecord += 1
    scoreGuestNode.textContent = scoreGuestRecord
}
function add2guest(){
    scoreGuestRecord += 2
    scoreGuestNode.textContent = scoreGuestRecord
}
function add3guest(){
    scoreGuestRecord += 3
    scoreGuestNode.textContent = scoreGuestRecord
}
function playAgain(){
    scoreGuestRecord = 0
    scoreHomeRecord = 0
    scoreHomeNode.textContent = scoreHomeRecord
    scoreGuestNode.textContent = scoreGuestRecord
    
}