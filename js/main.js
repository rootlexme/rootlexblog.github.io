function throttle(e,t=100){let o=null;return function(){o||(o=setTimeout((()=>{e.call(this),o=null}),t))}}function navShow(){const e=document.getElementById("nav");document.onscroll=throttle((function(){document.documentElement.scrollTop>=60?(e.classList.add("show"),e.classList.remove("hide")):(e.classList.remove("show"),e.classList.add("hide"))}))}function setActive(e){const t=document.getElementById(e);for(const e of t.getElementsByTagName("a"))e.href===document.URL?e.classList.add("active"):e.classList.remove("active")}class extendCode{static init(){document.querySelectorAll(".code-expand-btn").forEach((e=>{const t=e.parentNode;t.clientHeight<=GLOBALCONFIG.codelimit?e.classList.add("display"):(this.addShowEvent(e,t.clientHeight),t.setAttribute("style",`max-height: ${GLOBALCONFIG.codelimit}px;`))}))}static addShowEvent(e,t){e.addEventListener("click",(o=>{const n=e.parentNode;n.classList.contains("done")?(n.classList.remove("done"),e.childNodes[0].classList="ri-arrow-drop-down-line",n.setAttribute("style",`max-height: ${GLOBALCONFIG.codelimit}px;`)):(n.classList.add("done"),e.childNodes[0].classList="ri-arrow-drop-up-line",n.setAttribute("style",`max-height: ${t}px;padding-bottom: 2.1em;`))}))}}class toc{static init(){document.querySelectorAll(".toc a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),this.getAnchor(decodeURI(e.target.parentNode.hash))}))}))}static scrollToAnchor(e,t){console.log(e,t),scrollTo({top:t,left:e,behavior:"smooth"})}static getAnchor(e){const t=document.querySelector(e);this.scrollToAnchor(t.getBoundingClientRect().left,t.getBoundingClientRect().top+(window.scrollY?window.scrollY:0)-72)}}function lazyloadImg(){window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src",callback_error:e=>{e.setAttribute("src",GLOBALCONFIG.lazyload.error)}})}function lightbox(){window.ViewImage&&ViewImage.init(".content_g img")}function removePace(){document.querySelector("body").className="pace-done"}function whenDOMReady(){navShow(),setActive("menu"),setActive("cate"),PAGECONFIG.is_post&&toc.init(),GLOBALCONFIG.lazyload.enable&&lazyLoadInstance.update(),GLOBALCONFIG.lightbox&&lightbox(),!1!==GLOBALCONFIG.codelimit&&extendCode.init(),PAGECONFIG.comments&&Comments()}document.addEventListener("pjax:complete",(()=>{whenDOMReady(),removePace()})),GLOBALCONFIG.lazyload.enable&&lazyloadImg(),whenDOMReady();