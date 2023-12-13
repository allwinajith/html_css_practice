
let container = document.getElementById('container');
let opnBtn = document.getElementById('openModal');
let closeBtn = document.getElementById('X_close');

container.style.display = 'none';

let toggleModal = () => {
    if (container.style.display === 'none') {
        container.style.display = 'block';
        opnBtn.style.visibility='hidden';
        document.addEventListener('click', outsideClickHandler);
    } else {
        container.style.display = 'none';
        opnBtn.style.opacity=1;
        opnBtn.style.visibility='visible';
        document.removeEventListener('click', outsideClickHandler)
    }
}

let outsideClickHandler = (event) => {
    if (!container.contains(event.target) && event.target !== opnBtn) {
        toggleModal();
    }
}

opnBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);

function clrData(){
    document.getElementById('inp').reset()
}