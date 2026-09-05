import {Menu,Search,ShoppingBag,X} from 'lucide-react'
import {useState} from 'react'
import {Link,Outlet} from 'react-router-dom'
import {useStore} from '../store/Store'

export function Layout(){
  const{locale,setLocale,count}=useStore()
  const[open,setOpen]=useState(false)
  return <div className="min-h-screen bg-[#f6f4ee] text-[#191a17]">
    <header className="sticky top-0 z-30 border-b border-black/10 bg-[#f6f4ee]"><div className="mx-auto flex h-20 max-w-[1380px] items-center px-4 md:px-10"><button aria-label="Menu" className="mr-3 md:hidden" onClick={()=>setOpen(true)}><Menu/></button><Link to="/" className="text-lg font-black tracking-[-.055em]">locale<span className="text-[#686c47]">cart</span></Link><nav className="ml-16 hidden gap-9 text-[12px] font-semibold uppercase tracking-[.12em] md:flex"><Link to="/">{locale==='en'?'Collection':'Coleção'}</Link><a href="#shop">{locale==='en'?'Objects':'Produtos'}</a><a href="#story">{locale==='en'?'About':'Sobre'}</a></nav><div className="ml-auto flex items-center gap-1"><button className="mr-2 border-b border-black/30 px-1 py-1 text-[11px] font-bold tracking-wide" onClick={()=>setLocale(locale==='en'?'pt':'en')}>{locale==='en'?'PT-BR':'EN'}</button><button aria-label="Search" className="icon-btn"><Search size={18}/></button><Link aria-label="Cart" className="icon-btn relative" to="/cart"><ShoppingBag size={18}/>{count>0&&<span className="cart-count">{count}</span>}</Link></div></div></header>
    {open&&<div className="fixed inset-0 z-50 bg-[#f6f4ee] p-6 md:hidden"><div className="flex justify-between"><b className="text-lg">localecart</b><button aria-label="Close" onClick={()=>setOpen(false)}><X/></button></div><nav className="serif mt-16 grid gap-7 text-3xl"><Link onClick={()=>setOpen(false)} to="/">{locale==='en'?'Collection':'Coleção'}</Link><a onClick={()=>setOpen(false)} href="#shop">{locale==='en'?'Objects':'Produtos'}</a><Link onClick={()=>setOpen(false)} to="/cart">{locale==='en'?'Cart':'Carrinho'} ({count})</Link></nav></div>}
    <main><Outlet/></main>
    <footer id="story" className="mt-24 border-t border-black/15"><div className="mx-auto grid max-w-[1380px] gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:px-10"><div><p className="text-lg font-black">localecart</p><p className="mt-3 max-w-sm text-sm leading-6 text-[#696b61]">{locale==='en'?'Independent objects chosen for usefulness, material honesty, and a long life.':'Objetos independentes escolhidos pela utilidade, materiais honestos e longa vida.'}</p></div><div><b className="text-[11px] uppercase tracking-[.14em]">{locale==='en'?'Browse':'Navegar'}</b><p className="mt-4 text-sm text-[#696b61]">Home · Tech · Wear</p></div><div><b className="text-[11px] uppercase tracking-[.14em]">{locale==='en'?'Dispatch':'Envio'}</b><p className="mt-4 text-sm leading-6 text-[#696b61]">{locale==='en'?'Orders leave our studio within two working days.':'Pedidos saem do nosso estúdio em até dois dias úteis.'}</p></div></div></footer>
  </div>
}
