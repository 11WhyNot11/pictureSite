import { getResource } from "../services/requests";

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value === '' || materialBlock.value === ''){
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);

    function getValues(selector){
        selector.addEventListener('change', () => {
            getResource('http://localhost:3000/values')
                .then(res => setValues(res))
                .catch(error => console.log(error));
        });
    }; 

    getValues(sizeBlock);
    getValues(materialBlock);
    getValues(optionsBlock);

    const setValues = (response) => {
        response.forEach((item) => {
            sizeBlock.forEach((option,i) => {
                option.setAttribute('value', Object.values(item.sizeValues)[i]);
            });
            materialBlock.forEach((option,i) => {
                option.setAttribute('value', Object.values(item.materialValues)[i]);
            });
            optionsBlock.forEach((option,i) => {
                option.setAttribute('value', Object.values(item.optionValues)[i]);
            });
             
            
        });
    };

    
};

export default calc;

