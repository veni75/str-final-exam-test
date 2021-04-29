function changeElements() {
    const examples = document.querySelectorAll('.example');
    console.log(examples);
    Array.from(examples).map(item=>item.style.backgroundColor='red');
    Array.from(examples).map(item=>item.style.fontStyle='italic');
}


//export { changeElements };