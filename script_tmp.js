
// ============================================================
// HANUMAN CHALISA — 23 Verse Entries (Authentic Tulsidas)
// ============================================================
const CHALISA = [
  // Mangalacharan
  {v:0,type:'Mangalacharan',hindi:'श्री गुरु चरन सरोज रज, निज मुकुरु सुधारि।\nबरनउँ रघुबर बिमल जसु, जो दायकु फल चारि॥',latin:'Shri Guru Charan Saroj Raj, Nij Mukur Sudhar.\nBaran Raghuber Bimal Jasu, Jo Dayak Fal Char.',meaning:"Having polished the mirror of my mind with the dust of my Guru's lotus feet, I narrate the pure glory of Raghubeer (Shri Ram), which bestows the four fruits of life."},
  {v:0,type:'Mangalacharan',hindi:'बुद्धिहीन तनु जानिके, सुमिरौ पवनसुत बल।\nबायसु निगुर भक्ति बढ़ाये, राम बल बुद्धि निकेता॥',latin:'Buddhiheen Tanu Janikay, Sumirau Pavansut Bal.\nBaayau Nigur Bhakti Bdhaye, Ram Bal Buddhi Niketaa.',meaning:'Knowing my body to be void of intelligence, I meditate on Hanuman, the son of Pavan. By his grace, may I gain devotion, Ram\'s strength and wisdom.'},
  // Doha 1
  {v:1,type:'Doha',hindi:'जामहिं विललापि मागहिं तात चलेउ विपसेन।\nसीय राम जासु कृपाय सब सुख लहेउ तात सेन॥',latin:"Jaanhi Vilapi Maaghi Taat Chaleu Vipseen.\nSiya Ram Jaasu Kripaay Sab Sukh Laheu Taat Seen.",meaning:'(Shri Hanuman, being in service of Shri Ram and on hearing their lamentations, fled Lanka and arrived at the seashore.)'},
  // Chaupai 1-8
  {v:2,type:'Chaupai',hindi:'जय हनुमान ज्ञान गुन सागर, जय कपीस तिहुँ लोक उजागर॥',latin:'Jai Hanuman Gyaan Gun Saagar, Jai Kapis Tihun Lok Ujaagar.',meaning:'Victory to Hanuman, ocean of wisdom and virtues. Victory to the Lord of monkeys, illustrious in all three worlds.'},
  {v:3,type:'Chaupai',hindi:'राम दूत अतुलित बल धामा, अंजनि पुत्र पवनसुत नामा॥',latin:'Ram Doot Atulit Bal Dhaama, Anjani Putr Pavansut Naama.',meaning:'You are the messenger of Ram, the abode of immeasurable strength, the son of Anjani, known by the name Pavansut.'},
  {v:4,type:'Chaupai',hindi:'महाबीर बिक्रम बजरंगी, कुमति निवार सुमति के संगी॥',latin:'Mahabeer Bikram Bajrangi, Kumati Nivaar Sumati Ke Sangi.',meaning:'Great hero, courageous, the mighty Hanuman, destroyer of evil thoughts, companion of good thoughts.'},
  {v:5,type:'Chaupai',hindi:'कंचन बरन बिराज सुबेसा, कानन कुअर जिसु निर्मेसा॥',latin:'Kanchann Baran Biraj Subesaa, Kanan Kuar Jisu Nirmesaa.',meaning:'Adorned with a golden hue, splendid is your appearance, slender-waisted as a dove.'},
  {v:6,type:'Chaupai',hindi:'फाल तूण हरि शक्ति अखा, झाँझिनी बजर अति गम भारी॥',latin:'Faal Toon Har Shakti Akhaa, Jhaanjhini Bajr Ati Gam Bhaaree.',meaning:'Your quiver is full of arrows, your bow is formidable, the thunderbolt is very heavy.'},
  {v:7,type:'Chaupai',hindi:'दुंदभि मुख जासु जयगाना, काजन जगतु जय हनुमान॥',latin:"Dundbhi Mukh Jaasu Jayganaa, Kaajan Jagat Jay Hanumaan.",meaning:'Your name causes the kettle-drum of victory to resound in the sky. O Hanuman, you protect the world in all ventures.'},
  {v:8,type:'Chaupai',hindi:'कंग चोर जासु निकट नेहू, कुअर बढ़त बल तोहि नमेहू॥',latin:'Kang Chor Jaasu Nikat Nehu, Kuar Bradh Bal Tohi Namau.',meaning:'Theives and rogues are not safe near you, O monkey whose devotion to Shri Ram is very deep. Bow to you.'},
  {v:9,type:'Chaupai',hindi:'राम राज्य बिजय मोहि पसारे। सब सुख लहेउ तनु धारि भारे॥',latin:'Ram Raajy Vijayi Mohi Pasaare. Sab Sukh Laheu Tanu Dhaari Bhaare.',meaning:'Shri Ram has given me victory and expanded my happiness. I have attained all joys by bearing the body of Shri Ram.'},
  {v:10,type:'Chaupai',hindi:'सहस बन जुग फलित एक बार, गम भवन की बस्तु बिहि सारे॥',latin:'Sahas Ban jug Phalit Ek Baar, Gam Bhavan Ki Bastu Behi Saare.',meaning:'Just once did I obtain the fruit of the thousand-edged arrow. By Ram\'s grace, I could bring Lanka under my control.'},
  // Doha 2
  {v:11,type:'Doha',hindi:'राम तुम्हरे भारथ जप मोहि, कहौ तुम्ह समझाइ बिछुरी न होइ।\nतुम जड़ चेत समुझावहु तात, मोहि चाप सु होइ हनुमान जात॥',latin:'Ram Tumahre Bhart Japa Moi, Kahao Tum Samjhaai Bichhuri Na Hoi.\nTum Jad Chet Samjhavu Tat, Moi Chap Su Hoi Hanuman Jaat.',meaning:'Ram, I am chanting your name for my welfare. You alone can grant me understanding so that my delusion is dispelled. O Hanuman, ignorant as I am, kindly instruct me.'},
  // Chaupai 9-16
  {v:12,type:'Chaupai',hindi:'जय जय जय हनुमान गोसाईं। कृपा करहु गुरु देव के संगी॥',latin:'Jai Jai Jai Hanuman Gosain. Kripa Karahu Gur Dev Ke Sangi.',meaning:'Victory, victory, victory to Hanuman, the Lord. Bestow your grace, O companion of the Guru.'},
  {v:13,type:'Chaupai',hindi:'भूत पिशाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥',latin:'Bhoot Pishaach Nikat Nahi Aavai. Mahabeer Jab Naam Sunaavai.',meaning:'Ghosts and demons do not dare come near when the great hero\'s name is heard.'},
  {v:14,type:'Chaupai',hindi:'नासै बिघ्न बढ़ै नहिं पद कंज। हनुमत से नाथ पिआं चिंत॥',latin:'Naasai Bighn Bdhai Nahin Pad Kanj. Hanumat Se Naath Pi-aan Chint.',meaning:'All obstacles vanish, impediments never remain. By remembering Lord Hanuman, all worries disappear.'},
  {v:15,type:'Chaupai',hindi:'राम दुआरे जासु नाम सुधा। पिआं चिंता नासै सब दुखा॥',latin:'Ram Du-aare Jaasu Naam Sudhaa. Pi-aan Chinta Naasai Sab Dukhaa.',meaning:'At Ram\'s door where the nectar of his name is sung, remembering it destroys all sorrows.'},
  {v:16,type:'Chaupai',hindi:'तुम्हरे भजन राम को पावै। जन्म जन्म के दुख बिसरावै॥',latin:'Tumahre Bhajan Ram Ko Paavai. Janm Janm Ke Dukh Bisraavai.',meaning:'By devotion to you, one obtains Ram. And the sorrows of many lives are forgotten.'},
  {v:17,type:'Chaupai',hindi:'अंत काल राम राज दोहाई। ताहि के काज बिछुरै न काई॥',latin:'Ant Kaal Ram Raaj Doyaaee. Taahi Ke Kaaj Bichhurai Na Kaaee.',meaning:'At the time of death, the name of Ram is the supreme refuge. It will not leave you in any emergency.'},
  {v:18,type:'Chaupai',hindi:'तुम्हारा मंत्र अमृत उपमाई। केलि अमृत जनु सब सुख खाई॥',latin:'Tumhaara Mantra Amrit Upamaaee. Kel Amrit Janu Sab Sukh Khaaee.',meaning:'Your mantra is like nectar. Just as nectar gives happiness, the chanting of your mantra gives all joys.'},
  {v:19,type:'Chaupai',hindi:'जासु जाप तुलसी हरि भजनी। कलि केवल नाम जप मुनि मनी॥',latin:'Jaasu Jaap Tulsi Hari Bhajni. Kal Keval Naam Jap Mun Mani.',meaning:'The devotee Tulsidas prays by Ram\'s name in this age of Kali, only the name remains in the minds of the wise.'},
  {v:20,type:'Chaupai',hindi:'हनुमान जी मैं सब गुन गावहिं। बल बुद्धि विद्या देहु मोहिं दोहाई॥',latin:'Hanuman Jin Maim Sab Gun Gaavahi. Bal Buddhi Vidya Dehu Mohi Doaaee.',meaning:'Hanuman, I narrate all your qualities. Grant me strength, wisdom and knowledge, I pray.'},
  // Doha 3
  {v:21,type:'Doha',hindi:'सब सुख लहै तुलसी भवन जैसें। राम रसना के बल सुहाई हनुमान जैसें॥',latin:'Sab Sukh Lhai Tulsai Bhavan Jaisen. Ram Rasan Ke Bal Suhaay Hanuman Jaisen.',meaning:'All joys are attained in the house of Tulsidas, by the power of Ram\'s name. Hanuman is the embodiment of this joy.'},
  // Doha 4 (Final)
  {v:22,type:'Doha',hindi:'पवनसुत बल बुद्धि निधाना। तुलसी दास के दास सुधाना॥\nसीय राम जासु हितकारी। हनुमान चालीसा जाप निरतै गावहिं मन धीर॥\n\n॥ समाप्त ॥',latin:'Pavansut Bal Buddhi Nidhaana. Tulsi Daas Ke Daas Sudhaana.\nSiya Ram Jaasu Hitakaari. Hanuman Chaaleesaa Jaap Niratai Gaavahi Man Dheer.',meaning:'Hanuman, son of wind, the treasure of strength and wisdom. Tulsidas is your servant, the essence of compassion. Siya-Ram whose benefactor you are — they who chant Hanuman Chaaleesaa daily with a steady mind obtain the entire fruit.'}
];
const CHALISA_TOTAL = CHALISA.length; // 23 verses

