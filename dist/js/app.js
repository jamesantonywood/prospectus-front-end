(()=>{"use strict";(()=>{const e=document.querySelector(".menu-btn"),s=e.querySelector(".hamburger");e.addEventListener("click",(()=>{document.body.classList.contains("menu-open")?(document.body.classList.remove("menu-open"),document.body.classList.add("menu-closed"),s.classList.remove("is-active")):(document.body.classList.add("menu-open"),document.body.classList.remove("menu-closed"),s.classList.add("is-active"))}));const t=window.matchMedia("(min-width: 768px)"),c=()=>{t.matches&&(document.body.classList.remove("menu-open","menu-closed"),s.classList.remove("is-active"))};c(),t.addEventListener("change",c)})()})();
//# sourceMappingURL=app.js.map