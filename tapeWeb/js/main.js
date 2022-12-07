var SmallLights = document.querySelector(".SmallLights");
    var Headlights = document.querySelector(".Headlights");
    var img = document.querySelectorAll(".Background img");
    var Grass = document.querySelectorAll(".grass");
    var lights = 0;
    var grass = [false, false, false, false];
    function OffLights() {
        lights += 2;
        //房间灯
        if (lights == 62) {            //关灯
            setTimeout("Headlights.style.transition = '1s';", 3000);
            setTimeout("Headlights.style.opacity = '1';", 3000);
            setTimeout("Headlights.style.transition = 'none';", 4000);
            SmallLights.style.transition = '1s';
            SmallLights.style.opacity = '1';
            setTimeout("SmallLights.style.transition = 'none';", 1000);
            lights = 3;
        } else if (lights == 31) {     //开灯
            setTimeout("SmallLights.style.opacity = '0';", 3000);
            Headlights.style.transition = '1s';
            Headlights.style.opacity = '0';
            setTimeout("Headlights.style.transition = 'none';", 1000);
            lights = 2;
        }
        //第一个草
        if (grass[0]) {            //草暗
            Grass[0].style.opacity = '0';
            Grass[0].style.animation = 'none';
            setTimeout("Grass[0].style.animation = 'grass 30s forwards';", 1000);
            random(1);
            grass[0] = false;
        } else if (grass[1]) {     //草亮
            Grass[0].style.opacity = '1';
            Grass[0].style.animation = 'none';
            setTimeout("Grass[0].style.animation = 'grass 20s reverse forwards';", 1000);
            random(0);
            grass[1] = false;
        }
        //第二个草
        if (grass[2]) {            //草暗
            Grass[1].style.opacity = '0';
            Grass[1].style.animation = 'none';
            setTimeout("Grass[1].style.animation = 'grass 30s forwards';", 1000);
            random(3);
            grass[2] = false;
        } else if (grass[3]) {     //草亮
            Grass[1].style.opacity = '1';
            Grass[1].style.animation = 'none';
            setTimeout("Grass[1].style.animation = 'grass 20s reverse forwards';", 1000);
            random(2);
            grass[3] = false;
        }
    }
    var interesting = setInterval(OffLights, 1000);
    function random(Switch) {
        var rd = Math.ceil(Math.random() * 16) + 3;
        rd *= 10000;
        setTimeout('grass[' + Switch + '] = true;', rd)
    }
    random(0);
    random(2);

    function snow() {
        var rd = Math.ceil(Math.random() * 24) + 6;
        return rd;
    }
    var Drop = document.querySelectorAll('.drop');
    for (i = 0; i < Drop.length; i++) {
        var rd = snow();
        Drop[i].style.setProperty('--w', rd + 'px');
        Drop[i].style.setProperty('--r', rd / 3 + 'px');
        Drop[i].style.setProperty('--x', snow() + 'px');
        Drop[i].style.setProperty('--y', snow() + 'px');
    }

    //获取宽高的函数
/*     const getWindowInfo = () => {
        const windowInfo = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        if ((windowInfo.width / windowInfo.height) > 1.85175) {
            for (i = 0; i < img.length; i++) {
                img[i].style.width = '100%';
                img[i].style.height = 'auto'
            }
        } else {
            for (i = 0; i < img.length; i++) {
                img[i].style.width = 'auto';
                img[i].style.height = '106%';
            }
        }
        console.log(windowInfo.width / windowInfo.height);
    };
    getWindowInfo();
    // 窗口变化后 不再变化多久才执行
     function debounce(fn, delay) {
    let timer;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, delay);
    };
}
     // 窗口变化后 不再变化200毫秒才执行
    const Debounce = debounce(getWindowInfo, 200);
    //监听窗口发生变化的函数
    window.addEventListener('resize', Debounce); */
