const countValue = document.querySelector('#counter'); //Get Counter value

const increment = () => {
    //Get the value from UI
    let value = parseInt(countValue.innerText);  //value in string form so convert to int value
    value = value + 1; //Update value
    countValue.innerText = value; //set Value onto UI
};

const decrement = () => {
    //Get the value from UI
    let value = parseInt(countValue.innerText);  //value in string form so convert to int value
    value = value - 1; //Update value
    countValue.innerText = value; //set Value onto UI
};