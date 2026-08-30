"use client";
import {Menu,X,ArrowUpRight,ChevronDown} from 'lucide-react';
import {useState} from 'react';

const groups=[
  {title:'Growth services',links:[['Google Ads','/services/google-ads'],['SEO & Search','/services/seo'],['Social Media','/services/social-media'],['Web Development & CRO','/services/web-development']]},
  {title:'Measurement',links:[['Conversion Tracking','/services/conversion-tracking'],['Analytics','/services/analytics'],['How we work','/how-we-work']]}
];

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const [servicesOpen,setServicesOpen]=useState(false);
  return <header className="site-nav">
    <div className="wrap nav-inner">
      <a href="/" className="brand">SOLVEXART<span>.</span></a>
      <nav className="desktop-nav">
        <div className="nav-dropdown" onMouseEnter={()=>setServicesOpen(true)} onMouseLeave={()=>setServicesOpen(false)}>
          <button className="nav-link">Services <ChevronDown size={15}/></button>
          {servicesOpen&&<div className="mega-menu">
            {groups.map(g=><div key={g.title}><p className="mega-label">{g.title}</p>{g.links.map(([x,h])=><a key={h} href={h} className="mega-link">{x}<ArrowUpRight size={15}/></a>)}</div>)}
          </div>}
        </div>
        <a href="/case-studies" className="nav-link">Results</a>
        <a href="/how-we-work" className="nav-link">How we work</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/blog" className="nav-link">Resources</a>
      </nav>
      <a href="/contact" className="btn btn-dark nav-cta">Let's talk <ArrowUpRight size={16}/></a>
      <button aria-label="Open menu" className="mobile-menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<div className="mobile-panel"><div className="wrap mobile-links">
      <a href="/services" onClick={()=>setOpen(false)}>Services</a><a href="/case-studies" onClick={()=>setOpen(false)}>Results</a><a href="/how-we-work" onClick={()=>setOpen(false)}>How we work</a><a href="/about" onClick={()=>setOpen(false)}>About</a><a href="/blog" onClick={()=>setOpen(false)}>Resources</a>
      <a className="btn btn-dark justify-center" href="/contact" onClick={()=>setOpen(false)}>Let's talk <ArrowUpRight size={17}/></a>
    </div></div>}
  </header>
}