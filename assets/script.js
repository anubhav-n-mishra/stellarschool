// Polished JS behaviors: mobile nav, smooth-scroll, counters, carousel, forms, modal
document.addEventListener('DOMContentLoaded', function(){
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  mobileToggle.addEventListener('click', ()=>{
    const visible = mainNav.style.display === 'flex';
    mainNav.style.display = visible ? 'none' : 'flex';
    mobileToggle.setAttribute('aria-expanded', String(!visible));
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href && href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        if(window.innerWidth <= 980) mainNav.style.display = 'none';
      }
    });
  });

  // counters animate when visible
  const counters = document.querySelectorAll('.counter');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries, o)=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          const el = en.target; const t = +el.dataset.target || 0; countTo(el,t,1200); o.unobserve(el);
        }
      });
    }, {threshold:0.6});
    counters.forEach(c=>obs.observe(c));
  } else { counters.forEach(c=>c.textContent = c.dataset.target); }

  function countTo(el,target,duration){
    const start = 0; const startTime = performance.now();
    function tick(now){
      const p = Math.min((now-startTime)/duration,1);
      el.textContent = Math.floor(p*target);
      if(p<1) requestAnimationFrame(tick); else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }

  // Testimonials carousel (simple, accessible)
  initCarousel();
  function initCarousel(){
    const root = document.querySelector('[data-carousel]');
    if(!root) return;
    const track = root.querySelector('.carousel-track');
    const viewport = root.querySelector('.carousel-viewport');
    const items = Array.from(track.children);
    let idx = 0;
    const prev = root.querySelector('.carousel-prev');
    const next = root.querySelector('.carousel-next');
    const announcer = document.getElementById('carousel-announcer');
    function updateAnnouncer(){
      if(!announcer) return;
      const text = items[idx].textContent.replace(/\s+/g,' ').trim();
      const preview = text.length>140 ? text.slice(0,137)+'...' : text;
      announcer.textContent = `Testimonial ${idx+1} of ${items.length}: ${preview}`;
    }

    // compute sizes using pixels for robust layout
    let itemWidth = viewport ? viewport.clientWidth : track.clientWidth;
    function setSizes(){
      itemWidth = viewport ? viewport.clientWidth : track.clientWidth;
      track.style.width = `${items.length * itemWidth}px`;
      items.forEach(it=>{ it.style.flex = `0 0 ${itemWidth}px`; it.style.width = `${itemWidth}px`; });
    }

    function show(i){
      idx = (i+items.length)%items.length;
      // ensure sizes set
      setSizes();
      const translatePx = idx * itemWidth;
      track.style.transform = `translateX(-${translatePx}px)`;
      // mark aria-hidden and manage tabindex for each item
      items.forEach((it, pos)=>{
        if(pos === idx){ it.setAttribute('aria-hidden','false'); it.setAttribute('tabindex','0'); }
        else { it.setAttribute('aria-hidden','true'); it.setAttribute('tabindex','-1'); }
      });
      updateAnnouncer();
    }
    prev.addEventListener('click', ()=> show(idx-1));
    next.addEventListener('click', ()=> show(idx+1));
    // keyboard support (left/right) when carousel is focused
    root.addEventListener('keydown', (e)=>{
      if(e.key === 'ArrowLeft'){
        e.preventDefault(); show(idx-1);
      } else if(e.key === 'ArrowRight'){
        e.preventDefault(); show(idx+1);
      } else if(e.key === 'Home'){
        e.preventDefault(); show(0);
      } else if(e.key === 'End'){
        e.preventDefault(); show(items.length-1);
      }
    });
    // auto rotate
    let auto = setInterval(()=> show(idx+1), 6000);
    root.addEventListener('mouseenter', ()=> clearInterval(auto));
    root.addEventListener('mouseleave', ()=> auto = setInterval(()=> show(idx+1),6000));
    // initial
    track.style.transition = 'transform 520ms cubic-bezier(.22,.9,.36,1)';
    // set initial aria-hidden/tabindex states
    items.forEach((it, pos)=>{ it.setAttribute('aria-hidden', pos===0 ? 'false' : 'true'); it.setAttribute('tabindex', pos===0 ? '0' : '-1'); });
    updateAnnouncer();
    // compute sizes and show
    setSizes();
    show(0);

    // recompute on resize
    window.addEventListener('resize', ()=>{
      // debounce
      clearTimeout(window._carouselResizeTimeout);
      window._carouselResizeTimeout = setTimeout(()=>{
        setSizes(); show(idx);
      }, 120);
    });
  }

  // Brochure open (opens brochure page to print/save as PDF)
  const brochure = document.getElementById('download-brochure');
  if(brochure) brochure.addEventListener('click', (e)=>{ e.preventDefault(); window.open('assets/brochure.html','_blank'); });

  // Improved phone validation for Indian numbers
  const applyForm = document.getElementById('apply-form');
  if(applyForm){
    applyForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      if(!applyForm.checkValidity()){ applyForm.reportValidity(); return; }
      const phone = (applyForm.querySelector('[name="phone"]').value || '').trim();
      // simple Indian phone check
      const phoneRe = /^(?:\+91[\-\s]?|0)?[6-9]\d{9}$/;
      if(!phoneRe.test(phone)){
        alert('Please enter a valid Indian mobile number starting with 6-9 (or prefix +91).');
        return;
      }
      const submitBtn = applyForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true; submitBtn.textContent = 'Sending...';
      // Simulate server call
      await new Promise(r=>setTimeout(r,800));
      submitBtn.disabled = false; submitBtn.textContent = 'Request Callback';
      alert('Thank you! Our admissions team will contact you shortly.');
      applyForm.reset();
    });
  }

  // Modal handling & subscription state
  const modal = document.getElementById('newsletter-modal');
  if(modal){
    const close = modal.querySelector('.modal-close');
    const key = 'school_subscribed_v2';
    function show(){ modal.setAttribute('aria-hidden','false'); }
    function hide(){ modal.setAttribute('aria-hidden','true'); }
    close.addEventListener('click', hide);
    modal.addEventListener('click', (ev)=>{ if(ev.target===modal) hide(); });
    const subscribed = localStorage.getItem(key);
    if(!subscribed){ setTimeout(show,9000); }
    document.getElementById('modal-subscribe')?.addEventListener('submit',(ev)=>{
      ev.preventDefault(); const email = ev.target.querySelector('input').value; localStorage.setItem(key,'1'); hide(); alert('Thanks! Subscribed: '+email);
    });
  }

  // Footer subscribe
  document.getElementById('footer-subscribe')?.addEventListener('submit',(e)=>{ e.preventDefault(); const email = e.target.querySelector('input').value; localStorage.setItem('school_subscribed_v2','1'); alert('Subscribed: '+email); e.target.reset(); });

  // set current year
  document.getElementById('year').textContent = new Date().getFullYear();
});

