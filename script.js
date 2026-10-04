/* =====================================================================
   1. CONFIG: change store details, ALL images, categories, banners here
   ===================================================================== */
// Placeholder photo helper. REPLACE: swap IMG('seed') with your own URL or "images/file.jpg"
const IMG=(s,w=600,h=750)=>`https://picsum.photos/seed/${s}/${w}/${h}`;

const CONFIG={
  store:{
    name:"CC STORE",
    logo:"",                       // IMAGE: logo path e.g. "images/logo.png" (empty = text logo)
    whatsapp:"923706632990",       // country code + number, digits only
    email:"hello@ccstore.com",
    currency:"PKR",
    deliveryCharges:250,
    freeDeliveryAbove:5000,
    bank:""                        // e.g. "Bank: HBL | Title: CC Store | IBAN: PK00..." (empty = hidden)
  },
  social:{instagram:"https://instagram.com/",tiktok:"https://www.tiktok.com/",facebook:"https://facebook.com/"},
  announcements:["FREE DELIVERY ON ORDERS ABOVE RS. 5000","NEW COLLECTION JUST DROPPED","PREMIUM QUALITY AT BEST PRICES","SHOP NOW AND UPGRADE YOUR STYLE"],
  images:{
    hero:"hero.png",     // IMAGE: hero banner
    about:"https://i.pinimg.com/736x/a4/8e/4a/a48e4ab6c19c1b09d7fb01232f0f7b43.jpg",    // IMAGE: about section
    fallback:'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#999" font-family="Arial" font-size="22" text-anchor="middle">Image unavailable</text></svg>')
  },
  // IMAGE: one image per category card
  categories:[
    {id:"shirts",title:"Shirts",image:"https://i.pinimg.com/1200x/99/51/0e/99510e61d8074e38b5d19ef85d1407b6.jpg"},
    {id:"hoodies",title:"Hoodies",image:"https://i.pinimg.com/736x/19/00/ee/1900ee59e7d74bb9db2f138b5b424476.jpg"},
    {id:"tshirts",title:"T-Shirts",image:"https://i.pinimg.com/1200x/d7/fa/53/d7fa5325ee518a40d7798d432b7ab1a8.jpg"},
    {id:"caps",title:"Caps",image:"https://i.pinimg.com/736x/12/b6/43/12b6430e8dd2ab137614bf7a47caf290.jpg"},
    {id:"watches",title:"Watches",image:"https://i.pinimg.com/736x/ad/6e/9c/ad6e9cfafcdf2afec6e2f751cac4d1b3.jpg"},
    {id:"shoes",title:"Shoes",image:"https://i.pinimg.com/736x/40/cc/69/40cc690100975ac7e9af09725f6e548d.jpg"},
    {id:"perfumes",title:"Perfumes",image:"https://i.pinimg.com/736x/d7/93/87/d79387bfc2e42110f54f7594f7fb15bc.jpg"},
    {id:"sneakers",title:"Sneakers",image:"https://i.pinimg.com/1200x/f4/13/70/f41370be3ba9f38f1647622c151b57d0.jpg"},
    {id:"jackets",title:"Jackets",image:"https://i.pinimg.com/1200x/7c/6e/27/7c6e270e544d56dd82d2c0ddc0101b76.jpg"},
    {id:"trousers",title:"Trousers",image:"https://i.pinimg.com/1200x/90/42/50/904250a126ed191483d82d3c19a9da49.jpg"},
    {id:"wallets",title:"Wallets",image:"https://i.pinimg.com/1200x/30/de/a7/30dea716dd31256cd9bd5284dff9ed68.jpg"},
    {id:"accessories",title:"Accessories",image:"https://i.pinimg.com/736x/a4/b8/9a/a4b89a6db84bd8792f5b8838c2589844.jpg"}
  ],
  groups:{clothing:["shirts","hoodies","tshirts","jackets","trousers"],footwear:["shoes","sneakers"],accessories:["caps","watches","wallets","perfumes","accessories"]},
  // IMAGE: one image per promotional banner. "f" = filter applied by the button
  banners:[
    {title:"NEW SEASON. NEW STYLE.",text:"Explore our latest fashion collection.",btn:"Explore collection",f:{sort:"new"},image:"ONE.png"},
    {title:"STEP INTO STYLE.",text:"Discover premium footwear.",btn:"Shop shoes",f:{group:"footwear"},image:"shoes.png"},
    {title:"TIMELESS ELEGANCE.",text:"Upgrade your everyday look with premium watches.",btn:"Explore watches",f:{cat:"watches"},image:"watch.pnh.png"},
    {title:"YOUR SIGNATURE FRAGRANCE.",text:"Discover fragrances that define your personality.",btn:"Shop perfumes",f:{cat:"perfumes"},image:"https://i.pinimg.com/1200x/c4/bd/34/c4bd34421777791276134e715b54155c.jpg"}
  ],
  policies:{
    "Shipping Policy":"Orders are confirmed on WhatsApp and dispatched within 1-3 working days. Delivery takes 3-5 working days. Free delivery above the free-delivery threshold.",
    "Return Policy":"Unused items with tags can be returned or exchanged within 7 days of delivery. Contact us on WhatsApp with your order ID.",
    "Privacy Policy":"We only use the details you enter at checkout to process your order. Cart and wishlist are stored in your own browser.",
    "Terms & Conditions":"Prices and availability may change without notice. An order is confirmed once our team replies to your WhatsApp message."
  }
};

/* =====================================================================
   2. PRODUCTS: edit everything here (name, images, price, sizes, colors...)
   Row: [name, category, gender(m/w/u), price, oldPrice, rating, badge, colors, tags, soldCount, inStock, IMAGE, HOVER_IMAGE]
   IMAGE (index 11)  = main product image of THAT product (URL or "images/file.jpg")
   HOVER_IMAGE (12)  = image shown on hover ("" = no hover image)
   Currently every product has a different placeholder image. Replace each
   IMG('cc-pN') with your own link or file path.
   ===================================================================== */
