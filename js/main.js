function throttle(cd,time=100) {
    let t = null;
    return function () {
        if (t) return;
        t = setTimeout(() => {
            cd.call(this);
            t = null;
        }, time);
    }
}
function navShow(){
    const el = document.getElementById('nav');
    document.onscroll = throttle(function (){
        if(document.documentElement.scrollTop >= 60){
            el.classList.add('show');
            el.classList.remove('hide');
        }else {
            el.classList.remove('show');
            el.classList.add('hide');
        }
    });
}
function setActive(selector){
    const el = document.getElementById(selector)
    for (const tag of el.getElementsByTagName('a')) {
        if (tag.href === document.URL){
            tag.classList.add('active')
        }
        else {
            tag.classList.remove('active')
        }
    }
}
class extendCode{
    static init(){
        document.querySelectorAll('.code-expand-btn').forEach((e) => {
            const parent = e.parentNode
            if (parent.clientHeight <= Number(GobalCofig.codelimit)){
                e.classList.add('display')
            }
            else {
                this.addShowEvent(e, parent.clientHeight)
                parent.setAttribute('style', 'max-height: var(--code-limit);')
            }
        })
    }
    static addShowEvent(target,height){
        target.addEventListener('click',(ev) => {
            const parent = target.parentNode
            if (!parent.classList.contains('done')){
                parent.classList.add('done')
                target.childNodes[0].classList = 'ri-arrow-drop-up-line'
                parent.setAttribute('style', 'max-height: ' + height + 'px;padding-bottom: 2.1em')
            }else {
                parent.classList.remove('done')
                target.childNodes[0].classList = 'ri-arrow-drop-down-line'
                parent.setAttribute('style', 'max-height: var(--code-limit);')
            }
        })
    }
}
function whenDOMReady() {
    navShow()
    setActive('menu')
    setActive('cate')
    extendCode.init()
}
whenDOMReady()
