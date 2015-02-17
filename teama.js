var setA = function(){
  for (var i = 0; i < 1000;i++){
    $.post('https://secret-sea-1263.herokuapp.com/messages', {body: "A"});
  }
};

var delOver = function(){
  for (var i = 14776; i < 18000; i++){
    $.ajax({url: 'https://secret-sea-1263.herokuapp.com/messages/'+i, method: 'DELETE'});
  }
};

var update = function(){
  for (var i = 13776; i < 14776; i++){
    $.ajax({url: 'https://secret-sea-1263.herokuapp.com/messages/'+i, method: 'PUT', data: {body: "A"} });
  }

};





setA();
update();
delOver();



setInterval(setA(), 15000);
setInterval(delOver(), 16000);
setInterval(update(), 17000);