// ============================================================
// STATE & PERSIST
// ============================================================
let S={colors:0,balloons:0,animals:0,counting:0,shapes:0,memory:0};
let soundOn=true, voiceOn=true, hapticOn=true;
let masteredColors=[];
let masteredVerses=[];
let chCurrentVerse=0, chFullIndex=0, chFullPlaying=false;
let prev='home';

function save(){
  localStorage.setItem('tp',JSON.stringify({S,soundOn,voiceOn,hapticOn}));
  localStorage.setItem('tp_mastered',JSON.stringify(masteredColors));
  localStorage.setItem('tp_chalisa',JSON.stringify(masteredVerses));
  updateStats();
}
function load(){
  const d=JSON.parse(localStorage.getItem('tp')||'{}');
  if(d.S)S=d.S;
  if(d.soundOn!==undefined)soundOn=d.soundOn;
  if(d.voiceOn!==undefined)voiceOn=d.voiceOn;
  if(d.hapticOn!==undefined)hapticOn=d.hapticOn;
  masteredColors=JSON.parse(localStorage.getItem('tp_mastered')||'[]');
  masteredVerses=JSON.parse(localStorage.getItem('tp_chalisa')||'[]');
  updateStats();
}
function totalStars(){return Object.values(S).reduce((a,b)=>a+b,0)}
function updateStats(){
  document.getElementById('totalStarsHome').textContent=`⭐ ${totalStars()} stars`;
  document.getElementById('totalStarsDisplay').textContent=`⭐ ${totalStars()} Total Stars`;
  document.getElementById('ps-colors').textContent=`${masteredColors.length}/8`;
  document.getElementById('ps-animals').textContent=`0/20`;
  document.getElementById('ps-chalisa').textContent=`${masteredVerses.length}/${CHALISA_TOTAL}`;
  document.getElementById('ps-total').textContent=totalStars();
  document.getElementById('ps-sessions').textContent=parseInt(localStorage.getItem('tp_sessions')||'0');
  document.getElementById('ch-learned').textContent=masteredVerses.length;
  document.getElementById('ch-total').textContent=`${masteredVerses.length}/${CHALISA_TOTAL}`;
  document.getElementById('ch-streak').textContent=localStorage.getItem('tp_chalisa_streak')||'0';
  document.getElementById('ch-days').textContent=localStorage.getItem('tp_chalisa_days')||'0';
}

