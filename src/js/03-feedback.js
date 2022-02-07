import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let items = {};

formRef.addEventListener('submit', formSubmit);
formRef.addEventListener('input', throttle(textAreaInput, 500));
populateForm();

function textAreaInput(evt) {
    items[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }

function formSubmit(evt) {
    evt.preventDefault();
    if (formRef.email.value === '' || formRef.message.value === '') {
        alert('All fields must be filled');
        } else { 
        console.log(items);
        evt.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        items = {};
    }
}

function populateForm() {
    const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY))
   
    for (const key in savedText) {
        if (key) {
            formRef[key].value = savedText[key];
            items = savedText;
        } 
    }
}



