let all_buttons= document.querySelectorAll('.All-buttons')
let msg_container= document.querySelector('.msg_container')
let your_score= document.getElementById('your-score')
let comp_score= document.getElementById('comp-score')
let y = document.getElementById('y')
let c = document.getElementById('c')
let comp
let player

your_score=0
comp_score=0

let choice= ["Rock","Paper","Scissors"]

all_buttons.forEach((button) => button.addEventListener('click',()=>{
    player=button.textContent
    comp=comp_move()
    msg_container.textContent=check_winner()
    score()
    y.innerText =your_score
    c.textContent = comp_score
    console.log(comp)
    console.log(player)
    console.log(your_score)
    console.log(comp_score)
    
}))     

let comp_move=()=>{
    let rand= Math.floor(Math.random()*3)
    return (choice[rand])
    
}

let check_winner=()=>{
    if (player==comp){
        return 'draw'
    }
    else if(comp=='Rock'){
        return (player=='Paper')? "You won..!" : 'You loose..:('
    }
    else if ( comp=='Paper'){
        return (player=='Scissors')? 'You won..!': 'You loose..:('
    }
    else if ( comp=="Scissors"){
        return ( player=='Rock')? 'You won..!': 'You loose..:('
    }
    
    console.log(comp_score)
    console.log(your_score)
}

let score=()=>{
    if(msg_container.textContent=='You won..!'){
        your_score+=1
        return your_score
    }
    else if(msg_container.textContent=='You loose..:('){
        comp_score+=1
        return comp_score
    }
}