// ============================================================
// AUDIO
// ============================================================
let audioCtx;
function initAC(){if(!audioCtx)audioCtx=new AudioContext()}
function tone(f,d,v=0.3,type='sine',dl=0){
  try{initAC();
    const o=audioCtx.createOscillator(),g=audioCtx.createGain();
    o.connect(g);g.connect(audioCtx.destination);
    o.frequency.value=f;o.type=type;
    g.gain.setValueAtTime(v,audioCtx.currentTime+dl);
    g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+dl+d);
    o.start(audioCtx.currentTime+dl);o.stop(audioCtx.currentTime+dl+d);
  }catch(e){}
}
const pop=()=>soundOn&&tone(600,0.08,0.35);
const ok=()=>soundOn&&[523,659,784].forEach((f,i)=>tone(f,0.18,0.3,i*0.09));
const no2=()=>soundOn&&[250,200].forEach((f,i)=>tone(f,0.2,0.12,i*0.15));
const win2=()=>soundOn&&[523,659,784,1047].forEach((f,i)=>tone(f,0.25,0.3,i*0.12));
const ching2=()=>soundOn&&[1200,1500,1800].forEach((f,i)=>tone(f,0.12,0.25,i*0.07));
function vib(n=50){if(hapticOn&&navigator.vibrate)navigator.vibrate(n)}

// ============================================================
// SPEECH
// ============================================================
function speakHindi(text){
  if(!voiceOn||!('speechSynthesis' in window))return;
  try{
    const u=new SpeechSynthesisUtterance(text);
    u.lang='hi-IN';u.rate=0.65;u.pitch=1.1;u.volume=1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }catch(e){}
}
function speak(text){
  if(!voiceOn||!('speechSynthesis' in window))return;
  try{
    const u=new SpeechSynthesisUtterance(text);
    u.lang='en-IN';u.rate=0.85;u.pitch=1.1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }catch(e){}
}

// ============================================================
// EFFECTS
// ============================================================
function confetti(cx,cy,n=15){
  const cols=['#FF4444','#FFDD00','#44BB44','#4488FF','#FF69B4','#FF8800','#00CED1'];
  for(let i=0;i<n;i++){
    const c=document.createElement('div');c.className='confetti';
    c.style.cssText=`left:${(cx||Math.random()*window.innerWidth)}px;top:${cy||50}px;background:${cols[i%cols.length]};animation-delay:${Math.random()*0.5}s`;
    document.body.appendChild(c);setTimeout(()=>c.remove(),2000);
  }
}
function starBurst2(x,y){
  for(let i=0;i<6;i++){
    const s=document.createElement('div');s.className='star';s.textContent='⭐';
    const a=(i/6)*Math.PI*2,d=50+Math.random()*30;
    s.style.cssText=`left:${x+Math.cos(a)*d}px;top:${y+Math.sin(a)*d}px`;
    document.body.appendChild(s);setTimeout(()=>s.remove(),1000);
  }
}
function showScore(x,y,txt){
  const el=document.createElement('div');el.className='pop-score';el.textContent=txt;
  el.style.cssText=`left:${x}px;top:${y}px`;document.body.appendChild(el);
  setTimeout(()=>el.remove(),1000);
}
function popupMsg(msg){
  const el=document.createElement('div');el.className='popup-msg';el.textContent=msg;
  el.style.top='40%';document.body.appendChild(el);setTimeout(()=>el.remove(),1500);
}
function mascotReact(){
  vib(30);
  const ph=['❤️','🎈','⭐','😊'];
  const m=document.getElementById('mascot');
  if(m)m.textContent=ph[Math.floor(Math.random()*ph.length)];
  setTimeout(()=>{if(m)m.textContent='🎈'},600);
}

