import { registerReactControllerComponents } from '@symfony/ux-react';
import './bootstrap';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));

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
