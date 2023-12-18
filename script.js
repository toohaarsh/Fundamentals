let allbtns = document.querySelectorAll('.btn')
let reset= document.getElementById('reset')
let msgcontainer= document.querySelector('.msgcontainer')
let turn = true

let arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
// for (let i = 0; i < arr.length; i++) {
//     for ( let j = 0; j< arr[i].length; j++){
//         if ( arr[i][j]== arr[i][j+1]&& arr[i][j+1]==arr[i][j+2]){
//             console.log ('witnner')
//         }
//     }
// }

allbtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log('clicked')
        if (turn) {
            btn.innerText = 'x'
            turn = false
        }
        else {
            btn.innerText = 'o'
            turn = true
        }
        btn.disabled = true

        winner()
    })


});

function winner() {
    for (let pattern of arr) {
        let winplayer=allbtns[pattern[0]].innerText

        if (allbtns[pattern[0]].innerText != '' && allbtns[pattern[1]].innerText != '' && allbtns[pattern[2]].innerText != '') {

            if (allbtns[pattern[0]].innerText == allbtns[pattern[1]].innerText && allbtns[pattern[1]].innerText == allbtns[pattern[2]].innerText) {
                console.log(`The game won by ${allbtns[pattern[0]].innerText}`)
                disable()
                show_msg(winplayer)
            }
            else{
                msgcontainer.innerText="It's a draw!!"
            }
        }

    }
}
let disable = () => {
    allbtns.forEach((btn) => {
        btn.disabled = true
    })
}
let enable = () => {
    allbtns.forEach((btn) => {
        btn.disabled = false
        btn.innerText=''
        msgcontainer.classList.add('hide')

    })
}
let show_msg=(winplayer)=>{
    msgcontainer.innerText=`The winner is '${winplayer}'!!`
    msgcontainer.classList.remove('hide')

}

reset.addEventListener('click',enable)
// let hide=()=>{
//      msgco
// }
// btn1=document.querySelector('#btn1')
// btn1.addEventListener('click', myfunction)

// function myfunction(){
//     console.log('clicked')
// }


