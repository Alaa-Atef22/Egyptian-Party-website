/*section one */
$('.openNav').click(function(){
  $('.sidenav').animate({ width:'200px',},100)
  $(".content").animate({marginLeft :'200px'},100)})
$('.closebtn').click(function(){
  $('.sidenav').animate({ width:'0px',},100)
  $(".content").animate({marginLeft :'0px'},100)
})
$('a').click(function(e){
let link=$(e.target).attr('href') 
let sectionTop=$(link).offset().top;
$('body,html').animate({scrollTop:sectionTop},2000)})
/*section two*/
$('.text').click(function(e){
  $('.paragraph').not($(e.target).next()).slideUp(550);
  $(e.target).next().slideToggle(550);
});
/*section three */
function countDown(){
  let lastDate= new Date('10 october 2021')
  let date= new Date()
  let days = Math.floor((lastDate - date) / (24 * 60 * 60 * 1000));
  let hours= 24-date.getHours()
  let mins= 60-date.getMinutes()
  let secs= 60-date.getSeconds()
$('#days').html(`${days}`)
$('#hours').html(`${hours}`)
$('#mins').html(`${mins}`)
$('#secs').html(`${secs}`)
}
setInterval(countDown,1000)
/*section four */
const text4 = 100;
$('textarea').keyup(function(e){
let contant=$(e.target).val();
let contant2=text4-contant.length;
if(contant2 <=0 )
{$("#text4").text("your available character finished");}
else{$("#text4").text( contant2);}
});