const SZ={shirts:["S","M","L","XL"],hoodies:["S","M","L","XL"],tshirts:["S","M","L","XL"],jackets:["S","M","L","XL"],trousers:["30","32","34","36"],shoes:["40","41","42","43","44"],sneakers:["40","41","42","43","44"]};
const ROWS=[
["Premium Oversized Shirt","shirts","m",3500,4500,4.8,"BEST SELLER",["Black","White"],"featured best",320,1,
  "https://i.pinimg.com/736x/6e/fb/65/6efb6514bc1ca9d57f95e6d500984615.jpg","bravo.jfif"],
["Linen Resort Shirt","shirts","w",3200,3900,4.5,"",["White","Blue"],"new",90,1,
  "https://i.pinimg.com/736x/bf/41/88/bf41889c79734918e01c9dc7dee8f396.jpg","line.jfif"],
["Heavyweight Hoodie","hoodies","m",5200,6500,4.9,"BEST SELLER",["Black","Grey"],"featured best trending",410,1,
  "https://i.pinimg.com/736x/e4/d3/b6/e4d3b652ce8cf1c62aadccc19c5fba14.jpg","weight.jfif"],
["Zip Fleece Hoodie","hoodies","w",4800,5900,4.6,"NEW",["Beige","Black"],"new trending",120,1,
  "https://i.pinimg.com/1200x/59/af/79/59af792f069290989d599d27998a4180.jpg","zip.jfif"],
["Essential Cotton Tee","tshirts","u",1800,2400,4.4,"SALE",["Black","White","Olive"],"best",500,1,
 "https://i.pinimg.com/1200x/97/7c/82/977c82c7dfa7645a64e6d6171cf5c4e9.jpg","tee.jfif"],
["Graphic Street Tee","tshirts","w",2100,2800,4.3,"NEW",["White","Black"],"new",80,1,
  "https://i.pinimg.com/1200x/13/ae/af/13aeaf211961e9aba48f8979c211f894.jpg","street.jfif"],
["Classic Dad Cap","caps","u",1200,1600,4.5,"",["Black","Navy"],"trending",210,1,
  "https://i.pinimg.com/1200x/e8/f4/e1/e8f4e1ff9674de86cec1f2ffc247b129.jpg","cap1.jfif"],
["Structured Snapback","caps","m",1400,1800,4.2,"SALE",["Black","White"],"",60,1,
  "https://i.pinimg.com/736x/3c/c8/0f/3cc80f7d5101ba415021ba33d29e705e.jpg","cap2.jfif"],
["Chronos Steel Watch","watches","m",8900,11500,4.9,"BEST SELLER",["Silver","Black"],"featured best trending",260,1,
  "https://i.pinimg.com/1200x/6a/7c/09/6a7c09d4aee021a5443d2d7d799ff92e.jpg","watch1.jfif"],
["Minimal Leather Watch","watches","w",6500,8200,4.7,"NEW",["Brown","Black"],"featured new",140,1,
  "https://i.pinimg.com/736x/38/8c/c3/388cc3cafbf1beecb509e7bebcc98cd4.jpg","watch2.jfif"],
["Leather Derby Shoes","shoes","m",7800,9500,4.6,"",["Black","Brown"],"featured",100,1,
  "https://i.pinimg.com/1200x/02/01/e2/0201e22fb3d43903e54ace6b32503e9a.jpg","https://i.pinimg.com/1200x/e6/9a/c7/e69ac7f07aee444a50a223d274b5165c.jpg"],
["Suede Loafers","shoes","w",6900,8400,4.4,"SALE",["Tan","Black"],"",70,1,
 "https://i.pinimg.com/736x/c6/13/4a/c6134a63f98f484de48f36ecae098a68.jpg","https://i.pinimg.com/1200x/05/98/85/0598858f0497fb30dbaafd5a445f185e.jpg"],
["Court Low Sneakers","sneakers","u",7200,8900,4.8,"BEST SELLER",["White","Black"],"best trending",380,1,
  "https://i.pinimg.com/1200x/fe/3d/5e/fe3d5e90cde1ef98463cfc45f459cffe.jpg","shoe1.jfif"],
["Runner Pro Sneakers","sneakers","m",8400,10200,4.7,"NEW",["Grey","Black"],"featured new",150,1,
  "https://i.pinimg.com/736x/2e/f7/d5/2ef7d5ae7325d546cd6af6e47553b5b6.jpg","flam.jfif"],
["Bomber Jacket","jackets","m",9800,12500,4.8,"",["Black","Olive"],"featured trending",130,1,
  "https://i.pinimg.com/736x/7a/91/b5/7a91b5d4b46812f7ab97a7adb05f0cea.jpg","jack.jfif"],
["Denim Trucker Jacket","jackets","w",8600,10400,4.5,"SALE",["Blue","Black"],"featured new",75,1,
  "https://i.pinimg.com/1200x/17/3d/f7/173df719ea43374ffdf7aa4cdfd0da6e.jpg","https://i.pinimg.com/1200x/00/a0/64/00a0643399225bcc4d4b175e554c67dc.jpg"],
["Tailored Chinos","trousers","m",4200,5200,4.5,"",["Beige","Navy"],"",160,1,
  "https://i.pinimg.com/736x/24/66/e3/2466e37a7984359a78dc5f9b9cf6425a.jpg","vintage.jfif"],
["Cargo Trousers","trousers","u",4600,5600,4.4,"NEW",["Olive","Black"],"new",95,1,
  "https://i.pinimg.com/736x/9f/01/11/9f01117c6bbab739c27399b15d37e239.jpg","cargo.jfif"],
["Leather Bifold Wallet","wallets","m",2400,3200,4.6,"BEST SELLER",["Black","Brown"],"best",230,1,
  "https://i.pinimg.com/1200x/29/bb/96/29bb964bc4882beeec56f117946ff8c3.jpg","open.jfif"],
["Card Holder","wallets","u",1500,1900,4.3,"",["Black","Tan"],"",50,0,
  "https://i.pinimg.com/736x/83/37/b0/8337b0b3a92e09e6b7e50033c4348060.jpg","https://i.pinimg.com/1200x/9d/dd/25/9ddd25e985d2209644cd50e76d979dfc.jpg"],
["Oud Noir 100ml","perfumes","u",6500,8000,4.9,"BEST SELLER",[],"featured best trending",300,1,
  "https://i.pinimg.com/1200x/fc/92/c9/fc92c9c603e23e3be09226831a919b4c.jpg","https://i.pinimg.com/1200x/fc/92/c9/fc92c9c603e23e3be09226831a919b4c.jpg"],
["Amber Citrus 100ml","perfumes","w",5800,7200,4.6,"NEW",[],"new",110,1,
  "https://i.pinimg.com/736x/19/2a/79/192a793aef4e2c87734d013a2cf88623.jpg","https://i.pinimg.com/736x/19/2a/79/192a793aef4e2c87734d013a2cf88623.jpg"],
["Leather Belt","accessories","m",2200,2900,4.4,"",["Black","Brown"],"",85,1,
  "https://i.pinimg.com/1200x/49/54/0c/49540c50cdba5f2e0b34c92650f10770.jpg","https://i.pinimg.com/1200x/16/78/58/167858d03067738f106375441f846a87.jpg"],
["Aviator Sunglasses","accessories","u",3100,4000,4.5,"SALE",["Gold","Black"],"trending",120,1,
  "https://i.pinimg.com/736x/62/5e/8b/625e8b7da7bf23cbb4c6197596319e0b.jpg","https://i.pinimg.com/1200x/a1/2e/b9/a12eb95fa55a82f479c07e7602263fc7.jpg"]
];
const products=ROWS.map((r,i)=>({
  id:i+1,name:r[0],category:r[1],gender:r[2],price:r[3],oldPrice:r[4],rating:r[5],badge:r[6],colors:r[7],
  tags:r[8].split(" "),sold:r[9],inStock:!!r[10],sizes:SZ[r[1]]||[],
  image:r[11]||IMG('cc-p'+(i+1)),            // each product's own main image
  hoverImage:r[12]!==undefined?r[12]:"",     // each product's own hover image ("" = disabled)
  description:r[0]+" crafted from premium materials for everyday comfort, fit and lasting quality."
}));

