import S from"./Icon.C6dQIkUo.js";import{u as v,r as T,o as x,c as I,a as n,b as i,d as e,n as E,e as u,t as _,F as g,f as b,g as m,h as z,i as l}from"./entry.BRa3eD17.js";import{S as r}from"./site-info.r5UIDq4K.js";import"./index.CzCfPO9Z.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";const w=[{id:"spotify",image:"spotify.png",name:"Spotify"},{id:"apple",image:"apple-music.png",name:"Apple Music"},{id:"soundcloud",image:"soundcloud.png",name:"SoundCloud"},{id:"youtube",image:"youtube.png",name:"YouTube"},{id:"deezer",image:"deezer.png",name:"Deezer"},{id:"beatport",image:"beatport.png",name:"Beatport"},{id:"itunes",image:"itunes.png",name:"iTunes"},{id:"yandex",image:"yandex.png",name:"Yandex Music"},{id:"anghami",image:"anghami.png",name:"Anghami"},{id:"bandcamp",image:"bandcamp.png",name:"Bandcamp"},{id:"amazon-music",image:"amazon.png",name:"Amazon"},{id:"tidal",image:"tidal.png",name:"Tidal"},{id:"vk",image:"vk.png",name:"VKontakte"},{id:"napster",image:"napster.png",name:"Napster"},{id:"tiktok",image:"tiktok.png",name:"TikTok"}],B={key:0,class:"container"},$={class:"d-flex justify-content-center align-items-center py-3"},C={class:"col-lg-4"},A={class:"card overflow-hidden border-0 bg-dark"},N={class:"position-relative"},j=["src"],q={class:"p-3 text-center"},F={class:"mb-0"},L={key:0,class:"d-flex justify-content-center align-items-center border-top"},V={class:"col-6 py-3 ps-4 text-center"},M=["src"],D={class:"col-6 py-3 text-center"},Y=["href","title"],K=e("span",{class:"btn btn-outline-light"},"Buy",-1),R=[K],G=["href","title"],H=e("span",{class:"btn btn-outline-light"},"Buy",-1),J=[H],O={key:2,class:"mx-1"},P=["href","title"],Q=e("span",{class:"btn btn-outline-light"},"Stream",-1),U=[Q],W={class:"mb-2 position-fixed start-0 bottom-0 d-lg-flex d-none ps-3"},X=["href"],Z=e("h6",{class:"mb-4 pb-3 position-fixed end-0 bottom-0 d-lg-flex d-none pe-3"},"Follow Bayza",-1),ee={class:"position-fixed end-0 bottom-0 d-lg-flex d-none"},te={class:"mb-2"},ne={class:"mb-0"},oe=["href"],se={class:"end-0 bottom-0 d-lg-none d-block"},ae={class:"my-4 p-0 text-center ps-3"},ie={class:"mb-0"},le=["href"],ce={class:"my-4 start-0 d-lg-none d-block text-center"},de=["href"],he={__name:"index",setup(re){const{params:f}=v(),{slug:h}=f,s=T(),{$bootstrap:y,$Tooltip:p}=z(),k=()=>{const o=window.location.href;navigator.clipboard.writeText(o);const c=document.querySelector(".copy-to-clipboard");c.style.opacity="100%",c.removeAttribute("data-bs-original-title"),p.getInstance(c).dispose();const a=document.querySelector(".copied");a.classList.remove("d-none"),p.getInstance(a)||new p(a,{trigger:"manual"}).show()};return x(async()=>{const o=await $fetch("https://bayzamusic.com/data/fanlinks.json").catch(()=>null);if(!o[h])throw I({statusCode:404,message:`Fanlink not found: '${h}'`,fatal:!0});s.value=o[h],addEventListener("mouseup",c=>{const a=document.querySelector(".copy-to-clipboard"),t=document.querySelector(".copied"),d=p.getInstance(t);d&&(t.contains(c.target)||(a.style.opacity="70%",t.classList.add("d-none"),d.dispose()),a.setAttribute("data-bs-original-title","Copy to clipboard"),y.initializeTooltip())})}),(o,c)=>{const a=S;return n(s)?(l(),i("main",B,[e("div",{class:"bg-fanlink h-100 position-fixed start-0 end-0",style:E({"background-image":"url("+n(s).image_secure+")"})},null,4),e("div",$,[e("div",C,[e("div",A,[e("div",N,[e("img",{class:"img-fluid w-100",src:n(s).image_secure},null,8,j),e("div",{class:"p-0 position-absolute copy-to-clipboard d-flex justify-content-center align-items-center","data-bs-toggle":"tooltip","data-bs-placement":"left",title:"Copy to clipboard",onClick:c[0]||(c[0]=t=>k())},[e("span",null,[u(a,{class:"copied d-none position-absolute top-50 start-50 translate-middle",name:"fa6-solid:check",style:{"font-size":"26px",color:"#1cc88a"},"data-bs-toggle":"tooltip-copied","data-bs-placement":"bottom",title:"Copied!"}),u(a,{name:"fa6-solid:copy"})])])]),e("div",q,[e("h5",null,_(n(s).title),1),e("h6",F,_(n(s).artists),1)]),(l(!0),i(g,null,b("platforms"in o?o.platforms:n(w),(t,d)=>(l(),i(g,{key:d},[n(s)[t.id]?(l(),i("div",L,[e("div",V,[e("img",{src:`/images/${t.image}`,width:"90%"},null,8,M)]),e("div",D,[n(s)[t.id+"-buy"]?(l(),i("a",{key:0,class:"text-white",href:n(s)[t.id+"-buy"],target:"_blank",title:`Buy on ${t.name}`},R,8,Y)):m("",!0),t.id==="amazon-music"&&n(s).amazon?(l(),i("a",{key:1,class:"text-white",href:n(s).amazon,target:"_blank",title:`Buy on ${t.name}`},J,8,G)):m("",!0),(n(s)[t.id+"-buy"]||t.id==="amazon-music")&&n(s)[t.id]?(l(),i("span",O)):m("",!0),e("a",{class:"text-white",href:n(s)[t.id],target:"_blank",title:`Stream on ${t.name}`},U,8,P)])])):m("",!0)],64))),128))])])]),e("h5",W,[e("a",{target:"_blank",href:("SITE"in o?o.SITE:n(r)).main_url},_(("SITE"in o?o.SITE:n(r)).domain),9,X)]),Z,e("div",ee,[e("ul",te,[(l(!0),i(g,null,b(("SITE"in o?o.SITE:n(r)).external_links,(t,d)=>(l(),i("li",{key:d,class:"d-inline-block pe-3"},[e("h5",ne,[e("a",{target:"_blank",href:t.url},[u(a,{name:t.icon},null,8,["name"])],8,oe)])]))),128))])]),e("div",se,[e("ul",ae,[(l(!0),i(g,null,b(("SITE"in o?o.SITE:n(r)).external_links,(t,d)=>(l(),i("li",{key:d,class:"d-inline-block pe-3"},[e("h3",ie,[e("a",{target:"_blank",href:t.url},[u(a,{name:t.icon},null,8,["name"])],8,le)])]))),128))]),e("h4",ce,[e("a",{target:"_blank",href:("SITE"in o?o.SITE:n(r)).main_url},_(("SITE"in o?o.SITE:n(r)).domain),9,de)])])])):m("",!0)}}};export{he as default};