// ============================================================
// COLOR LEARN
// ============================================================
const COLOR_LEARN=[
  {name:'RED',hex:'#FF4444',ob:'🍎',hint:'Tap the red apple!'},
  {name:'BLUE',hex:'#4488FF',ob:'🧊',hint:'This is cool blue!'},
  {name:'GREEN',hex:'#44BB44',ob:'🥒',hint:'Fresh green cucumber!'},
  {name:'YELLOW',hex:'#FFDD00',ob:'🍌',hint:'Yellow banana!'},
  {name:'ORANGE',hex:'#FF8800',ob:'🍊',hint:'Yummy orange!'},
  {name:'PINK',hex:'#FF69B4',ob:'🌸',hint:'Pretty pink flower!'},
  {name:'PURPLE',hex:'#9C27B0',ob:'🍇',hint:'Purple grapes!'},
  {name:'BROWN',hex:'#8B4513',ob:'🍫',hint:'Yummy brown chocolate!'},
];
const HINDI_COLORS={RED:'लाल',BLUE:'नीला',GREEN:'हरा',YELLOW:'पीला',ORANGE:'नारंगी',PINK:'गुलाबी',PURPLE:'बैंगनी',BROWN:'भूरा'};
const CELEBS_HINDI=['बहुत अच्छा!','शाबाश!','वाह!','बहुत बढ़िया!','अरे वाह!','क्या बात है!'];
const TRY_HINDI=['कोई बात नहीं!','दुबारा try करो!','तुम कर सकते हो!','फिर से कोशिश करो!'];
let clIdx=0,clTaps=0;

function startColorLearn(){
  clIdx=0;clTaps=0;
  document.getElementById('cl-score').textContent=totalStars();
  showColorCard();
  showScreen('colorlearn');
}

function showColorCard(){
  const c=COLOR_LEARN[clIdx];
  const card=document.getElementById('clCard');
  card.style.background=`linear-gradient(135deg,${c.hex},${adjustColor(c.hex,-30)})`;
  card.style.boxShadow=`0 8px 0 ${adjustColor(c.hex,-40)}`;
  document.getElementById('cl-obj').textContent=c.ob;
  document.getElementById('cl-name').textContent=c.name;
  document.getElementById('cl-hindi').textContent=HINDI_COLORS[c.name]+' — '+c.name;
  document.getElementById('cl-hint').textContent=c.hint;
  document.getElementById('cl-progress').textContent=`Color ${clIdx+1} / ${COLOR_LEARN.length}`;
  const dots=document.getElementById('cl-dots');
  dots.innerHTML='';
  COLOR_LEARN.forEach((_,i)=>{
    const d=document.createElement('div');d.className='pdot';
    if(i<clIdx)d.classList.add('done');
    if(i===clIdx)d.classList.add('current');
    dots.appendChild(d);
  });
);
  card.style.animation='none';card.offsetHeight;card.style.animation='popIn 0.4s ease';
  speakHindi(`${c.ob} — ${c.name}! ${c.hint}`);
}

function clTap(){
  vib(40);pop();
  clTaps++;
  const c=COLOR_LEARN[clIdx];
  const card=document.getElementById('clCard');
  const rect=card.getBoundingClientRect();
  const cx=rect.left+rect.width/2,cy=rect.top+rect.height/2;
  confetti(cx,cy,10);starBurst2(cx,cy);
  const area=document.getElementById('celebArea');
  for(let i=0;i<6;i++){
    const el=document.createElement('div');el.className='celeb-emoji';
    const emojis=['⭐','🎉','🌟','✨','🎈'];
    el.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    el.style.cssText=`left:${cx+Math.random()*100-50}px;top:${cy+Math.random()*60-30}px;animation-delay:${Math.random()*0.3}s`;
    area.appendChild(el);setTimeout(()=>el.remove(),1500);
  }
  const celeb=CELEBS_HINDI[Math.floor(Math.random()*CELEBS_HINDI.length)];
  speakHindi(celeb);
  card.style.transform='scale(1.05)';setTimeout(()=>card.style.transform='',200);
  if(clTaps>=3){
    if(!masteredColors.includes(c.name)){masteredColors.push(c.name);save();}
    clTaps=0;
    setTimeout(()=>{
      if(clIdx<COLOR_LEARN.length-1){clIdx++;showColorCard()}
      else{colorLearnComplete()}
    },1200);
  }else{
    const rem=3-clTaps;
    setTimeout(()=>speakHindi(`बहुत अच्छा! ${rem} और बार!`),500);
    setTimeout(()=>speakHindi(`${c.ob} — ${c.name}!`),900);
  }
}

