window.onload = function () {
    let container = document.getElementsByClassName('container')[0]
    let loading = container.getElementsByTagName("span")[0]
    async function dot1() {
        setInterval(function () {
            loading.innerText = 'loading.'
        },2000)
    }

    async function dot2() {
        setInterval(function () {
            loading.innerText = 'loading..'
        },2000)
    }

    async function dot3() {
        setInterval(function () {
            loading.innerText = 'loading...'
        },2000)
    }

    async function nodot(){
        setInterval(function () {
            loading.innerText = 'loading'
        },2000)
    }

    dot1()
    setTimeout(dot2,500)
    setTimeout(dot3,1000)
    setTimeout(nodot,1500)

}