import {ArrowRight,Search,SlidersHorizontal} from 'lucide-react'
import {useMemo,useState} from 'react'
import {ProductCard} from '../components/ProductCard'
import {categories,products} from '../data/products'
import {useStore} from '../store/Store'

export function HomePage(){
  const{locale}=useStore()
  const[q,setQ]=useState('')
  const[category,setCategory]=useState('All')
  const[sort,setSort]=useState('featured')
  const visible=useMemo(()=>products.filter(p=>(category==='All'||p.category===category)&&(p.name+p.namePt).toLowerCase().includes(q.toLowerCase())).sort((a,b)=>sort==='low'?a.price-b.price:sort==='high'?b.price-a.price:b.rating-a.rating),[q,category,sort])
  return <><section className="mx-auto max-w-[1380px] px-4 pt-6 md:px-10 md:pt-10"><div className="hero"><img src="/collection.png" alt="Curated everyday products"/><div className="hero-copy"><p className="eyebrow">{locale==='en'?'Edition No. 04 · 2026':'Edição No. 04 · 2026'}</p><h1>{locale==='en'?'Objects for unhurried days.':'Objetos para dias sem pressa.'}</h1><p>{locale==='en'?'Six well-made essentials, selected for the rooms, routines, and journeys that shape a day.':'Seis essenciais bem-feitos para os espaços, rituais e trajetos que formam o dia.'}</p><a href="#shop" className="btn-dark">{locale==='en'?'View the edition':'Ver a edição'} <ArrowRight size={16}/></a></div></div></section>
    <section id="shop" className="mx-auto max-w-[1380px] px-4 py-20 md:px-10 md:py-28"><div className="mb-12 grid gap-6 border-b border-black/15 pb-9 md:grid-cols-[1.2fr_.8fr] md:items-end"><div><p className="eyebrow">{locale==='en'?'Current edit':'Seleção atual'}</p><h2 className="section-title">{locale==='en'?'Useful, with character.':'Úteis, com personalidade.'}</h2></div><p className="max-w-md text-sm leading-7 text-[#66685e]">{locale==='en'?'A concise collection for work, home, and the space between. Chosen individually; designed to live together.':'Uma coleção concisa para trabalho, casa e o espaço entre os dois. Escolhidos individualmente; pensados em conjunto.'}</p></div>
      <div className="mb-10 grid gap-4 border-b border-black/10 pb-5 lg:grid-cols-[1fr_auto_auto]"><label className="relative"><Search className="absolute left-1 top-3.5 text-[#66675f]" size={16}/><input className="field pl-7" value={q} onChange={e=>setQ(e.target.value)} placeholder={locale==='en'?'Search objects':'Buscar produtos'}/></label><div className="flex gap-3 overflow-x-auto">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={`chip ${category===c?'active':''}`}>{c}</button>)}</div><label className="relative"><SlidersHorizontal className="absolute left-1 top-3.5" size={15}/><select aria-label="Sort products" className="field pl-7 pr-7" value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">{locale==='en'?'Curator’s order':'Ordem da curadoria'}</option><option value="low">{locale==='en'?'Price, low first':'Menor preço'}</option><option value="high">{locale==='en'?'Price, high first':'Maior preço'}</option></select></label></div>
      <div className="product-grid grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{visible.map(p=><ProductCard key={p.id} product={p}/>)}</div>{!visible.length&&<div className="py-20 text-center"><b>{locale==='en'?'No objects match this search.':'Nenhum produto corresponde à busca.'}</b></div>}
    </section></>
}