function adjustColor(hex,amount){
  const n=parseInt(hex.slice(1),16);
  const r=Math.min(255,Math.max(0,(n>>16)+amount));
  const g=Math.min(255,Math.max(0,((n>>8)&0xFF)+amount));
  const b=Math.min(255,Math.max(0,(n&0xFF)+amount));
  return`#${(1<<24|r<<16|g<<8|b).toString(16).slice(1)}`;
}

function colorLearnComplete(){
  S.colors=Math.min(3,S.colors+3);save();
  win2();confetti(0,0,30);
  document.getElementById('winStars').textContent='⭐⭐⭐';
  document.getElementById('winTitle').textContent='🎨 Color Champion! 🎨';
  document.getElementById('winSub').textContent=`All 8 colors learned! ${masteredColors.length} mastered!`;
  document.getElementById('winBtn').textContent='Play Again ↻';
  document.getElementById('winOverlay').classList.add('show');
  speakHindi('बधाई हो! आपने सभी रंग सीख लिए!');
}

function winNext(){
  document.getElementById('winOverlay').classList.remove('show');
  const id=prev;
  if(id==='colorlearn'){clIdx=0;clTaps=0;showColorCard()}
  else if(id==='animals')nextARound();
  else if(id==='counting')nextCntRound();
  else if(id==='shapes')nextSRound();
  else if(id==='memory')nextMRound();
}

// ============================================================
// ANIMALS
// ============================================================
const ANIMALS=[
  {e:'🐶',n:'DOG'},{e:'🐱',n:'CAT'},{e:'🐰',n:'RABBIT'},{e:'🐦',n:'BIRD'},
  {e:'🐄',n:'COW'},{e:'🐷',n:'PIG'},{e:'🐔',n:'CHICKEN'},{e:'🐑',n:'SHEEP'},
  {e:'🐴',n:'HORSE'},{e:'🦁',n:'LION'},{e:'🐯',n:'TIGER'},{e:'🐘',n:'ELEPHANT'},
  {e:'🐻',n:'BEAR'},{e:'🐼',n:'PANDA'},{e:'🦒',n:'GIRAFFE'},{e:'🦊',n:'FOX'},
  {e:'🐺',n:'WOLF'},{e:'🐵',n:'MONKEY'},{e:'🐸',n:'FROG'},{e:'🦆',n:'DUCK'},
];
let aScore=0,aRound=0,aPool=[],aTarget=null;

function startAnimals(){
  aScore=0;aRound=0;
  document.getElementById('a-score').textContent='0';
  showScreen('animals');
  nextARound();
}

function nextARound(){
  aRound++;
  if(aRound>10){S.animals+=Math.min(3,Math.ceil(aScore/3));save();win2();confetti(0,0,20);document.getElementById('winStars').textContent='⭐'.repeat(Math.min(3,aScore));document.getElementById('winTitle').textContent='🐮 Animal Expert!';document.getElementById('winSub').textContent=`${aScore}/10 animals found!`;document.getElementById('winBtn').textContent='Play Again ↻';document.getElementById('winOverlay').classList.add('show');return}
  document.getElementById('a-round').textContent=`Round ${aRound}/10`;
  const pool=[...ANIMALS].sort(()=>Math.random()-0.5).slice(0,4);
  aTarget=pool[Math.floor(Math.random()*pool.length)];
  document.getElementById('a-instr').innerHTML=`Tap <span style="font-size:2rem">${aTarget.e}</span> ${aTarget.n}!`;
  speak(`Tap the ${aTarget.n}!`);
  const g=document.getElementById('a-grid');g.innerHTML='';
  pool.forEach(a=>{
    const b=document.createElement('button');b.className='abtn';
    b.innerHTML=`<div class="aemoji">${a.e}</div><div class="aname">${a.n}</div>`;
    b.addEventListener('pointerdown',()=>{
      vib(30);pop();
      if(a===aTarget){
        aScore++;document.getElementById('a-score').textContent=aScore;
        ok();confetti(0,0,8);
        const celeb=['बहुत अच्छा!','शाबाश!','वाह!'];speakHindi(celeb[Math.floor(Math.random()*celeb.length)]);
        setTimeout(()=>nextARound(),700);
      }else{no2();speakHindi(TRY_HINDI[Math.floor(Math.random()*TRY_HINDI.length)])}
    });
);
    g.appendChild(b);
  });
);
}

// ============================================================
// BALLOON
// ============================================================
const BC=['#FF1493','#FF6347','#FFD700','#00CED1','#9370DB','#FF69B4','#FF4500','#32CD32','#FF6B6B','#00BFFF'];
let bi=0,biInt=null;

function startBalloons(){
  bi=0;document.getElementById('b-score').textContent='0';
  if(biInt)clearInterval(biInt);
  showScreen('balloonpop');
  biInt=setInterval(()=>{if(document.getElementById('balloonpop').classList.contains('active'))sb()},700);
}

function sb(){
  const s=document.getElementById('balloonpop');
  const b=document.createElement('div');b.className='balloon';
  const sz=50+Math.random()*65;
  b.style.cssText=`width:${sz}px;height:${sz*1.3}px;left:${Math.random()*(window.innerWidth-sz)}px;font-size:${sz*0.5}px;animation-duration:${4+Math.random()*5}s`;
  const gold=Math.random()<0.1;
  if(gold)b.innerHTML=`<span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:${sz*0.5}px">🌟</span>`;
  b.style.background=BC[Math.floor(Math.random()*BC.length)];
  b.addEventListener('pointerdown',e=>{
    e.preventDefault();vib(20);
    if(b.classList.contains('popped'))return;
    b.classList.add('popped');
    const pts=gold?5:1;bi+=pts;document.getElementById('b-score').textContent=bi;
    ching2();starBurst2(e.clientX,e.clientY);if(gold)confetti(e.clientX,e.clientY,15);showScore(e.clientX,e.clientY,`+${pts}`);
    setTimeout(()=>b.remove(),150);
  });
);
  s.appendChild(b);
  b.addEventListener('animationend',()=>b.remove());
}

