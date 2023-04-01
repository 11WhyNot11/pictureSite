const createBurger = (menuSelector, burgerSelector) => {
    const menu = document.querySelector(menuSelector),
          burger = document.querySelector(burgerSelector);
    
    menu.style.display = 'none';

    burger.addEventListener('click', () => {
        if(window.screen.availWidth < 993){
            if(menu.style.display =='none'){
                menu.classList.remove('bounceOut');
                menu.classList.add('animated', 'bounceInUp');
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
                menu.classList.remove('bounceInUp');
                menu.classList.add('bounceOut');
            }
        }
        
    });

    window.addEventListener('resize', () => {
        if(window.screen.availWidth){
            menu.style.display = 'none';
        }
    });
};

export default createBurger;