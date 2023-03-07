let text = document.querySelector('h1'),
    ptext = document.getElementsByTagName('h6'),
    primaryBtn = document.getElementsByClassName('primary-btn'),
    newsletterBtn = document.getElementsByClassName('newsletter-btn'),
    myForm = document.getElementsByClassName('myForm'),
    submit = document.querySelectorAll('submit')
console.log(text, ptext, primaryBtn)


text.addEventListener('mouseenter', function() {
    text.textContent = 'O`zgardi'
})
text.addEventListener('mouseleave', function() {
    text.textContent = 'Qayti'
})

primaryBtn.addEventListener('click', function() {
    text.style.fontsize(100)
})

submit.addEventListener('click', function() {
    text.styly.fontsize = '100'
})

/*sncncsd dscjknjscn sdcjknsdjcmn sdcdjknsdcdmn sdcdnsndc */