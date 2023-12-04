const tick = setInterval(function() {
    document.write("Meni o'chirib qo'ying! ")
}, 1000)

setTimeout (function() {
    clearInterval(tick)
}, 5000)