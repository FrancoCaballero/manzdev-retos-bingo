const f=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(n){if(n.ep)return;n.ep=!0;const t=c(n);fetch(n.href,t)}};f();const p=99,i=[],y=[];for(let r=0;r<p;r++)i[r]=r+1;const b=document.querySelector("#player .numbers"),h=document.querySelector("#cpu .numbers"),L=document.querySelector(".marks"),l=document.querySelector(".number");l.addEventListener("click",a);function d(r){const e=document.createElement("div");return e.innerHTML=r,e.classList.add("item"),e}function u(){l.removeEventListener("click",a),l.addEventListener("click",()=>window.location.reload())}function g(){const r=document.querySelectorAll("#player .numbers .disabled-number"),e=document.querySelectorAll("#cpu .numbers .disabled-number");r.length===15?(l.style.fontSize="15px",l.innerHTML=`Jugador Gana! 
 volver a jugar?`,u()):e.length===15&&(l.style.fontSize="15px",l.innerHTML=`CPU Gana! 
 volver a jugar?`,u())}function v(r){const e=document.querySelector("#player .numbers"),c=document.querySelector("#cpu .numbers");e.childNodes.forEach(o=>{Number(o.innerHTML)===r&&o.classList.add("disabled-number")}),c.childNodes.forEach(o=>{Number(o.innerHTML)===r&&o.classList.add("disabled-number")}),g()}function a(){const r=Math.floor(Math.random()*i.length),e=i.splice(r,1);y.push(e[0]),l.innerHTML=e,L.appendChild(d(e)),v(e[0])}function m(r){const e=[...i];for(let c=0;c<15;c++){const o=Math.floor(Math.random()*e.length),n=e.splice(o,1);r.appendChild(d(n))}}m(b);m(h);
