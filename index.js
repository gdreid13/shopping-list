$('.shopping-item-controls').on('click', '.shopping-item-toggle', function(e) {
  $(e.target).closest('li').toggleClass('shopping-item__checked');
})

$('.shopping-item-controls').on('click', '.shopping-item-delete', function(e) {
  const target = e.target;
  const li = target.closest('li');
  li.remove();
})



$('form').submit(function(e) {
  e.preventDefault();
  let formInput = $('input').val().trim();
  let parsedItems = $.parseHTML( `
        <li>
        <span class="shopping-item">${formInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li> `
  );
  $('.shopping-list').append(parsedItems);

  $('.shopping-item-controls').on('click', '.shopping-item-toggle', function(e) {
      $(e.target).closest('li').toggleClass('shopping-item__checked');
  })
  
  $('.shopping-item-controls').on('click', '.shopping-item-delete', function(e) {
    const target = e.target;
    const li = target.closest('li');
    li.remove();
  })

})