/* =====================================================================
   3. HELPERS & STATE
   ===================================================================== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const S=CONFIG.store,MAXQ=10;
const fmt=n=>S.currency+" "+Number(n).toLocaleString("en-US");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const load=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}};
const store=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const byId=id=>products.find(p=>p.id===Number(id));
const catTitle=id=>(CONFIG.categories.find(c=>c.id===id)||{title:id}).title;
const pct=p=>p.oldPrice>p.price?Math.round((1-p.price/p.oldPrice)*100):0;
function fb(img){img.onerror=null;img.src=CONFIG.images.fallback}

let cart=load("cc_cart",[]).filter(i=>byId(i.id)&&Number.isInteger(i.qty)&&i.qty>0).map(i=>({id:i.id,size:i.size||"",color:i.color||"",qty:Math.min(i.qty,MAXQ)}));
let wish=load("cc_wish",[]).filter(id=>byId(id));
const keyOf=i=>i.id+"|"+i.size+"|"+i.color;

const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const G=!!window.gsap&&!RM;
if(window.gsap&&window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
function reveal(){
  if(!G||!window.ScrollTrigger)return;
  $$(".rv:not(.seen)").forEach(el=>{el.classList.add("seen");
    gsap.from(el,{y:28,opacity:0,duration:.7,ease:"power2.out",clearProps:"all",scrollTrigger:{trigger:el,start:"top 95%",once:true}})});
  ScrollTrigger.refresh();
}
let tt;
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),2400)}

/* panels */
function closeAll(){$$(".show").forEach(e=>{if(e.id!=="top")e.classList.remove("show")});document.body.style.overflow=""}
function openPanel(id){closeAll();$("#"+id).classList.add("show");if(id!=="menu"||true)$("#scrim").classList.add("show");document.body.style.overflow="hidden"}

/* =====================================================================
   4. RENDERING
   ===================================================================== */
const stars=r=>{const f=Math.floor(r),h=r-f>=.5;let s="";for(let i=0;i<5;i++)s+=`<i class="${i<f?"fa-solid fa-star":i===f&&h?"fa-solid fa-star-half-stroke":"fa-regular fa-star"}"></i>`;return `<div class="stars">${s}<span>${r.toFixed(1)}</span></div>`};
const priceHTML=p=>`<b>${fmt(p.price)}</b>${pct(p)?`<s>${fmt(p.oldPrice)}</s><em>-${pct(p)}%</em>`:""}`;
const heart=id=>wish.includes(id);

