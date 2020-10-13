
import './css/reset/reset.css'
import './css//fontawesome-free-5.11.2-web/css/all.css'
import './css/style.css'

window.onload = function () {
  var img = document.getElementById('banimg')
  var imgArr = ['./img/banner/miphone1.jpg',
    './img/banner/miphone10.webp',
    './img/banner/misave.webp',
    './img/banner/mitv.webp',
    './img/banner/mihuan.webp',
    './img/banner/micramer.webp']
  let prev = document.getElementsByClassName('button-prev')[0]
  let next = document.getElementsByClassName('button-next')[0]
  var index = 0
  prev.onclick = function () {
    index--
    if (index < 0) {
      index = imgArr.length - 1
    }
    img.src = imgArr[index]
  }
  next.onclick = function () {
    index++;
    if (index > imgArr.length - 1) {
      index = 0
    }
    img.src = imgArr[index]
  }
  let banin = document.getElementsByClassName('banner-inner')[0]
  //banner图切换
  banin.onmouseover = function () {
    clearInterval(baner)
  }
  function autochange() {
    index++
    if (index > imgArr.length - 1) {
      index = 0
    }
    img.src = imgArr[index]

    setP()
    allP[index].style.backgroundColor = 'rgba(255,255,255,.4)'
    allP[index].style.borderColor = 'rgba(0, 0, 0, .4)'
  }
  banin.onmouseout = function () {
    baner = setInterval(autochange, 3000)
  }
  // 导航的变换
  let baner = setInterval(autochange, 3000);
  let allP = document.getElementsByClassName('point')
  allP[0].style.backgroundColor = 'rgba(255,255,255,.4)'
  allP[0].style.borderColor = 'rgba(0, 0, 0, .4)'
  for (let i = 0; i < allP.length; i++) {
    allP[i].onclick = function () {
      index = i;
      setP()
      img.src = imgArr[index];
      this.style.borderColor = 'rgba(0, 0, 0, .4)';
      this.style.backgroundColor = 'rgba(255,255,255,.4)';

    }
  }
  function setP() {
    for (let i = 0; i < allP.length; i++) {
      allP[i].style.borderColor = ''
      allP[i].style.backgroundColor = ''
    }
  }
  function addZero(i) {
    return i < 10 ? '0' + i : i + '';
  }
  let hour = document.getElementById('hour')
  let minute = document.getElementById('minute')
  let second = document.getElementById('second')
  function countdown() {
    let nowTime = new Date()
    let endTime = new Date('2020/9/15,18:00:00')
    let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000)
    let h = parseInt(leftTime / (60 * 60) % 24)
    let m = parseInt(leftTime / 60 % 60)
    let s = parseInt(leftTime % 60)
    h = addZero(h)
    m = addZero(m)
    s = addZero(s)
    hour.innerHTML = h
    minute.innerHTML = m
    second.innerHTML = s
  }
  setInterval(countdown, 1000)
}
