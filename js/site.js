
const WA="916238159862";
function navToggle(){document.querySelector(".navlinks")?.classList.toggle("open")}
function waSend(lines){window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(lines.join("\n")),"_blank","noopener")}
function setupEnquiry(formId){const f=document.getElementById(formId);if(!f)return;f.addEventListener("submit",e=>{e.preventDefault();const data=new FormData(f);let lines=["Assalamu Alaikum Al-Bidayah Quran Kareem,","I would like to enquire:"];for(const [k,v] of data.entries())if(String(v).trim())lines.push(k+": "+v);waSend(lines)})}
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
