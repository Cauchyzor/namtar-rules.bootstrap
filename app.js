document.querySelectorAll("a[href='#']").forEach(node => {
    node.addEventListener("click", e => {
        console.log(e.target.attributes.data.value)
    });
})

console.log('App.js loaded !')