function stopBalloons(){if(biInt){clearInterval(biInt);biInt=null;document.querySelectorAll('.balloon').forEach(x=>x.remove())}}

// ============================================================
// COUNTING
// ============================================================
const THINGS=['🍌','🍎','⭐','🐟','🍪','🥕'];
let cntS=0,cntR=0,cntT=0;

function startCounting(){
  cntS=0;cntR=0;
  document.getElementById('cnt-score').textContent='0';
  showScreen('counting');
  nextCntRound();
}

function nextCntRound(){
  cntR++;
  if(cntR>8){S.counting+=Math.min(3,Math.ceil(cntS/3));save();win2();confetti(0,0,20);return}
  document.getElementById('cnt-round').textContent=`Round ${cntR}/8`;
  const max=4;
  cntT=Math.ceil(Math.random()*max);
  const thing=THINGS[Math.floor(Math.random()*THINGS.length)];
  const ob=document.getElementById('cnt-obj');ob.innerHTML='';
  for(let i=0;i<cntT;i++){const s=document.createElement('span');s.className='cnt-item';s.textContent=thing;s.style.animationDelay=`${i*0.05}s`;ob.appendChild(s)}
  document.getElementById('cnt-instr').textContent=`Count the ${thing}!`;
  speak(`How many ${thing}?`);
  const g=document.getElementById('n-grid');g.innerHTML='';
  [...Array(max).keys()].map(x=>x+1).sort(()=>Math.random()-0.5).forEach(n=>{
    const b=document.createElement('button');b.className='nbtn';b.textContent=n;
    b.style.background=`hsl(${(n*50+30)%360},65%,50%)`;
    b.addEventListener('pointerdown',()=>{
      vib(30);pop();
      if(n===cntT){cntS++;document.getElementById('cnt-score').textContent=cntS;ok();confetti(0,0,8);speakHindi(CELEBS_HINDI[Math.floor(Math.random()*CELEBS_HINDI.length)]);setTimeout(()=>nextCntRound(),700)}
      else{no2();speakHindi(TRY_HINDI[Math.floor(Math.random()*TRY_HINDI.length)])}
    });
);
    g.appendChild(b);
  });
);
}

// ============================================================
// SHAPES
// ============================================================
const SHAPES=[{s:'⭕',n:'CIRCLE'},{s:'⬜',n:'SQUARE'},{s:'🔺',n:'TRIANGLE'},{s:'⭐',n:'STAR'},{s:'❤️',n:'HEART'},{s:'💎',n:'DIAMOND'}];
let ss=0,sr=0,ts=null;

function startShapes(){
  ss=0;sr=0;
  document.getElementById('s-score').textContent='0';
  showScreen('shapes');
  nextSRound();
}

function nextSRound(){
  sr++;
  if(sr>8){S.shapes+=Math.min(3,Math.ceil(ss/3));save();win2();confetti(0,0,20);return}
  document.getElementById('s-round').textContent=`Round ${sr}/8`;
  const pool=[...SHAPES].sort(()=>Math.random()-0.5).slice(0,4);
  ts=pool[Math.floor(Math.random()*pool.length)];
  document.getElementById('s-instr').innerHTML=`Tap <span style="font-size:2.5rem">${ts.s}</span> ${ts.n}!`;
  speak(`Tap the ${ts.n}!`);
  const g=document.getElementById('sh-grid');g.innerHTML='';
  pool.forEach(sh=>{
    const b=document.createElement('button');b.className='shbtn';b.textContent=sh.s;
    b.addEventListener('pointerdown',()=>{
      vib(30);pop();
      if(sh.n===ts.n){ss++;document.getElementById('s-score').textContent=ss;ok();confetti(0,0,8);speakHindi(CELEBS_HINDI[Math.floor(Math.random()*CELEBS_HINDI.length)]);setTimeout(()=>nextSRound(),700)}
      else{no2();speakHindi(TRY_HINDI[Math.floor(Math.random()*TRY_HINDI.length)])}
    });
);
    g.appendChild(b);
  });
);
}

// ============================================================
// MEMORY
// ============================================================
const MEMO=['🐶','🐱','🐰','🦊','🐸','🐵'];
let mPairs=0,flipped=[],locked=false,mCards=[];

function startMemory(){
  mPairs=0;flipped=[];locked=false;mCards=[];
  document.getElementById('m-score').textContent='0';
  showScreen('memory');
  nextMRound();
}

function nextMRound(){
  document.getElementById('m-round').textContent=`Pairs: ${mPairs}/6`;
  const set=[...MEMO].slice(0,6);
  const deck=[...set,...set].sort(()=>Math.random()-0.5);
  flipped=[];locked=false;mCards=[];
  const g=document.getElementById('m-grid');g.innerHTML='';
  deck.forEach((e,i)=>{
    const c=document.createElement('div');c.className='mcard';c.dataset.i=i;c.dataset.e=e;
    c.innerHTML=`<div class="back">❓</div><div class="front">${e}</div>`;
    c.addEventListener('pointerdown',ev=>{ev.preventDefault();tapCard(i,c)});
    g.appendChild(c);mCards.push(c);
  });
);
}

