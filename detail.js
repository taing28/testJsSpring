const detailButtons = document.querySelectorAll('.detail-btn')
console.log(detailButtons);

detailButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
    })
})
