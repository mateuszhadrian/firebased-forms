const nameField = document.querySelector('.form__name--js');
const surnameField = document.querySelector('.form__surname--js');
const postField = document.querySelector('.form__post--js');
const addButton = document.querySelector('.form__add--js');
const resetButton = document.querySelector('.form__reset--js');
const idField = document.querySelector('.form__id--js');
const showButton = document.querySelector('.form__show--js');
const posts = document.querySelector('.posts');

const database = firebase.database();
const rootRef = database.ref('postbase');

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    nameField.value ="";
    surnameField.value ="";
    postField.value ="";
});

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const generatedID = rootRef.push().key;
    rootRef.child(generatedID).set({
        name: nameField.value,
        surname: surnameField.value,
        post: postField.value
    });
    nameField.value ="";
    surnameField.value ="";
    postField.value ="";
})

showButton.addEventListener('click', (e) => {
    e.preventDefault();
    rootRef.orderByKey().on('value', snapshot => {
        const postObjects = snapshot.val();
        const table = [];
        for (postObject in postObjects){
            table.push(postObjects[postObject]);
        };
        console.log(table);
        for (const i of table){
            console.log(i.name);
            posts.innerHTML += `<li>name:${i.name}<br>post: ${i.post}</li>`
        }
    })
})