function card(p){
  const badge=!p.inStock?`<span class="bd">SOLD OUT</span>`:p.badge?`<span class="bd ${p.badge==="SALE"?"sale":""}">${esc(p.badge)}</span>`:"";
  return `<article class="card rv"><div class="ph">
    <img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" onerror="fb(this)">
    ${p.hoverImage?`<img class="alt" src="${esc(p.hoverImage)}" alt="" loading="lazy" onerror="this.remove()">`:""}
    ${badge}
    <button class="wb ${heart(p.id)?"on":""}" data-act="wish" data-id="${p.id}" aria-label="Toggle wishlist"><i class="${heart(p.id)?"fa-solid":"fa-regular"} fa-heart"></i></button>
    <button class="qvb" data-act="qv" data-id="${p.id}">Quick view</button></div>
    <div class="ci"><small>${esc(catTitle(p.category))}</small><h3>${esc(p.name)}</h3>${stars(p.rating)}
    <div class="pr">${priceHTML(p)}</div>
    <button class="add" data-act="add" data-id="${p.id}" ${p.inStock?"":"disabled"}>${p.inStock?"Add to cart":"Sold out"}</button></div></article>`;
}
const fAttr=f=>`data-f='${JSON.stringify(f)}'`;

/* filters */
const DEF=()=>({cat:"all",gender:"all",group:null,max:0,size:"all",color:"all",rate:0,avail:"all",sort:"default"});
let F=DEF();
function filtered(){
  let l=products.filter(p=>
    (F.cat==="all"||p.category===F.cat)&&
    (F.gender==="all"||p.gender===F.gender||p.gender==="u")&&
    (!F.group||CONFIG.groups[F.group].includes(p.category))&&
    (!F.max||p.price<=F.max)&&(F.size==="all"||p.sizes.includes(F.size))&&
    (F.color==="all"||p.colors.includes(F.color))&&(!F.rate||p.rating>=F.rate)&&
    (F.avail==="all"||p.inStock));
  const s={low:(a,b)=>a.price-b.price,high:(a,b)=>b.price-a.price,new:(a,b)=>b.id-a.id,best:(a,b)=>b.sold-a.sold,rated:(a,b)=>b.rating-a.rating}[F.sort];
  return s?l.sort(s):l;
}
function renderShop(){
  const l=filtered();
  $("#shopGrid").innerHTML=l.map(card).join("");
  $("#shopEmpty").hidden=l.length>0;
  $("#shopCount").textContent=l.length+" product"+(l.length===1?"":"s")+(F.gender!=="all"?" for "+(F.gender==="m"?"men":"women"):"")+(F.group?" in "+F.group:"");
  reveal();
}
function opts(id,arr){$(id).innerHTML=arr.map(o=>`<option value="${esc(o[0])}">${esc(o[1])}</option>`).join("")}
function initFilters(){
  opts("#fCat",[["all","All categories"],...CONFIG.categories.map(c=>[c.id,c.title])]);
  opts("#fMax",[[0,"Any price"],...[2000,5000,8000,12000].map(n=>[n,"Up to "+fmt(n)])]);
  opts("#fSize",[["all","All sizes"],...[...new Set(products.flatMap(p=>p.sizes))].map(s=>[s,"Size "+s])]);
  opts("#fColor",[["all","All colors"],...[...new Set(products.flatMap(p=>p.colors))].map(c=>[c,c])]);
  opts("#fRate",[[0,"Any rating"],[4,"4 stars & up"],[4.5,"4.5 stars & up"]]);
  opts("#fAvail",[["all","All availability"],["in","In stock only"]]);
  opts("#fSort",[["default","Sort: Featured"],["low","Price: Low to High"],["high","Price: High to Low"],["new","Newest"],["best","Best Selling"],["rated","Highest Rated"]]);
  syncFilters();
}
function syncFilters(){$("#fCat").value=F.cat;$("#fMax").value=F.max;$("#fSize").value=F.size;$("#fColor").value=F.color;$("#fRate").value=F.rate;$("#fAvail").value=F.avail;$("#fSort").value=F.sort}
function readFilters(){F.cat=$("#fCat").value;F.max=+$("#fMax").value;F.size=$("#fSize").value;F.color=$("#fColor").value;F.rate=+$("#fRate").value;F.avail=$("#fAvail").value;F.sort=$("#fSort").value;if(F.cat!=="all")F.group=null;renderShop()}
function applyFilter(f){F=Object.assign(DEF(),f);syncFilters();renderShop();$("#shop").scrollIntoView({behavior:RM?"auto":"smooth"})}

/* static sections */
const NAV=[{t:"Home",h:"#home"},{t:"Shop",f:{}},{t:"Men",f:{gender:"m"}},{t:"Women",f:{gender:"w"}},{t:"Clothing",f:{group:"clothing"}},{t:"Accessories",f:{group:"accessories"}},{t:"Collections",h:"#categories"},{t:"Contact",h:"#contact"}];
const navHTML=()=>NAV.map(n=>`<a href="${n.h||"#shop"}" ${n.f?fAttr(n.f):""}>${n.t}</a>`).join("");
function brandHTML(){return S.logo?`<img src="${esc(S.logo)}" alt="${esc(S.name)}" onerror="fb(this)">`:esc(S.name)}
function banner(i){const b=CONFIG.banners[i];return `<section class="ban ${i%2?"r":""} rv" aria-label="${esc(b.title)}"><img src="${esc(b.image)}" alt="${esc(b.title)}" loading="lazy" onerror="fb(this)"><div class="in"><h2>${esc(b.title)}</h2><p>${esc(b.text)}</p><button class="btn light" ${fAttr(b.f)}>${esc(b.btn)}</button></div></section>`}