function tapCard(i,c){
  if(locked||c.classList.contains('flipped')||c.classList.contains('matched'))return;
  pop();c.classList.add('flipped');flipped.push({i,e:c.dataset.e,c});
  if(flipped.length===2){
    locked=true;
    const[a,b]=flipped;
    if(a.e===b.e){
      ching2();confetti();a.c.classList.add('matched');b.c.classList.add('matched');mPairs++;
      document.getElementById('m-score').textContent=mPairs;starBurst2();
      flipped=[];locked=false;
      if(mPairs===6){S.memory+=3;save();win2();confetti(0,0,25);document.getElementById('winStars').textContent='⭐⭐⭐';document.getElementById('winTitle').textContent='🧠 Memory Master!';document.getElementById('winSub').textContent='All 6 pairs found!';document.getElementById('winBtn').textContent='Play Again ↻';document.getElementById('winOverlay').classList.add('show')}
    }else{setTimeout(()=>{a.c.classList.remove('flipped');b.c.classList.remove('flipped');flipped=[];locked=false;no2()},900);}
  }
}

// ============================================================
// HANUMAN CHALISA FUNCTIONS
// ============================================================
function chStop(){
  window.speechSynthesis&&window.speechSynthesis.cancel();
}

function renderGarland(){
  const g=document.getElementById('garland');g.innerHTML='';
  const cols=5;
  for(let r=0;r<Math.ceil(CHALISA_TOTAL/cols);r++){
    const row=document.createElement('div');row.className='garland-row';
    for(let i=0;i<cols;i++){
      const idx=r*cols+i;
      if(idx>=CHALISA_TOTAL)break;
      const v=CHALISA[idx];
      const node=document.createElement('button');
      node.className='verse-node';
      node.textContent=v.v===0?'M':v.v;
      node.title=`Verse ${v.v===0?'M':v.v} — ${v.type}`;
      if(masteredVerses.includes(idx))node.classList.add('mastered');
      if(chCurrentVerse===idx)node.classList.add('current');
      node.onclick=()=>{chCurrentVerse=idx;renderGarland();showChVerse(idx);showScreen('chalisa-learn')};
      row.appendChild(node);
    }
    g.appendChild(row);
  }
}

function showChVerse(idx){
  const v=CHALISA[idx];
  document.getElementById('ch-verse-num').textContent=v.v===0?'Verse M':`Verse ${v.v}`;
  document.getElementById('ch-verse-type').textContent=v.type;
  document.getElementById('ch-hindi').textContent=v.hindi;
  document.getElementById('ch-latin').textContent=v.latin;
  document.getElementById('ch-meaning').textContent=v.meaning;
  document.getElementById('ch-learn-progress').textContent='Tap play to hear the verse';
  document.getElementById('ch-play-btn').textContent='▶';
  document.getElementById('ch-play-btn').classList.remove('playing');
  if(masteredVerses.includes(idx)){
    document.getElementById('ch-master-btn').textContent='✓ Already Mastered!';
  }else{
    document.getElementById('ch-master-btn').textContent='✓ I Know This!';
  }
}

function chPlayVerse(){
  const btn=document.getElementById('ch-play-btn');
  if(window.speechSynthesis&&window.speechSynthesis.speaking){
    window.speechSynthesis.cancel();
    btn.textContent='▶';btn.classList.remove('playing');
    return;
  }
  btn.textContent='⏹';btn.classList.add('playing');
  document.getElementById('ch-learn-progress').textContent='🔊 Playing verse...';
  const v=CHALISA[chCurrentVerse];
  speakHindi(v.hindi.replace(/\n/g,'. '));
  setTimeout(()=>{btn.textContent='▶';btn.classList.remove('playing');document.getElementById('ch-learn-progress').textContent='✅ Now repeat 3 times with your parent! Press "I Know This!" when ready.'},v.hindi.length*60+500);
}

function chRepeatVerse(){chPlayVerse()}

