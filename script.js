const circle = document.getElementById('circle')
const total = 10
const radius = 180
const candles = []

for (let i = 0; i < total; i++) {
  const angle = (i / total) * 2 * Math.PI
  const img = document.createElement('img')
  img.src = 'IMAGES/candle.png'
  img.className = 'candle'
  img.dataset.baseAngle = angle
  circle.appendChild(img)
  candles.push(img)
}

let rotation = 0
let lastTime = null

function animate(currentTime) {
  if (!lastTime) lastTime = currentTime
  const deltaTime = currentTime - lastTime
  lastTime = currentTime
  
  rotation += 0.00524 * (deltaTime / 16.67)
  
  candles.forEach((candle) => {
    const base = parseFloat(candle.dataset.baseAngle)
    const angle = base + rotation
    
    const x = 200 + radius * Math.cos(angle) - 50
    const y = 200 + radius * Math.sin(angle) - 50
    
    candle.style.left = `${x}px`
    candle.style.top = `${y}px`
    
    candle.style.transform = `rotate(${-rotation}rad)`
  })
  
  requestAnimationFrame(animate)
}
requestAnimationFrame(animate)

function copyCA() {
  navigator.clipboard.writeText('contract here')
  alert('合约已复制')
}

document.body.addEventListener('click', () => {
  document.getElementById('music').play()
}, { once: true })