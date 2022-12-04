let stone = document.getElementById('stone');
let paper = document.getElementById('paper');
let pencil = document.getElementById('pencil');
let sizer = document.getElementById('sizer');
let result = document.getElementById('result');
let content = document.getElementById('content');
let button = document.querySelector('button');
let computerBtn = document.getElementById("computer-Btn");
let playerBtn = document.getElementById('player-Btn');
let moreThen= document.getElementById('reset');

let playerText;
let user=0;
let computer=0;
let computerIn;

stone.addEventListener('click', text_1);
paper.addEventListener('click', text_2);
pencil.addEventListener('click', text_3);
sizer.addEventListener('click', text_4);
result.addEventListener('click', reset);
moreThen.addEventListener('click', resetValue);

function text_1()
{
    playerText = 1;
    showResult();
}
function text_2()
{
    playerText = 2;
    showResult();
}
function text_3()
{
    playerText = 3;
    showResult();
}
function text_4()
{
    playerText = 4;
    showResult();
}

function showResult()
{
    computerIn = Math.floor((Math.random() * 4) + 1);
    result.style.display = "block";
    content.style.display = "none";

    if(playerText == computerIn)
    {
        result.textContent = "Both are win! \nclick here"
        user++;
        computer++;
    }
    else if((playerText==1 && computerIn==3) || (playerText==1 && computerIn==4) || 
            (playerText==2 && computerIn==1) || (playerText==3 && computerIn==1) ||
            (playerText==3 && computerIn==2) || (playerText==4 && computerIn==2))
    {
        result.textContent = "You win! \nCongratulation \nclick here";
        user++;
    }
    else 
    {
        result.textContent = "Computer win! \nTry better luke in next time \nclick here";
        computer++;
    }
    computerBtn.textContent = computer;
    playerBtn.textContent = user;
}

function reset()
{
    result.style.display = "none";
    content.style.display = "flex";
}
function resetValue()
{
    user = 0;
    computer = 0;
    computerBtn.textContent = 0;
    playerBtn.textContent = 0;

}