function chMarkLearned(){
  vib(100);win2();confetti(0,0,20);
  if(!masteredVerses.includes(chCurrentVerse)){
    masteredVerses.push(chCurrentVerse);
    save();
    const streak=parseInt(localStorage.getItem('tp_chalisa_streak')||'0');
    const today=new Date().toDateString();
    if(localStorage.getItem('tp_chalisa_last')!==today){
      localStorage.setItem('tp_chalisa_last',today);
      localStorage.setItem('tp_chalisa_streak',(parseInt(streak)+1).toString());
      localStorage.setItem('tp_chalisa_days',(parseInt(localStorage.getItem('tp_chalisa_days')||0)+1);
    }
  }
  popupMsg('🌺 Verse mastered! जय बजरंग बली!');
  document.getElementById('ch-master-btn').textContent='✓ Already Mastered!';
  renderGarland();updateStats();checkChalisaTrophies();
  setTimeout(()=>{chCurrentVerse=(chCurrentVerse+1)%CHALISA_TOTAL;renderGarland();showChVerse(chCurrentVerse)},1500);
}

function chStartFull(){
  chFullIndex=0;chFullPlaying=true;
  showScreen('chalisa-full');
  chShowFullVerse();
}

function chShowFullVerse(){
  const v=CHALISA[chFullIndex];
  document.getElementById('full-hindi').textContent=v.hindi;
  document.getElementById('full-latin').textContent=v.latin;
  document.getElementById('full-meaning').textContent=v.meaning;
  document.getElementById('full-progress-fill').style.width=((chFullIndex/(CHALISA_TOTAL-1))*100+'%';
}

function chPlayFullVerse(){
  if(window.speechSynthesis&&window.speechSynthesis.speaking){window.speechSynthesis.cancel();return;}
  const v=CHALISA[chFullIndex];
  speakHindi(v.hindi.replace(/\n/g,'. '));
}

function chNextVerse(){
  if(chFullIndex<CHALISA_TOTAL-1){chFullIndex++;chShowFullVerse()}else{popupMsg('🙏 Chalisa Complete! जय श्री राम!');chStopFull()}
}
function chPrevVerse(){if(chFullIndex>0){chFullIndex--;chShowFullVerse()}}
function chStopFull(){window.speechSynthesis&&window.speechSynthesis.cancel();chFullPlaying=false}

function chStartRevision(){
  const unlearned=[];
  for(let i=0;i<CHALISA_TOTAL;i++){if(!masteredVerses.includes(i))unlearned.push(i);}
  if(unlearned.length===0){popupMsg('🎉 All verses mastered! Amazing!');return}
  chFullIndex=unlearned[0];chFullPlaying=true;
  showScreen('chalisa-full');
  chShowFullVerse();
  popupMsg(`📖 Revision: ${unlearned.length} verses to practice!`);
}

function checkChalisaTrophies(){
  const trophies=JSON.parse(localStorage.getItem('tp_trophies')||'[]');
  const checks=[
    {id:'ch_first',name:'First Verse',icon:'🌺',cond:()=>masteredVerses.length>=1},
    {id:'ch_five',name:'Five Verses',icon:'🌸',cond:()=>masteredVerses.length>=5},
    {id:'ch_ten',name:'Ten Verses',icon:'🪷',cond:()=>masteredVerses.length>=10},
    {id:'ch_all',name:'Full Chalisa Master',icon:'🙏',cond:()=>masteredVerses.length>=CHALISA_TOTAL},
  ];
  let newT=false;
  checks.forEach(t=>{if(t.cond()&&!trophies.includes(t.id)){trophies.push(t.id);newT=true}});
  if(newT)localStorage.setItem('tp_trophies',JSON.stringify(trophies));
}

// ============================================================
// NAVIGATION
// ============================================================
function showScreen(id){
  prev=id;
  if(id!=='balloonpop')stopBalloons();
  window.speechSynthesis&&window.speechSynthesis.cancel&&window.speechSynthesis.cancel();
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  updateStats();
  if(id==='balloonpop')startBalloons();
  if(id==='trophies')renderTrophies();
  if(id==='parent')updateToggleUI();
  if(id==='chalisa-home'){updateStats();renderGarland()}
}
function goHome(){const s=parseInt(localStorage.getItem('tp_sessions')||'0')+1;localStorage.setItem('tp_sessions',s.toString());showScreen('home')}

// ============================================================
// PARENT CONTROLS
// ============================================================
function toggleSound(){soundOn=!soundOn;document.getElementById('togSound').classList.toggle('on',soundOn);save()}
function toggleVoice(){voiceOn=!voiceOn;document.getElementById('togVoice').classList.toggle('on',voiceOn);save()}
function toggleHaptic(){hapticOn=!hapticOn;vib(50);document.getElementById('togHaptic').classList.toggle('on',hapticOn);save()}
function updateToggleUI(){document.getElementById('togSound').classList.toggle('on',soundOn);document.getElementById('togVoice').classList.toggle('on',voiceOn);document.getElementById('togHaptic').classList.toggle('on',hapticOn)}
function resetProgress(){
  if(confirm('Reset ALL progress including Chalisa learning?')){
    ['tp','tp_trophies','tp_sessions','tp_mastered','tp_chalisa','tp_chalisa_streak','tp_chalisa_days'].forEach(k=>localStorage.removeItem(k));
    S={colors:0,balloons:0,animals:0,counting:0,shapes:0,memory:0};soundOn=true;voiceOn=true;hapticOn=true;masteredColors=[];masteredVerses=[];
    updateToggleUI();save();renderTrophies();popupMsg('Progress reset!')
  }
}

// ============================================================
// TROPHIES
// ============================================================
const TROPHIES=[
  {id:'first_star',name:'First Star',icon:'⭐'},
  {id:'ten_stars',name:'Star Collector',icon:'🌟'},
  {id:'ch_first',name:'First Chalisa Verse',icon:'🌺'},
  {id:'ch_five',name:'Five Verses',icon:'🌸'},
  {id:'ch_ten',name:'Ten Verses',icon:'🪷'},
  {id:'ch_all',name:'Full Chalisa Master',icon:'🙏'},
];
const earnedT=JSON.parse(localStorage.getItem('tp_trophies')||'[]');
function renderTrophies(){
  const g=document.getElementById('trophy-grid');g.innerHTML='';
  TROPHIES.forEach(t=>{
    const e=earnedT.includes(t.id);
    const card=document.createElement('div');
    card.className='trophy-card'+(e?' earned':'');
    card.innerHTML=`<div class="ticon">${t.icon}</div><div class="tname">${t.name}</div>`;
    g.appendChild(card);
  });
);
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded',()=>{
  load();updateStats();renderTrophies();
  if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js?v=5').catch(()=>{});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopBalloons()});
});
