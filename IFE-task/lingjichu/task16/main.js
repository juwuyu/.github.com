window.onload = function () {
    
    //元素变量
    var hello = document.querySelector('.helloButton');
    var hobbies = document.querySelector('.hobbyButton');
    var message = this.document.querySelector('.message');

    //按钮的监听器
    hello.addEventListener('click', sayHello);
    hobbies.addEventListener('click', myHobbies);

    //响应函数
    function sayHello() {
        message.textContent = '';
        message.style.visibility = 'visible'
        message.textContent = '很高兴 : ) 能遇见你！';
        message.style.backgroundColor = 'yellow';
    }
    function myHobbies() {
        message.style.visibility = 'visible'
        message.textContent = '';
        var hobbiesArray = ['电影','美食','舞蹈','单机游戏'];
        for(var i = 0; i < hobbiesArray.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = hobbiesArray[i];
            message.appendChild(listItem);
                }
            var more = document.createElement('button');
            more.textContent = '还不够？点我';
            message.appendChild(more);
            more.addEventListener('click',openUrl);
            function openUrl() {
                window.location.href='https://github.com/juwuyu';
            }
                   message.style.background = '#9966CC' ;
    }

}