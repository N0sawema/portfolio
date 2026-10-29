
const WA='2348071319560';
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];

const wa='https://wa.me/'+WA+'?text='+encodeURIComponent('Hi Oghosa, I found your portfolio and I’d like to talk about social media management.');
const waButton=$('#wa');
if(waButton)waButton.href=wa;
$$('.wa-link').forEach(a=>a.href=wa);

const parts=$$('[data-split]'),total=parts.reduce((a,e)=>a+e.textContent.length,0);let n=0;
parts.forEach(el=>{const t=el.textContent;el.textContent='';[...t].forEach(c=>{const s=document.createElement('span');s.className='ch';s.textContent=c===' '?'\u00a0':c;s.style.setProperty('--i',n);s.style.setProperty('--d',Math.sin(n*1.7).toFixed(2));el.append(s);n++})});

const chs=$$('.ch'),stage=$('#stage');let px=0,py=0,raf=0;
function frame(){raf=0;chs.forEach(c=>{const r=c.getBoundingClientRect();const d=Math.hypot(px-(r.left+r.width/2),py-(r.top+r.height/2));c.style.setProperty('--k',Math.max(0,1-d/230).toFixed(3))});
if(stage){stage.style.setProperty('--mx',((px/innerWidth-.5)*2).toFixed(3));stage.style.setProperty('--my',((py/innerHeight-.5)*2).toFixed(3))}}
if(!reduce)addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;px=e.clientX;py=e.clientY;raf||(raf=requestAnimationFrame(frame))});

$$('.tile').forEach(t=>t.addEventListener('click',()=>{
 const spin=t.querySelector('.spin');
 if(spin)spin.animate([{transform:'rotateY(0)'},{transform:'rotateY(360deg)'}],{duration:900,easing:'cubic-bezier(.3,1.4,.4,1)'});
 for(let i=0;i<8;i++){const b=document.createElement('span'),a=i/8*6.283;b.className='bit';b.style.setProperty('--dx',Math.cos(a)*70+'px');b.style.setProperty('--dy',Math.sin(a)*70+'px');t.append(b);b.addEventListener('animationend',()=>b.remove())}
}));

const story=$('.story'),hero=$('#hero'),bar=$('#bar');
function onScroll(){
 if(story&&hero){const max=story.offsetHeight-innerHeight,p=Math.min(1,Math.max(0,scrollY/Math.max(1,max)));hero.style.setProperty('--p',p.toFixed(4))}
 if(bar)bar.style.transform='scaleX('+(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)).toFixed(4)+')'
}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.2});
$$('[data-reveal]').forEach(e=>io.observe(e));

