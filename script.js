let path = document.querySelector('path')
let pathLength = path.getTotalLength();

console.log(path)
console.log(pathLength)

path.style.strokeDasharray = pathLength +  ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', ()=>{
    var scrollPercentage = (document.documentElement.scrollTop+ document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;
    console.log(pathLength)
})