const SECS=[
["Featured Products",p=>p.tags.includes("featured"),{sort:"rated"},8],
["Best Sellers",p=>p.tags.includes("best"),{sort:"best"},8],
["New Arrivals",p=>p.tags.includes("new"),{sort:"new"},8],
["Trending Products",p=>p.tags.includes("trending"),{},8],
["Shirts",p=>p.category==="shirts",{cat:"shirts"}],
["Hoodies",p=>p.category==="hoodies",{cat:"hoodies"}],
["T-Shirts",p=>p.category==="tshirts",{cat:"tshirts"}],
["Caps",p=>p.category==="caps",{cat:"caps"}],
["Watches",p=>p.category==="watches",{cat:"watches"}],
["Shoes & Sneakers",p=>CONFIG.groups.footwear.includes(p.category),{group:"footwear"}],
["Perfumes",p=>p.category==="perfumes",{cat:"perfumes"}],
["Accessories",p=>["wallets","accessories"].includes(p.category),{group:"accessories"}]
];
function renderSections(){
  $("#secs").innerHTML=SECS.map(([t,fn,f,lim])=>{const l=products.filter(fn).slice(0,lim||99);return l.length?`<section class="sec"><div class="wrap"><div class="sh rv"><h2>${t}</h2><button class="lnk" ${fAttr(f)}>View all</button></div><div class="grid">${l.map(card).join("")}</div></div></section>`:""}).join("");
}

/* =====================================================================
   5. CART, WISHLIST
   ===================================================================== */
function totals(){const sub=cart.reduce((a,i)=>a+byId(i.id).price*i.qty,0);const del=!sub?0:sub>=S.freeDeliveryAbove?0:S.deliveryCharges;return{sub,del,total:sub+del}}
function persist(){store("cc_cart",cart);store("cc_wish",wish)}
function addToCart(id,size,color,qty){
  const p=byId(id);
  if(!p||!p.inStock){toast("This product is unavailable");return false}
  if(p.sizes.length&&!p.sizes.includes(size)){toast("Please select a size");return false}
  if(p.colors.length&&!p.colors.includes(color)){toast("Please select a color");return false}
  qty=Math.max(1,Math.min(MAXQ,parseInt(qty,10)||1));
  const it={id:p.id,size:size||"",color:color||"",qty},ex=cart.find(i=>keyOf(i)===keyOf(it));
  if(ex)ex.qty=Math.min(MAXQ,ex.qty+qty);else cart.push(it);
  persist();renderCart();
  const c=$("#cc");c.classList.remove("bump");void c.offsetWidth;c.classList.add("bump");
  toast(p.name+" added to cart");return true;
}
function renderCart(){
  const n=cart.reduce((a,i)=>a+i.qty,0);
  $("#cc").textContent=n;$("#cc").hidden=!n;$("#wc").textContent=wish.length;$("#wc").hidden=!wish.length;
  const b=$("#cartBody"),f=$("#cartFoot");
  if(!cart.length){b.innerHTML=`<div class="empty"><i class="fa-solid fa-bag-shopping"></i><p>Your cart is empty.</p></div>`;f.innerHTML=`<button class="btn" style="width:100%" data-act="close">Continue shopping</button>`;return}
  b.innerHTML=cart.map(i=>{const p=byId(i.id),k=esc(keyOf(i));return `<div class="line"><img src="${esc(p.image)}" alt="${esc(p.name)}" onerror="fb(this)"><div><h4>${esc(p.name)}</h4><small>${i.size?"Size: "+esc(i.size):""}${i.size&&i.color?" / ":""}${i.color?"Color: "+esc(i.color):""}</small><small>${fmt(p.price)}</small><div class="qty"><button data-act="dec" data-k="${k}" aria-label="Decrease">&minus;</button><span>${i.qty}</span><button data-act="inc" data-k="${k}" aria-label="Increase">+</button></div></div><div class="rt"><b>${fmt(p.price*i.qty)}</b><button class="rm" data-act="rm" data-k="${k}">Remove</button></div></div>`}).join("");
  const t=totals(),left=S.freeDeliveryAbove-t.sub;
  f.innerHTML=`${left>0?`<p class="hint">Add ${fmt(left)} more for free delivery.</p>`:`<p class="hint">You've unlocked free delivery.</p>`}<div class="tt"><span>Subtotal</span><span>${fmt(t.sub)}</span></div><div class="tt"><span>Delivery</span><span>${t.del?fmt(t.del):"Free"}</span></div><div class="tt big"><span>Total</span><span>${fmt(t.total)}</span></div><button class="btn" style="width:100%;margin-bottom:8px" data-act="checkout">Checkout</button><button class="btn ghost" style="width:100%" data-act="close">Continue shopping</button>`;
}
function renderWish(){
  const b=$("#wishBody");
  if(!wish.length){b.innerHTML=`<div class="empty"><i class="fa-regular fa-heart"></i><p>Your wishlist is empty.</p></div>`;return}
  b.innerHTML=wish.map(id=>{const p=byId(id);return `<div class="line"><img src="${esc(p.image)}" alt="${esc(p.name)}" onerror="fb(this)"><div><h4>${esc(p.name)}</h4><small>${fmt(p.price)}</small><button class="btn sm" style="margin-top:8px" data-act="add" data-id="${p.id}" ${p.inStock?"":"disabled"}>Move to cart</button></div><div class="rt"><button class="rm" data-act="wish" data-id="${p.id}">Remove</button></div></div>`}).join("");
}
function toggleWish(id){
  id=Number(id);const on=!wish.includes(id);
  wish=on?[...wish,id]:wish.filter(x=>x!==id);persist();
  $$(`[data-act="wish"][data-id="${id}"]`).forEach(b=>{b.classList.toggle("on",on);const i=$("i",b);if(i){i.classList.toggle("fa-solid",on);i.classList.toggle("fa-regular",!on)}});
  renderCart();renderWish();toast(on?"Saved to wishlist":"Removed from wishlist");
}

/* =====================================================================
   6. QUICK VIEW
   ===================================================================== */
