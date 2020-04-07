import swal from 'sweetalert2';

(() => {

  'use strict';

  const currentPageUrl = window.location.hash;
  const spaceThreadPageorNot = currentPageUrl.match(/#\/space\/\d+\/thread\/\d+/);

  // run thread page in space only
  if (spaceThreadPageorNot) {

    // add inputbox and likebutton
    const threadEl = document.querySelector('.gaia-argoui-toolbar-left > a');

    const textBoxEl = document.createElement('input');
    textBoxEl.type = 'text';
    textBoxEl.name = 'likename';
    textBoxEl.placeholder = 'Type Username';

    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.name = 'likebutton';
    buttonEl.innerText = 'Like!';

    threadEl.parentNode.insertBefore(textBoxEl, threadEl.nextSibling);
    textBoxEl.parentNode.insertBefore(buttonEl, textBoxEl.nextSibling);

    const clickAllLike = inputName => {

      let changeCount = 0;
      const commentBodies = document.querySelectorAll('.ocean-ui-comments-commentbase-body');
      const like = {
        'ja': 'いいね！',
        'en': 'Like',
        'cn': '顶'
      };

      commentBodies.forEach((commentBody) => {

        const commentUser = commentBody.childNodes[0].childNodes[0].children[0].innerText;
        const commentLike = commentBody.childNodes[2].children[0].children[0].getElementsByClassName('ocean-ui-comments-commentbase-like')[0];

        if (commentUser === inputName
            && commentLike.innerText === like.ja
            || commentLike.innerText === like.en
            || commentLike.innerText === like.cn) {
          // clike like button
          commentLike.click();
          changeCount++;
        }
      });
      return [inputName, changeCount];
    };

    buttonEl.addEventListener('click', () => {

      const inputName = textBoxEl.value;

      if (!inputName) {
        // alert('Input Username!!');
        swal.fire({
          title: 'Input username!!',
          icon: 'error',
          button: 'OK'
        });
      } else {
        const changedCount = clickAllLike(inputName);
        swal.fire({
          title: `Liked all ${inputName}'s commnents!`,
          text: `Liked ${changedCount[1]} comments!`,
          icon: 'success',
          button: 'OK'
        });
      }
    });
  }
})();