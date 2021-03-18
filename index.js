let totalBacked = 89914;
let totalBackers = 5007;
let bambooLeft = 101;
let blackEditionLeft = 64;
let mahoganyLeft = 1;

updatePage();

$('#title .bookmark').click(function() {
  $('#title .bookmark').toggleClass('bookmarked');
  if ($('#title .bookmark').hasClass('bookmarked')) {
    $('#title svg circle').attr('fill', 'hsl(176, 72%, 28%)');
    $('#title svg path').attr('fill', '#fff');
    $('#title .bookmark p').text('Bookmarked');
  } else {
    $('#title svg circle').attr('fill', '#2F2F2F');
    $('#title svg path').attr('fill', '#B1B1B1');
    $('#title .bookmark p').text('Bookmark');
  }
});

$('#about .select-button').click(function() {
  $('#back-project #' + $(this).attr('name')).click();
});

$('#back-project .form-check-input').click(function(event) {
  $('#back-project .card').removeClass('selected');
  $('#back-project .card-footer').addClass('d-none');
  $('#back-project .' + event.target.id).addClass('selected');
  $('#back-project .' + event.target.id + ' .card-footer').removeClass('d-none');
});

$('.continue-button').click(function() {
  totalBackers++;
  switch ($(this).attr('name')) {
    case 'continue-25':
      totalBacked += parseInt($('.form-control[name="pledge-25"]').val());
      bambooLeft--;
      break;
    case 'continue-75':
      totalBacked += parseInt($('.form-control[name="pledge-75"]').val());
      blackEditionLeft--;
      break;
    case 'continue-200':
      totalBacked += parseInt($('.form-control[name="pledge-200"]').val());
      mahoganyLeft--;
      break;
  }
  updatePage();
});

function updatePage() {
  $('.total-backed').text('$' + numberWithCommas(totalBacked));
  $('.total-backers').text(numberWithCommas(totalBackers));
  $('.pledge-25-left').html(bambooLeft + ' <span>left</span>');
  $('.pledge-75-left').html(blackEditionLeft + ' <span>left</span>');
  $('.pledge-200-left').html(mahoganyLeft + ' <span>left</span>');

  if (bambooLeft === 0) {
    $('.pledge-25').addClass('out-of-stock');
    $('.select-button[name="pledge-25"]').text('Out of stock')
    $('.select-button[name="pledge-25"]').prop('disabled', true);
    $('.select-button[name="pledge-25"]').addClass('disabled');
  }
  if (blackEditionLeft === 0) {
    $('.pledge-75').addClass('out-of-stock');
    $('.select-button[name="pledge-75"]').text('Out of stock')
    $('.select-button[name="pledge-75"]').prop('disabled', true);
    $('.select-button[name="pledge-75"]').addClass('disabled');
  }
  if (mahoganyLeft === 0) {
    $('.pledge-200').addClass('out-of-stock');
    $('.select-button[name="pledge-200"]').text('Out of stock')
    $('.select-button[name="pledge-200"]').prop('disabled', true);
    $('.select-button[name="pledge-200"]').addClass('disabled');
  }

  $('.progress-bar').width(Math.floor(totalBacked / 1000) + '%');
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
