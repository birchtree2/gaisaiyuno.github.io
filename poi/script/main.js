$(function(){var key_bind;key_bind={65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z"};$('.button').mousedown(function(e){var player,_this;_this=$(this);if(_this.hasClass('single')){_this.addClass('clicked');_this.children('img').attr('src',function(index,attr){return attr.replace('A','B');});player=document.getElementById("single_"+(_this.data('sound')));player.load();return player.play();}else{if(_this.hasClass('clicked')){_this.removeClass('clicked');_this.children('img').attr('src',function(index,attr){return attr.replace('B','A');});player=document.getElementById("continued_"+(_this.data('sound')));return player.pause();}else{_this.addClass('clicked');_this.children('img').attr('src',function(index,attr){return attr.replace('A','B');});player=document.getElementById("continued_"+(_this.data('sound')));player.load();return player.play();}}}).mouseup(function(e){var _this;_this=$(this);if(_this.hasClass('single')){_this.removeClass('clicked');return _this.children('img').attr('src',function(index,attr){return attr.replace('B','A');});}}).click(function(e){return e.preventDefault();});$(document).keydown(function(e){var key,player;key=key_bind[e.keyCode];$(".button[data-key-bind=\""+key+"\"]").mousedown();if(e.keyCode===191){player=document.getElementById("sp_sound");player.load();player.play();return $('.sp').show().animate({width:360,opacity:0},5000).promise().done(function(){return $(this).css({width:150,display:'none',opacity:1});});}});return $(document).keyup(function(e){var key;key=key_bind[e.keyCode];return $(".button[data-key-bind=\""+key+"\"]").mouseup();});});