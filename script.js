
const button = document.getElementById('afficher');


fetch("https://www.tbads.eu/greta/kercode/ajax/?article=1")
    .then(response => response.json())
    .then(data => {
        let titreArticle = document.getElementById("titreArticle")
        let articlePremier = document.getElementById("articlePremier")
        titreArticle.innerHTML = data.title
        articlePremier.innerHTML = data.content[0]
})

// Ajouter le clic sur le bouton
button.addEventListener("click", function () {

    // Créer la requête avec l'url spécifié avec ses paramètres
    fetch("https://www.tbads.eu/greta/kercode/ajax/?article=1")
        .then(response => response.json())
        .then(data => {

            let modalPicture = document.getElementById("modal-picture");
            let modalTitle = document.getElementById("modal-title")
            let modalDate = document.getElementById("modal-date")
            let modalMonth = document.getElementById("modal-month")
            let modalYear = document.getElementById("modal-year")
            let modalText = document.getElementById("modal-text")

            modalPicture.src = data.picture
            modalText.innerHTML = data.content[0]
            modalDate.innerHTML = `Le ${data.date.day} ${data.date.month} ${data.date.year}`
    

            // Ouvrir le modal
            $('#myModal').modal('show');
        })

    });

