document.querySelector('.btn-primary').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const sectionProjets = document.getElementById('projets');
    sectionProjets.scrollIntoView({ behavior: 'smooth' }); // Fait défiler la page en douceur
  });