let Q=null;
function showModal(html){$("#mbody").innerHTML=html;closeAll();$("#modal").classList.add("show");$("#scrim").classList.add("show");document.body.style.overflow="hidden"}
function openQV(id){
  const p=byId(id);if(!p)return;
  Q={id:p.id,size:"",color:p.colors[0]||"",qty:1};
  showModal(`<div class="qv"><div class="qimg"><img src="${esc(p.image)}" alt="${esc(p.name)}" onerror="fb(this)"></div><div class="qinfo"><small style="color:var(--mu)">${esc(catTitle(p.category))}</small><h3>${esc(p.name)}</h3>${stars(p.rating)}<div class="pr" style="font-size:18px">${priceHTML(p)}</div><p>${esc(p.description)}</p>
  ${p.sizes.length?`<div class="opt"><b>Size</b>${p.sizes.map(s=>`<button class="chip" data-sz="${esc(s)}">${esc(s)}</button>`).join("")}</div>`:""}
  ${p.colors.length?`<div class="opt"><b>Color</b>${p.colors.map((c,i)=>`<button class="chip ${i?"":"sel"}" data-cl="${esc(c)}">${esc(c)}</button>`).join("")}</div>`:""}
  <div class="opt"><b>Quantity</b><div class="qty" style="margin:0"><button data-q="-1" aria-label="Decrease">&minus;</button><span id="qn">1</span><button data-q="1" aria-label="Increase">+</button></div></div>
  <div class="row"><button class="btn" data-act="qadd" ${p.inStock?"":"disabled"}>${p.inStock?"Add to cart":"Sold out"}</button><button class="btn ghost wb2 ${heart(p.id)?"on":""}" data-act="wish" data-id="${p.id}" aria-label="Toggle wishlist"><i class="${heart(p.id)?"fa-solid":"fa-regular"} fa-heart"></i></button></div></div></div>`);
}

/* =====================================================================
   7. SEARCH
   ===================================================================== */
const stem=t=>t.length>3&&t.endsWith("s")?t.slice(0,-1):t;
const words=s=>s.toLowerCase().replace(/[^a-z0-9]+/g," ").trim().split(" ").filter(Boolean).map(stem);
function searchP(q){
  const t=words(q);if(!t.length)return[];
  return products.filter(p=>{const h=words([p.name,p.category,catTitle(p.category),p.colors.join(" "),p.description,p.gender==="m"?"men":p.gender==="w"?"women":"unisex"].join(" "));return t.every(x=>h.some(w=>w.startsWith(x)))});
}
function renderSearch(){
  const q=$("#sIn").value.trim(),r=$("#sres");
  $("#sugs").innerHTML=["Watch","Black Shirt","Sneakers","Perfume","Hoodie"].map(s=>`<button class="chip" data-sug="${s}">${s}</button>`).join("");
  if(!q){r.innerHTML="";return}
  const l=searchP(q);
  r.innerHTML=l.length?l.map(p=>`<button class="sr" data-act="qv" data-id="${p.id}"><img src="${esc(p.image)}" alt="" onerror="fb(this)"><span><b>${esc(p.name)}</b><small>${esc(catTitle(p.category))}</small>${fmt(p.price)}</span></button>`).join(""):`<div class="empty" style="grid-column:1/-1"><i class="fa-regular fa-face-frown"></i><p>No results for "${esc(q)}". Try another word like "watch" or "black".</p></div>`;
}

/* =====================================================================
   8. CHECKOUT -> WhatsApp order
   ===================================================================== */
