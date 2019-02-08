$('.circle-plus').on('click', function(){
  $(this).toggleClass('opened');
})

$(".circle-plus").click(function(){
  $(".footer").slideToggle(500);
});
