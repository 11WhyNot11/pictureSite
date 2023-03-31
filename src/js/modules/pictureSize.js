const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg (block) {
        const img = block.querySelector('img');
        // something.png => something-1.png
        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideImg (block) {
        const img = block.querySelector('img');
        // something-1.png => something.png
        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};

// sizeBlock.forEach((item,i) => {
//     item.addEventListener('mouseover', () => {
//         for(let child of item.children){
//             if(child.nodeName === 'IMG'){
//                 child.setAttribute('src', `assets/img/sizes-${[i+1]}-1.png`);
//                 child.classList.add('animated', 'fadeIn');
//             }else if(child.classList.contains('sizes-hit')){
//                 child.style.display = 'block';
//             }else{
//                 child.style.display = 'none';
//             }
            
//         }
//     });
//     item.addEventListener('mouseout', () => { 
//         for(let child of item.children){
//             if(child.nodeName === 'IMG'){
//                 item.firstElementChild.setAttribute('src', `assets/img/sizes-${[i+1]}.png`);
//                 item.firstElementChild.classList.remove('fadeIn');
//             } else{
//                 child.style.display = 'block';
//             }
//         }
        
//     });
// });

export default pictureSize;