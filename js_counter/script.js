let counter = 0;
const display = document.querySelector(".display");

(function () {
    console
    const removeButton = document.querySelector(".removeButton");
    const addButton = document.querySelector(".addButton");
    const resetButton = document.querySelector(".resetButton");
    display.textContent = (counter = 0);
    
    const removeOne = () => {
        display.textContent = (counter = counter - 1);
        console.log(counter);
    };

    const addOne = () => {
        display.textContent = (counter = counter + 1);
        console.log(counter);
    };

    const reset = () => {
        counter = 0;
        display.textContent = counter;
        console.log(counter);
    }

    removeButton.addEventListener("click", function() {
        if (counter === 0){
            removeButton.ariaDisabled = true;
        }
        else{
            removeButton.ariaDisabled = false;
            console.clear();
            removeOne();
        }
    });

    addButton.addEventListener("click", function() {
        if (counter === 99){
            addButton.ariaDisabled = true;
        }
        else{
            addButton.ariaDisabled = false;
            console.clear();
            addOne();
        }
    });   
    
    resetButton.addEventListener("click", function() {
        console.clear();
        reset();
    })
    
})();
