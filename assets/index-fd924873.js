(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function m(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=m(e);fetch(e.href,n)}})();var o=document.getElementById("modal-order"),u=document.getElementById("open-modal-order"),y=document.getElementById("open-modal-top-order"),p=document.getElementsByClassName("close")[0];u.onclick=function(){o.style.display="block"};y.onclick=function(){o.style.display="block"};p.onclick=function(){o.style.display="none"};var s=document.getElementById("modal-thanks"),b=document.getElementById("open-modal-thanks"),f=document.getElementsByClassName("close")[1];b.onclick=function(){o.style.display="none",s.style.display="block"};f.onclick=function(){s.style.display="none"};var c=document.getElementById("modal-review"),k=document.getElementById("open-modal-review"),g=document.getElementsByClassName("close")[2];k.onclick=function(){c.style.display="block"};g.onclick=function(){c.style.display="none"};var r=document.getElementById("modal-feedback"),v=document.getElementById("open-modal-feedback"),E=document.getElementsByClassName("close")[3];v.onclick=function(){c.style.display="none",r.style.display="block"};E.onclick=function(){r.style.display="none"};var a=document.getElementById("modal-subscribe"),B=document.getElementById("open-modal-subscribe"),I=document.getElementsByClassName("close")[4];B.onclick=function(){a.style.display="block"};I.onclick=function(){a.style.display="none"};var d=document.getElementById("modal-mobile"),h=document.getElementById("open-modal-mobile"),w=document.getElementById("close-modal-mobile");h.onclick=function(){d.style.display="block"};w.onclick=function(){d.style.display="none"};new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});