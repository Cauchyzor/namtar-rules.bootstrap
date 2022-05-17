document.querySelectorAll("a[href='#']").forEach(node => {
    node.addEventListener("click", e => {
        console.log(e.target.attributes.data.value)
        fetch(`src/${e.target.attributes.data.value}.html`)
            .then(r => r.text())
            .then(content => {
                document.querySelector('main').innerHTML = content
            })
    });
})

console.log('App.js loaded !')
