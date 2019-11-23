const nameField = document.querySelector('.form__name--js');
const surnameField = document.querySelector('.form__surname--js');
const postField = document.querySelector('.form__post--js');
const addButton = document.querySelector('.form__add--js');
const resetButton = document.querySelector('.form__reset--js');
const idField = document.querySelector('.form__id--js')

const database = firebase.database()

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    nameField.value ="";
    surnameField.value ="";
    postField.value ="";
});

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref(`/postbase/${idField.value}`).set({
        name: nameField.value,
        surname: surnameField.value,
        post: postField.value
    });
    nameField.value ="";
    surnameField.value ="";
    postField.value ="";
})