const B=(bg,i)=>'<svg viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="12" fill="'+bg+'"/>'+i+'</svg>';
const S='fill="none" stroke-linecap="round" stroke-linejoin="round"';
const TOOLS=[
['Canva',B('#00a7b5','<path d="M31 18a10 10 0 1 0 0 12" stroke="#fff" stroke-width="5" '+S+'/>')],
['Meta Business Suite',B('#fff','<path d="M24 24c-3-5-6-9-10-9a9 9 0 0 0 0 18c4 0 7-4 10-9zm0 0c3 5 6 9 10 9a9 9 0 0 0 0-18c-4 0-7 4-10 9z" stroke="#0866ff" stroke-width="4" '+S+'/>')],
['CapCut',B('#111','<path d="M14 16l20 16M14 32l20-16" stroke="#fff" stroke-width="4.5" '+S+'/>')],
['Buffer',B('#fff','<path d="M24 10l14 7-14 7-14-7z" fill="#222"/><path d="M10 25l14 7 14-7M10 33l14 7 14-7" stroke="#222" stroke-width="4" '+S+'/>')],
['Hootsuite',B('#fff','<path d="M13 15l5 5M35 15l-5 5" stroke="#111" stroke-width="3" '+S+'/><circle cx="24" cy="27" r="13" fill="#111"/><circle cx="19" cy="25" r="4.3" fill="#fff"/><circle cx="29" cy="25" r="4.3" fill="#fff"/><circle cx="19" cy="25" r="1.7" fill="#111"/><circle cx="29" cy="25" r="1.7" fill="#111"/>')],
['Later',B('#ff6f91','<circle cx="24" cy="24" r="11" stroke="#fff" stroke-width="4" '+S+'/><path d="M24 17v7l5 3" stroke="#fff" stroke-width="3.5" '+S+'/>')],
['Notion',B('#fff','<rect x="9" y="9" width="30" height="30" rx="6" stroke="#111" stroke-width="3" '+S+'/><path d="M17 33V15l14 18V15" stroke="#111" stroke-width="4" '+S+'/>')],
['Google Analytics',B('#fff','<rect x="30" y="8" width="9" height="32" rx="4.5" fill="#f9ab00"/><rect x="19" y="18" width="9" height="22" rx="4.5" fill="#e37400"/><circle cx="13" cy="35" r="5" fill="#e37400"/>')],
['Trello',B('#0079bf','<rect x="11" y="11" width="11" height="22" rx="3" fill="#fff"/><rect x="26" y="11" width="11" height="14" rx="3" fill="#fff"/>')],
['Linktree',B('#43e660','<path d="M24 11v26M13.500 17.500l21 13M34.500 17.500l-21 13" stroke="#0b3d1c" stroke-width="4" '+S+'/>')]
];
function fillRow(el,list){if(!el)return;const h=list.map(t=>'<div class="tool">'+t[1]+'<span>'+t[0]+'</span></div>').join('');el.innerHTML=h+h;[...el.children].slice(list.length).forEach(c=>c.setAttribute('aria-hidden','true'))}
fillRow($('#r1'),TOOLS);fillRow($('#r2'),TOOLS.slice(5).concat(TOOLS.slice(0,5)));

const rows=$('#rows');let last=scrollY,sk=0,tg=0,run=false;
function tick(){if(!rows){run=false;return}sk+=(tg-sk)*.14;tg*=.86;rows.style.setProperty('--sk',sk.toFixed(2));if(Math.abs(sk)>.02||Math.abs(tg)>.02)requestAnimationFrame(tick);else run=false}
addEventListener('scroll',()=>{tg=Math.max(-9,Math.min(9,(scrollY-last)*.4));last=scrollY;if(!run&&!reduce&&rows){run=true;requestAnimationFrame(tick)}},{passive:true});


