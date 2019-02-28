$(function() {
  console.log("a")
  const activeClass = 'active';

  function hamburgBtn() {
    $('.btn_hamburger').on('click', function(event) {
      const button = $(this);
      event.preventDefault();

      button.find('a').toggleClass(activeClass);
    });
  };
  hamburgBtn();
});

