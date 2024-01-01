import{S as f,i as y}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const h="/goit-js-hw-11/assets/bi_x-octagon-4d6c239e.svg";document.querySelector(".search-button");const m=document.querySelector(".search-form"),d=document.querySelector(".search-input"),u=document.querySelector(".loader-div");let g=new f(".gallery a",{overlayOpacity:.1,captionsData:"alt"});const s={link:"https://pixabay.com/api/",key:"41582613-5fd86df2fe5af6dc3c1a0bcd8",type:"photo",orientation:"horizontal",safesearch:"true"},v=()=>{const o=d.value.trim().split(" ").join("+");return`${s.link}?key=${s.key}&q=${o}&image_type=${s.type}&orientation=${s.orientation}&safesearch=${s.safesearch}`},l=()=>{u.style.display="none"},L=()=>{u.style.display="flex"};m.addEventListener("submit",o=>{o.preventDefault(),p(),L(),fetch(v()).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.total===0){c("Sorry, there are no images matching your search query. Please try again!"),l();return}w(t.hits)}).catch(t=>{c("Error! No connection with server!"),l()}),b()});const c=o=>{y.error({message:o,position:"topRight",backgroundColor:"red",messageColor:"white",iconUrl:`${h}`,iconColor:"white"})},p=()=>{const o=document.querySelector(".gallery-list");o.innerHTML=""},b=()=>{d.value=""},w=o=>{const t=document.querySelector(".gallery-list");p();let a="";a=o.reduce((n,e)=>n+`<li class="card">
            <a href="${e.largeImageURL}">
          <img
            src="${e.webformatURL}"
            alt="${e.tags}"
            class="image"
          />
          </a>
          <div class="description">
            <div class="desc-part">
              <span class="bold">Likes</span><span>${e.likes}</span>
            </div>
            <div class="desc-part">
              <span class="bold">Views</span><span>${e.views}</span>
            </div>
            <div class="desc-part">
              <span class="bold">Comments</span><span>${e.comments}</span>
            </div>
            <div class="desc-part">
              <span class="bold">Downloads</span><span>${e.downloads}</span>
            </div>
          </div>
        </li>
        `,""),t.innerHTML=a,l(),g.refresh()};
//# sourceMappingURL=commonHelpers.js.map