function openCheckout(){
  if(!cart.length){toast("Your cart is empty");return}
  const t=totals();
  showModal(`<h3 style="margin-bottom:16px">Checkout</h3><div class="ck"><form id="coForm" novalidate>
  ${[["name","Full name *","text","name"],["phone","Phone number *","tel","tel"],["wa","WhatsApp number","tel","tel"],["email","Email (optional)","email","email"],["address","Complete address *","text","street-address"],["city","City *","text","address-level2"],["postal","Postal code","text","postal-code"]].map(f=>`<div class="fld" data-f="${f[0]}"><label for="c_${f[0]}">${f[1]}</label><input id="c_${f[0]}" type="${f[2]}" autocomplete="${f[3]}"><span class="err"></span></div>`).join("")}
  <div class="fld"><label for="c_notes">Additional order notes</label><textarea id="c_notes" rows="2"></textarea></div>
  <div class="pm"><label><input type="radio" name="pay" value="Cash on Delivery" checked> Cash on Delivery (COD)</label>${S.bank?`<label><input type="radio" name="pay" value="Bank Transfer"> Bank Transfer</label><p class="hint" id="bankInfo" hidden>${esc(S.bank)}</p>`:""}</div>
  <p class="err" id="coErr"></p><button class="btn" style="width:100%" type="submit">Place order on WhatsApp</button></form>
  <div><h4 style="margin-bottom:8px">Order summary</h4>${cart.map(i=>{const p=byId(i.id);return `<div class="sumline"><img src="${esc(p.image)}" alt="" onerror="fb(this)"><div>${esc(p.name)}<small>${i.size?"Size "+esc(i.size)+" ":""}${i.color?esc(i.color)+" ":""}x ${i.qty}</small></div><b>${fmt(p.price*i.qty)}</b></div>`}).join("")}
  <div class="tt" style="margin-top:12px"><span>Subtotal</span><span>${fmt(t.sub)}</span></div><div class="tt"><span>Delivery</span><span>${t.del?fmt(t.del):"Free"}</span></div><div class="tt big"><span>Total</span><span>${fmt(t.total)}</span></div>
  <p class="note">Orders are submitted through WhatsApp. This is a frontend ordering method: it does not create a server-side order record. Your order is only received once you send the pre-filled message.</p></div></div>`);
}
function validate(){
  const v={};["name","phone","wa","email","address","city","postal"].forEach(k=>v[k]=$("#c_"+k).value.trim());
  const d=s=>s.replace(/[\s\-()]/g,""),e={};
  if(v.name.length<3)e.name="Enter your full name.";
  if(!/^\+?\d{10,15}$/.test(d(v.phone)))e.phone="Enter a valid phone number (10-15 digits).";
  if(v.wa&&!/^\+?\d{10,15}$/.test(d(v.wa)))e.wa="Enter a valid WhatsApp number.";
  if(v.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))e.email="Enter a valid email address.";
  if(v.address.length<10)e.address="Enter your complete address (house, street, area).";
  if(v.city.length<2)e.city="Enter your city.";
  if(v.postal&&!/^\d{4,8}$/.test(v.postal))e.postal="Postal code should be 4-8 digits.";
  $$("#coForm .fld[data-f]").forEach(f=>{const m=e[f.dataset.f];f.classList.toggle("bad",!!m);$(".err",f).textContent=m||""});
  return Object.keys(e).length?null:v;
}
function placeOrder(){
  const v=validate();if(!v){const b=$("#coForm .bad input");if(b)b.focus();return}
  if(!cart.length){$("#coErr").textContent="Your cart is empty.";return}
  const t=totals(),pay=$('input[name="pay"]:checked').value,id="CC-"+Date.now().toString(36).toUpperCase()+Math.random().toString(36).slice(2,5).toUpperCase();
  const lines=cart.map((i,n)=>{const p=byId(i.id);return `${n+1}. ${p.name}\n   Qty: ${i.qty}${i.size?" | Size: "+i.size:""}${i.color?" | Color: "+i.color:""}\n   ${fmt(p.price)} x ${i.qty} = ${fmt(p.price*i.qty)}`}).join("\n");
  const msg=`*NEW ORDER - ${S.name}*\nOrder ID: ${id}\n\n*Customer*\nName: ${v.name}\nPhone: ${v.phone}\n${v.wa?"WhatsApp: "+v.wa+"\n":""}${v.email?"Email: "+v.email+"\n":""}Address: ${v.address}, ${v.city}${v.postal?" "+v.postal:""}\n\n*Products*\n${lines}\n\nSubtotal: ${fmt(t.sub)}\nDelivery: ${t.del?fmt(t.del):"Free"}\n*Grand Total: ${fmt(t.total)}*\nPayment: ${pay}${$("#c_notes").value.trim()?"\nNotes: "+$("#c_notes").value.trim():""}`;
  const url=`https://wa.me/${S.whatsapp.replace(/\D/g,"")}?text=${encodeURIComponent(msg)}`;
  const w=window.open(url,"_blank");
  if(!w){$("#coErr").innerHTML=`Your browser blocked WhatsApp. <a href="${url}" target="_blank" rel="noopener" style="text-decoration:underline">Open WhatsApp manually</a>. Your cart is unchanged.`;return}
  cart=[];persist();renderCart();
  $("#mbody").innerHTML=`<div class="empty"><i class="fa-brands fa-whatsapp"></i><h3 style="color:var(--tx)">WhatsApp opened</h3><p style="margin:10px auto;max-width:420px">Order <b>${id}</b> is ready in WhatsApp. Press <b>Send</b> there to submit it. Until you send the message, we have not received your order.</p><p class="note">This order method is frontend-only and does not create a server-side order record.</p><button class="btn" data-act="close">Continue shopping</button></div>`;
}
function openPolicy(t){showModal(`<h3 style="margin-bottom:12px">${esc(t)}</h3><p style="color:var(--mu)">${esc(CONFIG.policies[t])}</p>`)}

/* =====================================================================
   9. EVENTS
   ===================================================================== */
document.addEventListener("click",e=>{
  const f=e.target.closest("[data-f]");
  if(f&&!f.classList.contains("fld")){e.preventDefault();closeAll();let o={};try{o=JSON.parse(f.dataset.f)}catch(x){}applyFilter(o);return}
  const a=e.target.closest("a[href^='#']");if(a&&$(".show"))closeAll();
  const sz=e.target.closest("[data-sz]");
  if(sz&&Q){Q.size=sz.dataset.sz;$$("[data-sz]").forEach(b=>b.classList.toggle("sel",b===sz));return}
  const cl=e.target.closest("[data-cl]");
  if(cl&&Q){Q.color=cl.dataset.cl;$$("[data-cl]").forEach(b=>b.classList.toggle("sel",b===cl));return}
  const q=e.target.closest("[data-q]");
  if(q&&Q){Q.qty=Math.max(1,Math.min(MAXQ,Q.qty+Number(q.dataset.q)));$("#qn").textContent=Q.qty;return}
  const sg=e.target.closest("[data-sug]");
  if(sg){$("#sIn").value=sg.dataset.sug;renderSearch();return}
  const b=e.target.closest("[data-act]");if(!b)return;
  const act=b.dataset.act,id=b.dataset.id,k=b.dataset.k;
  if(act==="close")closeAll();
  else if(act==="menu")openPanel("menu");
  else if(act==="search"){openPanel("search");$("#scrim").classList.remove("show");renderSearch();setTimeout(()=>$("#sIn").focus(),150)}
  else if(act==="sclear"){$("#sIn").value="";renderSearch();$("#sIn").focus()}
  else if(act==="cartopen"){renderCart();openPanel("cart")}
  else if(act==="wishopen"){renderWish();openPanel("wish")}
  else if(act==="wish")toggleWish(id);
  else if(act==="qv")openQV(id);
  else if(act==="add"){const p=byId(id);if(!p)return;
    if(p.sizes.length||p.colors.length>1)openQV(id);
    else if(addToCart(p.id,"",p.colors[0]||"",1)){if(b.closest("#wishBody"))toggleWish(p.id);b.textContent="Added";setTimeout(()=>{if(b.isConnected)b.textContent=b.closest("#wishBody")?"Move to cart":"Add to cart"},1200)}}
  else if(act==="qadd"&&Q){if(addToCart(Q.id,Q.size,Q.color,Q.qty)){const w=wish.includes(Q.id);closeAll();renderCart();openPanel("cart");if(w&&false)toggleWish(Q.id)}}
  else if(act==="inc"||act==="dec"){const i=cart.find(x=>keyOf(x)===k);if(i){i.qty=Math.max(1,Math.min(MAXQ,i.qty+(act==="inc"?1:-1)));persist();renderCart()}}
  else if(act==="rm"){cart=cart.filter(x=>keyOf(x)!==k);persist();renderCart()}
  else if(act==="checkout")openCheckout();
  else if(act==="reset"){F=DEF();syncFilters();renderShop()}
  else if(act==="policy")openPolicy(b.dataset.t);
});
document.addEventListener("submit",e=>{
  if(e.target.id==="coForm"){e.preventDefault();placeOrder()}
  if(e.target.id==="nForm"){e.preventDefault();const m=$("#nMail").value.trim(),o=$("#nMsg");
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)){o.style.color="#c0392b";o.textContent="Please enter a valid email address.";return}
    o.style.color="inherit";o.textContent="Email looks valid. Note: no email service is connected yet, so this address is not saved.";$("#nMail").value=""}
});
document.addEventListener("change",e=>{
  if(e.target.matches(".fb select"))readFilters();
  if(e.target.name==="pay"&&$("#bankInfo"))$("#bankInfo").hidden=e.target.value!=="Bank Transfer";
});
document.addEventListener("input",e=>{if(e.target.id==="sIn")renderSearch()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeAll()});
$("#top").addEventListener("click",()=>scrollTo({top:0,behavior:RM?"auto":"smooth"}));

