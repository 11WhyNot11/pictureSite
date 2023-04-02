import { postData } from "../services/requests";

const drop = () => {
    // drag *
    // dragend *
    // dragenter - объект над dropArea
    // dragexit *
    // dragleave - объект за пределами dropArea
    // dragover - объект зависает над dropArea
    // dragstart *
    // drop - объект отправлен в dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e){
        e.preventDefault();
        e.stopPropagation(); // виключаємо хоістінг
    }

    function highlight(item){
        item.closest('.file_upload').style.border = '1px solid purple';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .3)';
    }

    function unHighlight(item){
        item.closest('.file_upload').style.border = 'none';
        switch(item.getAttribute('data-upload')){
            case 'main':
                item.closest('.file_upload').style.backgroundColor = '#f7e7e6';
                break;
            case 'calc':
                item.closest('.file_upload').style.backgroundColor = '#fff';
                break;
            case 'modal':
                item.closest('.file_upload').style.backgroundColor = '#ededed';
                break;


        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;// dataTransfer - цей той обэкт з файлом, який ми перетаскуємо з файлової структури
            // тут ми зразу, як тільки перетащиться картинка, можем зафетчити дані на сервер, просто передавши input.files

            if(input.getAttribute('data-upload') === 'main'){
                const formData = new FormData();
                formData.append('image', input.files[0]);
                  
                postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                    })
                    .finally(() => {
                        input.previousElementSibling.textContent = 'Файл не выбран';
                    });
            }
            
            let dots;
			const arr = input.files[0].name.split('.');
			
			arr[0].length > 7 ? dots = '...' : dots = '.'; 
			const name = arr[0].substr(0, 7) + dots + arr[1];
			input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;