const WORK=[
{
 n:'Ddhomes',
 t:'Real estate',
 c:'#4f8df0',
 desc: 'Ddhomes is a real estate business that specializes in helping clients buy, sell, and rent properties. They provide personalized services to ensure a smooth and successful real estate experience.',
 img: 'assets/DDhomes.png',
 tt:'https://vt.tiktok.com/ZS4ddVvoS/',
 tt2:'https://vt.tiktok.com/ZS4dJs7cH/',
 ig:'PASTE_DDHOMES_INSTAGRAM_LINK',

 caseStudy: {
  roles: 'Social Media Manager, Scriptwriter, Content Actor',
  brief: 'DDhomes needed consistent social media content that could communicate its projects, showcase construction progress and position the brand as a credible real estate company.',
  strategy: 'I worked across multiple Stages of the content process, from developing the idea to appearing in the final content.',
  work: '<ul><li>Developed content ideas and scripts for the brand.</li><li>Managing Social Media Content</li><li>Creating hooks and storylines for real estate content.</li><li>Appearing in brand videos as a content creator.</li><li>Creating content around project updates, construction and the company\'s operations.</li></ul>',
  results: 'I focused on making real estate content easier to understand and more engaging by moving beyond simply showing properties. The goal was to tell the story behind the projects, highlight the construction process, and showcase the company\'s expertise in the real estate industry. This approach helped to build trust with potential clients and position DDhomes as a credible and reliable real estate company.',
  skills: 'Social Media Marketing, Scriptwriting, Content Strategy, Creative Direction, On Camera Performance, Copywriting, Real Estate Storytelling.',
  images: ['assets/ddhomes-campaign.jpg']
}
},
{
 n:'Fauzeeys Lunch Box',
 t:'Food and catering',
 c:'#ef6f55',
 desc:'Fauzeeys Lunch Box is a food and catering business that specializes in providing delicious and convenient meals for individuals and events.',
 img: 'assets/Fauzeeys_Lunch_Box_Logo.png',
 tt:'https://vt.tiktok.com/ZS4deuqSp/',
 ig:'',

  caseStudy: {
  roles: 'Content Actor',
  brief: 'Fauzeeys Lunch Box needed engaging social media content that could showcase the brand and its offerings in a way that felt natural, relatable and entertaining.',
  strategy: 'As a content actor, I brought the brand\'s content concepts to life by appearing in and performing for social media content.',
  work: '<ul><li>Bringing scripted content to life on camera.</li><li>Interpreting different characters for the brand and different scenarios also.</li><li>Creating comedic sketches and scenarios.</li><li>Creating hooks and storylines for food and catering content.</li></ul>',
  results: 'My focus was on making the content feel like something people would naturally want to watch, while still communicating the brand\'s message and offerings. By creating content that was both entertaining and informative, I helped to increase engagement and build a stronger connection between the brand and its audience.',
  skills: 'On-Camera Performance, Content Execution, Creativity and Collaboration, Brand Storytelling.',
 }
},
{
 n:'Fit In Collection',
 t:'Fashion',
 c:'#8b6cf0',
 desc: 'Fit In Collection is a fashion brand that offers a wide range of stylish and trendy clothing and accessories for men and women.',
 img: 'assets/fit-in-collection.jpg',
 tt:'',
 ig:'https://www.instagram.com/p/DdXJvmixo7B/',
 canva:'https://canva.link/gy01uf25fryibd9',

 caseStudy: {
  roles: 'Social Media Manager',
  brief: 'Fit_in Collection needed a social media presence that could showcase its fashion pieces, communicate the brand\'s identity and make its products appealing to its target audience.',
  strategy: 'I managed the brand\'s social media content, and worked on content that posistioned the collection in a way that was visually appealing, and easy for customers to engage with.',
  work: '<ul><li>Developing promotional content.</li><li>Managing the brand\'s social media content.</li><li>Creating content that showcased the brand\'s fashion pieces.</li></ul>',
  results: 'The goal was to make the page feel like fashion brand people could discover, engage with and shop from.',
  skills: 'Fashion Content, Graphic Design, Social Media Management, Campaign Support, Brand Positioning, Product Storytelling.',
 }
},

{
 n:'Alutrix Consulting',
 t:'Business consulting',
 c:'#2fb59a',
 desc:'Alutrix Consulting is a business consulting firm that provides expert advice and guidance to help businesses improve their performance and achieve their goals.',
 img: 'assets/alutrix-logo.jpg',
 doc1:'https://docs.google.com/document/d/1muVEJzKD3yV6gH1oImmvSaKRRh1bTl_SUV31oAIpYbo', 
 doc2:'https://quiet-shape-587.linkyhost.page',
 
 caseStudy: {
  roles: 'Social Media Manager',
  brief: 'Alutrix Consulting needed a social media presence that could communicate the brand while keeping its content engaging and relevant to its audience.',
  strategy: 'I managed the brand\'s social media content and helped translate its ideas and offerings into content suitable for digital platforms',
  work: '<ul><Managing social media content.</li><li>Developing Content ideas</li><li>Planning and creating content for social platforms</li><li>Documentations like Content Calendar, Social Media Strategy document, Proposal and Business Plan and so on.</li></ul>',
  results: 'Add verified views, engagement, enquiries, or client feedback where available.',
  skills: 'Social Media Strategy, Graphic Design, Social Media Management, content strategy.',
  images: ['assets/alutrix-campaign.jpeg']
}
},

{
 n:'Aniyah Events',
 t:'Events',
 c:'#f1a93c',
 desc:'Anuyah Events is an event planning and management company that specializes in creating memorable and unique experiences for its clients.',
 img: 'assets/aniyah-events.jpg',
 tt:'',
 ig:'https://www.instagram.com/reel/DaOVx63uGky/',
 ig2:'https://www.instagram.com/reel/DZLS-Bks5Ag/',
 
 caseStudy: {
  roles: 'Social Media Manager, Creative Assistant',
  brief: 'Anuyah Events needed a strong digital presence that reflected the quality of its events and services, while also engaging its audience and showcasing its expertise in event planning and management.',
  strategy: 'As a creative assistant, I supported the drand both creatively and digitally',
  work: '<ul><li>Developed content ideas for the brand.</li><li>Managing Social Media Content</li><li>Creating content concepts and weddings and events.</li><li>Creating Educational and relatable event-planning content.</li></ul>',
  results: 'I focused on balancing the polished side of events with content that feels human and relatable. Rather than only showing finished events, I helped create content around the decisions, details, expeience and conversations that happen behind them',
  skills: 'Event Storytelling, Creative Assistance, Social Media Management, Content Development.',
 }
 }
];

