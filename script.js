if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {

    console.log('Service worker registered successfully');
  }).catch(function(err) {
    console.log('Service worker registration failed: ', err);
  });
}

const askJack = document.getElementById("askJackForm");
if(askJack){
    const askJackFormSubmit = e => {
        e.preventDefault();
        const contact = {
            "name": e.target.name.value,
            "email": e.target.email.value,
            "question": e.target.question.value,
        };

        fetch(“YOURURL", {mode: "no-cors", method: "POST", body: contact})
            .then(response => {
                console.log('hello response!', response);
            }).catch(() => {
                let allContacts = [];

                const existingContacts = localStorage.getItem('contact');
                if(existingContacts){
                    allContacts = JSON.parse(existingContacts);
                }

                allContacts.push(contact);
                localStorage.setItem('contact', JSON.stringify(allContacts));
            });
    };
    askJack.addEventListener('submit', askJackFormSubmit, false);
}


