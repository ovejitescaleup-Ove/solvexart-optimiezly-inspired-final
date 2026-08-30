"use client";
import {motion} from 'framer-motion';
import {ArrowUpRight,ArrowRight,Search,BarChart3,Target,LineChart,Sparkles,Check,MousePointer2,Globe2,BrainCircuit} from 'lucide-react';
import SiteShell from '../components/SiteShell';
import {services} from '../lib/data';
import {useEffect,useState} from 'react';

const serviceIcons=[MousePointer2,Search,Globe2,BarChart3,LineChart,BrainCircuit];
const defaultContent={
 headline:'TURN MARKETING INTO MOMENTUM.',
 desc:'Solvexart brings strategy, paid media, search, creative and measurement together so your marketing works as one connected growth system.',
 primary:'Build your growth plan', secondary:'Explore our services'
};
const paths=[
 ['01','ATTRACT','Put your brand in front of the right people with paid media, search and content.'],
 ['02','CONVERT','Turn attention into action with stronger landing pages, offers, journeys and CRO.'],
 ['03','OPTIMIZE','Use clean data, experimentation and reporting to keep improving what works.']
];

export default function Home(){
 const [content,setContent]=useState(defaultContent);
 useEffect(()=>{try{const c=JSON.parse(localStorage.getItem('solvexart-content')||'null');if(c)setContent({...defaultContent,...c})}catch{}},[]);
 return <SiteShell>
  <section className="opt-hero">
   <div className="wrap opt-hero-grid">
    <div className="opt-hero-copy">
      <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="eyebrow">Digital marketing, built for growth</motion.p>
      <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{delay:.08}}>{content.headline}</motion.h1>
      <motion.p initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{delay:.15}} className="opt-hero-desc">{content.desc}</motion.p>
      <div className="opt-actions"><a className="btn btn-dark" href="/contact">{content.primary}<ArrowUpRight size={18}/></a><a className="text-link" href="/services">{content.secondary}<ArrowRight size={17}/></a></div>
    </div>
    <div className="opt-hero-art" aria-hidden="true">
      <div className="shape shape-one"/><div className="shape shape-two"/><div className="shape shape-three"/>
      <div className="art-panel panel-main"><span>GROWTH SIGNALS</span><strong>CONNECTED</strong><div className="mini-bars">{[38,58,47,76,64,88,72,96].map((x,i)=><i key={i} style={{height:`${x}%`}}/>)}</div><small>Strategy → media → experience → measurement</small></div>
      <div className="art-chip chip-a"><Target size={16}/> Better targeting</div>
      <div className="art-chip chip-b"><BarChart3 size={16}/> Better decisions</div>
    </div>
   </div>
  </section>

  <section className="brand-strip"><div className="wrap brand-strip-inner"><span>ONE PARTNER ACROSS THE GROWTH JOURNEY</span><div><b>PAID MEDIA</b><b>SEO</b><b>CREATIVE</b><b>ANALYTICS</b><b>CRO</b><b>WEB</b></div></div></section>

  <section className="section wrap">
   <div className="split-heading"><div><p className="eyebrow">Everything connected</p><h2 className="section-title">More than channels.<br/><em>A growth system.</em></h2></div><p>Strong marketing is not a collection of disconnected tactics. We connect acquisition, experience and measurement around the outcomes that matter to your business.</p></div>
   <div className="service-grid">{services.map((s,i)=>{const Icon=serviceIcons[i]||Sparkles;return <motion.a whileHover={{y:-6}} key={s.slug} href={'/services/'+s.slug} className="service-card opt-service-card"><div className="icon-box"><Icon size={20}/></div><div><span className="card-index">0{i+1}</span><h3>{s.title}</h3><p>{s.description}</p></div><span className="card-arrow"><ArrowUpRight size={18}/></span></motion.a>})}</div>
  </section>

  <section className="dark-section opt-dark">
   <div className="wrap">
    <div className="split-heading dark-copy"><div><p className="eyebrow">Three moves to growth</p><h2 className="section-title">Find demand.<br/>Create action.<br/><em>Keep improving.</em></h2></div><p>We help you build a repeatable system instead of chasing the next marketing trend.</p></div>
    <div className="growth-paths">{paths.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowRight size={18}/></article>)}</div>
   </div>
  </section>

  <section className="section wrap">
   <div className="proof-layout"><div><p className="eyebrow">Why Solvexart</p><h2 className="section-title">Make every marketing decision <em>count.</em></h2><p className="large-copy">From the first click to the final conversion, we make the important signals easier to see and act on.</p><a className="btn btn-light" href="/how-we-work">See how we work <ArrowRight size={17}/></a></div><div className="proof-list">{['Clear measurement before scaling','Strategy tied to commercial goals','Creative and media working together','Continuous testing and optimization','Straightforward reporting and communication'].map(x=><div key={x}><Check size={18}/><span>{x}</span></div>)}</div></div>
  </section>

  <section className="statement-section"><div className="wrap"><p className="eyebrow">Built for ambitious teams</p><h2>GOOD MARKETING SHOULD FEEL LESS LIKE GUESSWORK AND MORE LIKE <em>MOMENTUM.</em></h2><a className="btn btn-dark" href="/contact">Let's talk <ArrowUpRight size={18}/></a></div></section>
 </SiteShell>
}