const ico='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 3l10 10M13 5v8H5"/></svg>';

// Hide buttons when a link is missing or still a placeholder.
const lk=(label,url)=>url&&!url.startsWith('PASTE_')
 ? '<a class="btn" href="'+url+'" target="_blank" rel="noopener noreferrer">'+label+' '+ico+'</a>'
 : '';

const stack=$('#stack');
if(stack){
 stack.innerHTML=WORK.map((w,i)=>
  '<article class="card" data-reveal style="--c:'+w.c+';--i:'+i+';--rt:'+(i%2?3:-3)+'">'+
   '<div class="meta">'+
    '<div class="top"><span class="num">0'+(i+1)+'</span><span class="tag">'+w.t+'</span></div>'+
    '<h3>'+w.n+'</h3>'+
    '<p>'+w.desc+'</p>'+
    '<div class="links">'+
     lk('TikTok video 1',w.tt)+
     lk('TikTok video 2',w.tt2)+
     lk('Instagram link 1',w.ig)+
     lk('Instagram link 2',w.ig2)+
     lk('Canva design',w.canva)+
     lk('Documents',w.doc1)+
     lk('Additional Documents',w.doc2)+
     '<button class="btn go" data-i="'+i+'">Case study '+ico+'</button>'+
    '</div>'+
   '</div>'+
  '<div class="vis">'+
'<div class="slot big">'+
  '<img src="'+w.img+'" alt="'+w.n+' campaign image" loading="lazy" style="width:100%;height:100%;object-fit:contain;display:block">'+
'</div>'+
'</div>'+
'</article>'

 ).join('');
}

const cards=$$('.card');
cards.forEach(c=>{
 io.observe(c);
 c.addEventListener('pointermove',e=>{
  const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
  c.style.setProperty('--rx',((x-.5)*6).toFixed(2));
  c.style.setProperty('--ry',((.5-y)*5).toFixed(2));
  c.style.setProperty('--gx',(x*100).toFixed(1)+'%');
  c.style.setProperty('--gy',(y*100).toFixed(1)+'%')
 });
 c.addEventListener('pointerleave',()=>{c.style.setProperty('--rx',0);c.style.setProperty('--ry',0)});
});

// stack effect
function stackFx(){
 if(innerWidth<=760)return;
 cards.forEach((c,i)=>{
  const nx=cards[i+1];if(!nx)return;
  const d=nx.getBoundingClientRect().top-parseFloat(getComputedStyle(c).top);
  const p=1-Math.min(1,Math.max(0,d/c.offsetHeight));
  c.style.scale=(1-p*.05).toFixed(4);
  c.style.setProperty('--br',(1-p*.28).toFixed(3))
 })
}
addEventListener('scroll',stackFx,{passive:true});addEventListener('resize',stackFx);

