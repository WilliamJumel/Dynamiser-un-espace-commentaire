const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (firstName === '' || lastName === '' || message === '' || /^\s*$/.test(firstName) || /^\s*$/.test(lastName) || /^\s*$/.test(message)) {
        errorMessage.style.display = 'block';
        return; // Arrêter l'exécution de la fonction si des champs sont vides ou contiennent uniquement des espaces
    }

    // Si aucun champ n'est vide ou ne contient que des espaces, cacher le message d'erreur
    errorMessage.style.display = 'none';

    const commentList = document.getElementById('comment-list');

    const newComment = document.createElement('div');
    newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');

    newComment.innerHTML = 
    ` <div class="flex-1 py-10 border-t border-gray-200">
            <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                <p>${message}</p>
            </div>
        </div> `;

    commentList.appendChild(newComment);

    // Réinitialiser les champs du formulaire
    form.reset();
});
