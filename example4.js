const onChange = (param) => {
    // You can write your code like this 
    //document.getElementById('p1').innerHTML = param.target.value;

    document
    // 1. Read from input
    .getElementById('p1')
    //2. Write into the paragraph
    .innerHTML = param.target.value;
}

document.getElementById('inp1').addEventListener('keydown', onChange);