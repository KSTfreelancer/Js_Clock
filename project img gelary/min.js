var buttons = document.querySelectorAll('li');
var pic = document.querySelectorAll('img');
// console.log(pic[1].src);
buttons[0].addEventListener('click',function(){
  pic[0].src="media/1.jpg" ;
  pic[1].src='media/2.jpg' ;
  pic[2].src='media/3.jpg' ;
  pic[3].src='media/4.jpg' ;
  pic[4].src='media/5.jpg' ;
  pic[5].src='media/6.jpg' ;
  pic[6].src='media/7.jpg' ;
  pic[7].src='media/8.jpg' ;
  pic[8].src='media/11.jpg' ;
});
buttons[1].addEventListener('click',function(){
   pic[0].src='media/11.jpg' ;
  pic[1].src='' ;
  pic[2].src='' ;
  pic[3].src='' ;
  pic[4].src='' ;
  pic[5].src='' ;
  pic[6].src='' ;
  pic[7].src='' ;
  pic[8].src='' ;
});
buttons[2].addEventListener('click',function(){
   pic[0].src='media/5.jpg' ;
  pic[1].src='media/6.jpg' ;
  pic[2].src='media/7.jpg' ;
  pic[3].src='' ;
  pic[4].src='' ;
  pic[5].src='' ;
  pic[6].src='' ;
  pic[7].src='' ;
  pic[8].src='' ;
});
buttons[3].addEventListener('click',function(){
   pic[0].src='media/1.jpg' ;
  pic[1].src='media/2.jpg' ;
  pic[2].src='media/5.jpg' ;
  pic[3].src='media/6.jpg' ;
  pic[4].src='media/7.jpg' ;
  pic[5].src='' ;
  pic[6].src='' ;
  pic[7].src='' ;
  pic[8].src='' ;
});
buttons[4].addEventListener('click',function(){
   pic[0].src='media/3.jpg' ;
  pic[1].src='media/4.jpg' ;
  pic[2].src='' ;
  pic[3].src='' ;
  pic[4].src='' ;
  pic[5].src='' ;
  pic[6].src='' ;
  pic[7].src='' ;
  pic[8].src='' ;
});