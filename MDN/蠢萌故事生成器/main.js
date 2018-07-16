window.onload = function () {
    //定义文档变量
    //COMPLETE VARIABLE AND FUNCTION DEFINITIONS
    var customName = document.getElementById('customname');
    console.log(customName.value);
    var randomize = document.querySelector('.randomize');
    console.log(randomize);
    console.log(document.querySelector('.randomize'));
    var story = document.querySelector('.story');
    //定义函数，返回数组中的随机值
    function randomValueFromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
//要git
    //定义故事中的字符串
    //RAW TEXT STRINGS
    var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
    var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
    var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
    var insertZ = ['turned into a slug and crawled away', 'spontaneously combusted', 'melted into a puddle on the sidewalk'];

    //EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
    randomize.addEventListener('click', result);

    function result() {
        //把storyText传给新变量，对新变量进行替换[赋值！！]
        var newStory = storyText;
        var xItem = randomValueFromArray(insertX);
        var yItem = randomValueFromArray(insertY);
        var zItem = randomValueFromArray(insertZ);
        newStory = newStory.replace(':insertx:', xItem);
        newStory = newStory.replace(':insertx:', xItem);
        newStory = newStory.replace(':inserty:', yItem);
        newStory = newStory.replace(':insertz:', zItem);

        //检测输入是否为空，替换名字
        if (customName.value != '') {
            var name = customName.value;
            newStory = newStory.replace('Bob', name);
        }
        //检测uk是否被选中，替换温度重量
        if (document.getElementById('uk').checked) {
            var weight = Math.round(300 * 0.0714286) + ' stone';
            var temperature = Math.round((94 - 32) / 1.8) + ' centigrade';
            newStory = newStory.replace('94 farenheit', temperature);
            newStory = newStory.replace('300 pounds', weight);

        }
        //生成随机故事

        
          

        
        story.textContent = newStory;
        story.style.visibility = 'visible';

    }
    document.querySelector('html').style.backgroundColor = 'red';
}