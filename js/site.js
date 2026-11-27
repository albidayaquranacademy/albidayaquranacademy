
const WA="916238159862";
function navToggle(){document.querySelector(".navlinks")?.classList.toggle("open")}
function waSend(lines){window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(lines.join("\n")),"_blank","noopener")}
function setupEnquiry(formId){const f=document.getElementById(formId);if(!f)return;f.addEventListener("submit",e=>{e.preventDefault();const data=new FormData(f);let lines=["Assalamu Alaikum Al-Bidayah Quran Academy,","I would like to enquire:"];for(const [k,v] of data.entries())if(String(v).trim())lines.push(k+": "+v);waSend(lines)})}
const currencyRates={INR:{rate:25.4,symbol:"₹",digits:0},USD:{rate:1/3.64,symbol:"$",digits:2},QAR:{rate:1,symbol:"QAR ",digits:0}};
function setupCurrency(){const sel=document.getElementById("currency");if(!sel)return;function update(){const c=currencyRates[sel.value];document.querySelectorAll("[data-qar]").forEach(el=>{const n=Number(el.dataset.qar)*c.rate;el.textContent=c.symbol+new Intl.NumberFormat(sel.value==="INR"?"en-IN":"en-US",{minimumFractionDigits:c.digits,maximumFractionDigits:c.digits}).format(n)+" / month"})}sel.addEventListener("change",update);update()}
document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());setupEnquiry("enquiryForm");setupEnquiry("trialForm");setupEnquiry("registrationForm");setupCurrency()});

// Accessible count-up animation for the homepage statistics.
function animateCounters(){
  const counters=document.querySelectorAll("[data-count]");
  if(!counters.length)return;
  const run=el=>{
    if(el.dataset.done==="1")return;
    el.dataset.done="1";
    const target=Number(el.dataset.count)||0;
    const startValue=Number(el.dataset.start)||0;
    const suffix=el.dataset.suffix||"";
    const duration=1500;
    const startTime=performance.now();
    function frame(now){
      const progress=Math.min((now-startTime)/duration,1);
      const eased=1-Math.pow(1-progress,3);
      const current=Math.round(startValue+(target-startValue)*eased);
      el.textContent=current.toLocaleString("en-US")+suffix;
      if(progress<1)requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  };
  if("IntersectionObserver" in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){run(entry.target);observer.unobserve(entry.target)}
    }),{threshold:.45});
    counters.forEach(el=>observer.observe(el));
  }else counters.forEach(run);
}
document.addEventListener("DOMContentLoaded",animateCounters);

// Minimal smooth circular cursor. Disabled on touch and reduced-motion devices.
function setupCustomCursor(){
  if(!window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const ring=document.createElement("div");
  const dot=document.createElement("div");
  ring.className="cursor-ring";
  dot.className="cursor-dot";
  ring.setAttribute("aria-hidden","true");
  dot.setAttribute("aria-hidden","true");
  document.body.append(ring,dot);
  document.body.classList.add("custom-cursor");
  let x=-100,y=-100,rx=-100,ry=-100,raf=0;
  const move=e=>{
    x=e.clientX;y=e.clientY;
    dot.style.transform=`translate3d(${x}px,${y}px,0)`;
    ring.classList.add("is-visible");
    dot.classList.add("is-visible");
    if(!raf)raf=requestAnimationFrame(follow);
  };
  function follow(){
    rx+=(x-rx)*.24;ry+=(y-ry)*.24;
    ring.style.transform=`translate3d(${rx}px,${ry}px,0)`;
    if(Math.abs(x-rx)>.15||Math.abs(y-ry)>.15){raf=requestAnimationFrame(follow)}
    else raf=0;
  }
  document.addEventListener("pointermove",move,{passive:true});
  document.addEventListener("pointerdown",()=>ring.classList.add("is-down"));
  document.addEventListener("pointerup",()=>ring.classList.remove("is-down"));
  document.addEventListener("pointerover",e=>{
    if(e.target.closest("a,button,summary,[role='button'],.card"))ring.classList.add("is-hover");
  });
  document.addEventListener("pointerout",e=>{
    if(e.target.closest("a,button,summary,[role='button'],.card"))ring.classList.remove("is-hover");
  });
  document.addEventListener("pointerleave",()=>{
    ring.classList.remove("is-visible","is-hover","is-down");
    dot.classList.remove("is-visible");
  });
  document.addEventListener("pointerenter",()=>{
    ring.classList.add("is-visible");dot.classList.add("is-visible");
  });
}
document.addEventListener("DOMContentLoaded",setupCustomCursor);