// case study dialog
const dlg=$('#cs'),csb=$('#csb'),sc=(h,p)=>'<div class="sc"><h4>'+h+'</h4><p>'+p+'</p></div>';
$$('.go').forEach(b=>b.addEventListener('click',()=>{
 const i=+b.dataset.i,w=WORK[i];
 if(!dlg||!csb)return;
 csb.style.setProperty('--c',w.c);
 const cs = w.caseStudy || {};

csb.innerHTML =
  '<button class="x" aria-label="Close">×</button>' +
  '<p class="kick"><b>0' + (i + 1) + '</b> — ' + w.t + '</p>' +
  '<h3>' + w.n + '</h3>' +

  '<div class="cg">' +
    sc('Roles', cs.roles || 'Roles') +
    sc('The brief', cs.brief || 'Case study details coming soon.') +
    sc('What I did', cs.strategy || 'Add your strategy here.') +
    sc('My Contributions', cs.work || 'Add your deliverables here.') +
    sc('Creative Approach', cs.results || 'Add verified results or project outcomes here.') +
    sc('Skills Demonstrated', cs.skills || 'List relevant skills used.') +
  '</div>' +

  '<div class="shots">' +
    (cs.images || []).map(src =>
      '<div class="slot">' +
        '<img src="' + src + '" alt="' + w.n +
        ' campaign work" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block">' +
      '</div>'
    ).join('') +
  '</div>';
  '<blockquote><p>Placeholder: testimonial from '+w.n+' goes here.</p><cite>Client name, role</cite></blockquote>';
 dlg.showModal()
}));
if(dlg)dlg.addEventListener('click',e=>{if(e.target===dlg||e.target.closest('.x'))dlg.close()});

// about photo parallax + services toggle
const fr=$('.frame');
function par(){if(!fr)return;const r=fr.getBoundingClientRect();fr.style.setProperty('--py',((r.top+r.height/2-innerHeight/2)*-.07).toFixed(1))}
addEventListener('scroll',par,{passive:true});par();
$$('.sv').forEach(e=>{
 e.addEventListener('click',()=>e.classList.toggle('open'));
 e.addEventListener('keydown',k=>{if(k.key==='Enter'||k.key===' '){k.preventDefault();e.classList.toggle('open')}})
});

// font fallback
function hasFont(){
 const t=document.createElement('span');
 t.textContent='mmmmWWWiii';
 t.style.cssText='position:absolute;visibility:hidden;font:800 40px monospace';
 document.body.append(t);
 const a=t.offsetWidth;
 t.style.fontFamily='"Bricolage Grotesque",monospace';
 const b=t.offsetWidth;
 t.remove();
 return a!==b
}
(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>{if(!hasFont())document.documentElement.classList.add('nf')});

const pause=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('off',!e.isIntersecting)));
[$('.story'),$('#tools')].filter(Boolean).forEach(e=>pause.observe(e));

// magnetic buttons
$$('.btn').forEach(b=>{
 b.addEventListener('pointermove',e=>{
  const r=b.getBoundingClientRect();
  b.style.translate=(e.clientX-r.left-r.width/2)*.18+'px '+(e.clientY-r.top-r.height/2)*.28+'px'
 });
 b.addEventListener('pointerleave',()=>b.style.translate='')
});

// theme toggle with circular reveal
const tb=$('#theme'),root=document.documentElement;
const sync=()=>{if(tb)tb.setAttribute('aria-pressed',root.dataset.theme==='dark')};
sync();
if(tb)tb.addEventListener('click',()=>{
 const next=root.dataset.theme==='dark'?'light':'dark';
 const r=tb.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
 const apply=()=>{root.dataset.theme=next;sync();try{localStorage.setItem('theme',next)}catch(e){}};
 if(!document.startViewTransition||reduce){apply();return}
 const rad=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
 document.startViewTransition(apply).ready.then(()=>root.animate(
  {clipPath:['circle(0 at '+x+'px '+y+'px)','circle('+rad+'px at '+x+'px '+y+'px)']},
  {duration:750,easing:'ease-in-out',pseudoElement:'::view-transition-new(root)'}
 ));
});
