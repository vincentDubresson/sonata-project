// Importation des styles
import './styles/sonata.scss';

// Gestionnaire de clics pour l'impersonation link
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.impersonation_on_link');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Empêcher le comportement par défaut du lien
      const href = link.getAttribute('href'); // Capture du lien
      setTimeout(() => {
        //
        if (!localStorage.getItem('__Secure-IMPERSONATE')) {
          localStorage.setItem('__Secure-IMPERSONATE', 'true');
        }
        // Ouvrir le lien dans un nouvel onglet
        window.open(href, '_blank');
        // Rafraîchir la page d'origine après un délai de 100 ms
        setTimeout(() => {
          window.location.reload();
        }, 10); // Délai de 100 ms
      }, 10); // Ouvre le lien après un délai de 10 ms
    });
  });
});

if (document.querySelector('.js_impersonation_link')) {
  const quitLink = document.querySelector('.js_impersonation_link');

  quitLink.addEventListener('click', (e) => {
    e.preventDefault();
    const href = quitLink.getAttribute('href');
    // Vérifier si la page a déjà été chargée
    setTimeout(() => {
      if (localStorage.getItem('__Secure-IMPERSONATE')) {
        // Marquer que la page a été chargée
        localStorage.removeItem('__Secure-IMPERSONATE');
        // eslint-disable-next-line no-restricted-globals
        location.href = href;
      }
    }, 10);
  });
}

// jQuery Version
// $(document).ready(function() {
//   const quitLink = $('.js_impersonation_link');
//
//   quitLink.on('click', function(e) {
//     e.preventDefault();
//     const href = $(this).attr('href');
//
//     setTimeout(function() {
//       if (localStorage.getItem('__Secure-IMPERSONATE')) {
//         localStorage.removeItem('__Secure-IMPERSONATE');
//         window.location.href = href;
//       }
//     }, 10);
//   });
// });

// Surveille les changements dans le localStorage
window.addEventListener('storage', (event) => {
  setTimeout(() => {
    if (event.key === '__Secure-IMPERSONATE' && !event.newValue) {
      window.location.reload();
    }
  }, 10);
});

// jQuery version
// $(window).on('storage', function(event) {
//   setTimeout(function() {
//     if (event.originalEvent.key === '__Secure-IMPERSONATE' && !event.originalEvent.newValue) {
//       window.location.reload();
//     }
//   }, 10);
// });
