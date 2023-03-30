const changeCalcModalState = (state) => {
    const sizeBlock = document.querySelectorAll('#size'),
          materialBlock = document.querySelectorAll('#material'),
          optionsBlock = document.querySelectorAll('#options'),
          promocodeBlock = document.querySelectorAll('.promocode'),
          resultBlock = document.querySelector('.calc-price');

    const putBlockValInState = (event, elem, prop) => {
        elem.forEach((item) => {
            item.addEventListener(event, () => {
                state[prop] = item.value;
                console.log(state);

                state['price'] = resultBlock.textContent;
            });
        });
    };

    

    putBlockValInState('change', sizeBlock, 'size');
    putBlockValInState('change', materialBlock, 'material');
    putBlockValInState('change', optionsBlock, 'options');
    putBlockValInState('input', promocodeBlock, 'promocode');

    
};

export default changeCalcModalState;