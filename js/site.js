
const WA="916238159862";
function navToggle(){document.querySelector(".navlinks")?.classList.toggle("open")}
function waSend(lines){window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(lines.join("\n")),"_blank","noopener")}
function setupEnquiry(formId){const f=document.getElementById(formId);if(!f)return;f.addEventListener("submit",e=>{e.preventDefault();const data=new FormData(f);let lines=["Assalamu Alaikum Al-Bidayah Quran Kareem,","I would like to enquire:"];for(const [k,v] of data.entries())if(String(v).trim())lines.push(k+": "+v);waSend(lines)})}
const currencyRates={INR:{rate:25.4,symbol:"₹",digits:0},USD:{rate:1/3.64,symbol:"$",digits:2},QAR:{rate:1,symbol:"QAR ",digits:0}};
function setupCurrency(){const sel=document.getElementById("currency");if(!sel)return;function update(){const c=currencyRates[sel.value];document.querySelectorAll("[data-qar]").forEach(el=>{const n=Number(el.dataset.qar)*c.rate;el.textContent=c.symbol+new Intl.NumberFormat(sel.value==="INR"?"en-IN":"en-US",{minimumFractionDigits:c.digits,maximumFractionDigits:c.digits}).format(n)+" / month"})}sel.addEventListener("change",update);update()}
document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());setupEnquiry("enquiryForm");setupEnquiry("trialForm");setupEnquiry("registrationForm");setupCurrency()});
