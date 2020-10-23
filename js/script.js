
      const modalPopup = document.querySelector('.modal-overlay');
      const feedbackBtn = document.querySelector('.main-contacts-btn');
      const closeBtn = modalPopup.querySelector('.modal-close');
      const modalForm = modalPopup.querySelector('form');
      const modalBlock = modalPopup.querySelector('.modal-content');
      const userName = modalPopup.querySelector('[name=name]');
      const userEmail = modalPopup.querySelector('[name=email]');

      let isStorageSupport = true;
      let storageName = '';

      /* try/catch */

      try {
        storageName = localStorage.getItem('name');
      } catch (err) {
        isStorageSupport = false;
      }

      /* modal show/close */

      feedbackBtn.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalPopup.classList.add('modal-show');
        modalBlock.classList.add('modal-content-show');
        if (storageName) {
          userName.value = storageName;
          userEmail.focus();
        } else {
          userName.focus();
        }
      });

      closeBtn.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalPopup.classList.remove('modal-show');
        modalBlock.classList.remove('modal-error');
      });

      window.addEventListener('keydown', function(evt) {
        if (evt.key === 'Escape') {
          if (modalPopup.classList.contains('modal-show')) {
            evt.preventDefault();
            modalPopup.classList.remove('modal-show');
            modalBlock.classList.remove('modal-error');
          }
        }
      });

      /* form submit */

      modalForm.addEventListener('submit', function(evt) {
        if (!userName.value || !userEmail.value) {
          evt.preventDefault();
          modalBlock.classList.remove('modal-error');
          modalPopup.offsetWidth = modalPopup.offsetWidth;
          modalBlock.classList.add('modal-error');
        } else {
          if (isStorageSupport) {
            localStorage.setItem('name', userName.value);
          }
        }
      });

