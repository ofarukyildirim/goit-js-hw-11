import{S as c,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="54877624-db5c35cc993578690bbd7a10b",p=document.querySelector("button"),l=document.querySelector("input"),a=document.querySelector(".loader"),f=document.querySelector(".gallery");let m=new c(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("click",n=>{n.preventDefault(),console.log("click çalıştı"),a.hidden=!1,f.innerHTML="";const r=l.value.trim();h(r).then(o=>{if(o.totalHits===0)throw new Error("No images found");const i=o.hits.map(e=>`
                    <li class="card">
                    <a href="${e.largeImageURL}">
                      <div class="image-wrapper">
                        <img src="${e.webformatURL}" alt="${e.tags}" width="360" heigth="200" />
                      </div>
                    </a>
                        <ul class="info">
                            <li><span>Likes</span> <br> ${e.likes}</li>
                            <li><span>Views</span> <br> ${e.views}</li>
                            <li><span>Comments</span> <br> ${e.comments}</li>
                            <li><span>Downloads</span> <br> ${e.downloads}</li>
                        </ul>
                    </li>
                    `).join("");document.querySelector(".gallery").innerHTML=i,m.refresh()}).catch(o=>{u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{a.hidden=!0}),l.value=""});function h(n){const r=`https://pixabay.com/api/?key=${d}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>o.json())}
//# sourceMappingURL=index.js.map
