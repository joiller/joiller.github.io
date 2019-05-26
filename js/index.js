window.onload = function () {
    let header = document.getElementsByTagName("header")[0]
    let moveY = 0 //记录初始位置
    window.onscroll = function () {
    //     与初始位置比较
        if (moveY>document.documentElement.getBoundingClientRect().top){
        //    表示向下滚动
            header.style.top = '-55px'
        } else {
            header.style.top = '0px'
        }

    //    更新当前位置
        moveY = document.documentElement.getBoundingClientRect().top
        console.log(`moveY:${moveY}`)
    }
}