/* active nav + back-to-top */
function onScroll(){
  $("#top").classList.toggle("show",scrollY>700);
  const y=scrollY+140;let cur="#home";
  [["#home"],["#categories"],["#contact"]].forEach(([h])=>{const s=$(h);if(s&&s.offsetTop<=y)cur=h});
  if($("#shop").offsetTop<=y&&y<$("#contact").offsetTop)cur="#shop";
  $$("#links a").forEach(a=>a.classList.toggle("act",a.getAttribute("href")===cur&&(!a.dataset.f||a.textContent==="Shop")));
}
addEventListener("scroll",onScroll,{passive:true});

/* =====================================================================
   10. INIT
   ===================================================================== */
function init(){
  document.title=S.name+" | Premium Fashion";
  $("#brand1").innerHTML=brandHTML();
  const msgs=CONFIG.announcements.map(m=>`<span>${esc(m)}</span>`).join("");
  $("#mq").innerHTML=msgs.repeat(4);
  $("#links").innerHTML=navHTML();$("#menu").innerHTML=`<button class="ib mx" data-act="close" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>`+navHTML();
  $("#heroImg").src=CONFIG.images.hero;$("#aboutImg").src=CONFIG.images.about;
  $("#cats").innerHTML=CONFIG.categories.map(c=>`<button class="cat rv" ${fAttr({cat:c.id})} aria-label="Shop ${esc(c.title)}"><img src="${esc(c.image)}" alt="${esc(c.title)}" loading="lazy" onerror="fb(this)"><div><b>${esc(c.title)}</b><span>Shop now</span></div></button>`).join("");
  [0,1,2,3].forEach(i=>{$("#ban"+i).innerHTML=banner(i)});
  renderSections();initFilters();renderShop();renderCart();renderWish();
  const so=CONFIG.social,tel=S.whatsapp.replace(/\D/g,"");
  $("#fg").innerHTML=`<div><h4>${esc(S.name)}</h4><p>Premium fashion, accessories and everyday essentials designed for your lifestyle.</p><div class="soc"><a href="${esc(so.instagram)}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a><a href="${esc(so.tiktok)}" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a><a href="${esc(so.facebook)}" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a></div></div>
  <div><h4>Shop</h4><ul>${[["Shirts",{cat:"shirts"}],["Hoodies",{cat:"hoodies"}],["Watches",{cat:"watches"}],["Shoes",{group:"footwear"}],["Perfumes",{cat:"perfumes"}],["Accessories",{cat:"accessories"}]].map(l=>`<li><button ${fAttr(l[1])}>${l[0]}</button></li>`).join("")}</ul></div>
  <div><h4>Customer service</h4><ul><li><a href="https://wa.me/${tel}" target="_blank" rel="noopener">Contact Us</a></li>${Object.keys(CONFIG.policies).map(t=>`<li><button data-act="policy" data-t="${esc(t)}">${esc(t)}</button></li>`).join("")}</ul></div>
  <div><h4>Contact</h4><ul><li><a href="https://wa.me/${tel}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a></li><li><a href="mailto:${esc(S.email)}"><i class="fa-regular fa-envelope"></i> ${esc(S.email)}</a></li><li><a href="${esc(so.instagram)}" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> Instagram</a></li><li><a href="${esc(so.tiktok)}" target="_blank" rel="noopener"><i class="fa-brands fa-tiktok"></i> TikTok</a></li><li><a href="${esc(so.facebook)}" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i> Facebook</a></li></ul></div>`;
  $("#copy").textContent="\u00A9 "+new Date().getFullYear()+" "+S.name+". All rights reserved.";
  if(G){
    gsap.from("#hdr",{y:-40,opacity:0,duration:.6,clearProps:"all"});
    gsap.from(".hero-bg",{scale:1.15,duration:2.2,ease:"power2.out",clearProps:"all"});
    gsap.from(".hero h1,.hero p,.hero .row",{y:40,opacity:0,duration:.9,stagger:.15,delay:.2,ease:"power3.out",clearProps:"all"});
  }
  reveal();onScroll();
}
init();