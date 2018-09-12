
window.onload = function () {
    //天气预报
    /* var select = document.getElementById('weather');
    var para = document.querySelector('p');

    select.onchange = function () {
        var choice = select.value;
        switch (choice) {
            case 'sunny':
                para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
                break;
            case 'rainy':
                para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
                break;
            case 'snowing':
                para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
                break;
            case 'overcast':
                para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
                break;

            default:
                para.textContent = '';
                break;
        }
    } */
    //一个简单的日历
/* var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function () {
    var choice = select.value;
    var days;
    //根据选择的月份判断天数，修改日历标题
    switch (choice) {
        case 'February':
            days = 28;
            break;
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            days = 31;
            break;
        default:
            days = 30;
            h1.textContent = '请选择月份';
    }
    // ADD CONDITIONAL HERE

    createCalendar(days, choice);
}

function createCalendar(days, choice) {
    list.innerHTML = '';
    h1.textContent = choice;
    for (var i = 1; i <= days; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

createCalendar(31, 'January'); */

//更多颜色选择
/* var select = this.document.querySelector('select');
var html = document.querySelector('.output');
 
select.onchange = function() {
  var choice = select.value;
  switch (choice) {
 
      case 'White':
          update('white', 'black')
          break;
      case 'Black':
          update('black', 'white')
          break;
      case 'Purple':
          update('purple', 'pink')
          break;
      case 'Yellow':
          update('yellow', 'green')
          break;
      case 'Psychedelic':
          update('red', 'blue')
          break;
      default:
          break;
  }

  // ADD SWITCH STATEMENT
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
} */

//查找通讯录
/* var contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.onclick = function () {
    var name = input.value;
    input.value = '';
    input.focus();

    for (var i =0; i < contacts.length; i++) {

        var splitContact = contacts[i].split(':');
        
        if (splitContact[0] === name) {
            para.textContent = splitContact[0] + '的号码是' +splitContact[1];
            break;
        }
        else para.textContent = 'not found!'
    }
} */

//输出所有开根号为整数的数字
/* var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.onclick = function () {
    var num = input.value;
    input.value = '';
    input.focus();

    for (var i =0; i < num; i++) {

        var sqRoot = Math.sqrt(i);
        
        if (sqRoot === Math.floor(sqRoot)) {
            para.textContent += i + '';
        }
        else continue;
    }
}  */

//倒计时
/* var output = document.querySelector('.output');
output.innerHTML = '';
 for (var i = 10; i >= 0; i--) {
    var para = document.createElement('p') ;
    if (i === 0) {
        para.textContent = 'blast off!';

     }
     else if (i === 10) {
         para.textContent = 'Countdown 10';
     }
     else {
         para.textContent = i;
     }
     output.appendChild(para);
 } */

 //来宾列表
 var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
 var admitted = document.querySelector('.admitted');
 var refuse = document.querySelector('.refuse');
 admitted.textContent = 'Admit: ';
 refuse.textContent = 'Refuse: ';

 for (let i = 0; i < people.length; i++) {
     if (people[i] === 'Phil' || people[i] === 'Lola') {
        
        var ref = people[i];
        
        
        refuse.textContent += people[i] + ' ';
         
     }
     else {
        var adm = people[i];
        
        
        admitted.textContent += people[i] + ' ';
     }
 }
 console.log(ref);
 console.log(adm);
}

