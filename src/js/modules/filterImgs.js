const filter = () => {
    const triggerBtn = document.querySelectorAll('.portfolio-menu li'),
          header = document.querySelector('.portfolio-menu'),
          imgBlock = document.querySelectorAll('.portfolio-block'),
          noPortfolio = document.querySelector('.portfolio-no');

    function hideImgs(){
        imgBlock.forEach(item => {
            item.classList.add('animated', 'fadeIn');
            item.style.display = 'none';
        });

        triggerBtn.forEach(item =>{
            item.classList.remove('active');
        });
    }

    function showImgs(classSelector){
        if(imgBlock){
            imgBlock.forEach(item => {
                if(item.classList.contains(classSelector)){
                    item.style.display = "block";
                    item.classList.add('animated', 'fadeIn');   
                }  
            });
        } else {
            noPortfolio.style.display = 'block';
            noPortfolio.classList.add('animated', 'fadeIn');
        }
    }

    function delegateMenuItems(classSelector){
        header.addEventListener('click', (e) => {
            const target = e.target;
    
            if(target && target.classList.contains(classSelector)){
                triggerBtn.forEach(item => {
                    if(target === item){
                        hideImgs();
                        showImgs(classSelector);
                        item.classList.add('active');
                    }
                });        
            }
            if(target && (target.classList.contains('grandmother') || target.classList.contains('granddad'))){
                triggerBtn.forEach(item => {
                    
                    if(target === item){
                        item.classList.add('active');
                        noPortfolio.classList.add('animated', 'fadeIn');
                        noPortfolio.style.display = 'block';
                    }
                });        
            }
        });
    }

    delegateMenuItems('all');
    delegateMenuItems('lovers');
    delegateMenuItems('chef');
    delegateMenuItems('girl');
    delegateMenuItems('guy');
    delegateMenuItems('grandmother');
    delegateMenuItems('granddad');


};

export default filter;