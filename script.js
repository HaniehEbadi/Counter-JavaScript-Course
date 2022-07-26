let count = 0;
let countInterval;

let onLoadCounter = function() {
  count = Number(Cookies.get('count'))
  console.log(count)
  document.getElementById('counter').innerHTML = count
  
  let previousState = Cookies.get('state')
  if (previousState === 'started' ) {
    start()
  }
}

let start = function() {
  countInterval = setInterval(function(){
    count += 1
    Cookies.set('count',count)
    document.getElementById('counter').innerHTML = count
  },1000)
  document.getElementsByClassName('start')[0].disabled = true
  document.getElementsByClassName('pause')[0].disabled = false
  document.getElementsByClassName('reset')[0].disabled = false
  Cookies.set('state','started')
}

let pause = function() {
  clearInterval(countInterval)
  document.getElementsByClassName('start')[0].disabled = false
  document.getElementsByClassName('pause')[0].disabled = true
  Cookies.set('state','paused')
}

let reset = function() {
  pause()
  count = 0
  document.getElementById('counter').innerHTML = count
  document.getElementsByClassName('reset')[0].disabled = true
}