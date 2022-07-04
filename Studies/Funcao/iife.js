// IIFE -> Immediately Invoked Function Expression
// nNão pega o escopo global

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()