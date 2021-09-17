window.onload = function () {
    let container = document.getElementsByClassName('container')[0]
    let loading = container.getElementsByTagName("span")[0]
    async function dot1() {
        loading.innerText = 'loading.'
        setInterval(function () {
            loading.innerText = 'loading.'
        },2000)
    }

    async function dot2() {
        loading.innerText = 'loading..'
        setInterval(function () {
            loading.innerText = 'loading..'
        },2000)
    }

    async function dot3() {
        loading.innerText = 'loading...'
        setInterval(function () {
            loading.innerText = 'loading...'
        },2000)
    }

    async function nodot(){
        loading.innerText = 'loading'
        setInterval(function () {
            loading.innerText = 'loading'
        },2000)
    }

    dot1()
    setTimeout(dot2,500)
    setTimeout(dot3,1000)
    setTimeout(nodot,1500)

}