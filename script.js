const input = document.getElementById('userInput');
const addTaskButton = document.getElementById('addTask');
const ulE = document.getElementById('ul');


// reload confirm message show
window.onbeforeunload = function(event){
    let message = "Are you sure you want to Leave this Page";
    event.returnValue = message;
    return message;
}


// main
function main(){
    addTaskButton.addEventListener('click', () => {
    // make an li element
    let makeContent = document.createElement('li'); 
    let inputVal = input.value;
    // condition for the empty input
    if (inputVal == ""){
        makeContent.textContent = "None";
    }else{
        makeContent.textContent = inputVal;
    }
    makeContent.setAttribute('id', 'list')
    ulE.appendChild(makeContent);
    

    // date of the to do list
    let date = new Date().toDateString();
    let makeLabel = document.createElement('label')
    makeLabel.setAttribute('id', 'Date')
    makeLabel.textContent = date;
    ulE.appendChild(makeLabel)


    // make a button
    let makeButton = document.createElement('button');
    makeButton.textContent = "Remove";
    makeButton.setAttribute('id', 'listButton')
    ulE.appendChild(makeButton);


    // remove the list
    makeButton.addEventListener('click', () => {
        makeContent.remove();
        makeButton.remove();
        makeLabel.remove()
    })

    
})}
main()







