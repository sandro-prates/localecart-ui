import {Star} from 'lucide-react'
import {Link} from 'react-router-dom'
import type {Product} from '../data/products'
import {useStore} from '../store/Store'

export function ProductCard({product}:{product:Product}){
  const{locale}=useStore()
  return <Link to={`/product/${product.id}`} className="group block"><div className="relative aspect-[4/5] overflow-hidden border border-black/10" style={{background:product.color}}><img src="/collection.png" alt={locale==='en'?product.name:product.namePt} className="h-full w-full scale-[1.65] object-cover" style={{objectPosition:product.position}}/><span className="absolute bottom-0 left-0 bg-[#f6f4ee] px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#666b45]">{locale==='en'?product.category:product.categoryPt}</span></div><div className="mt-4 flex items-start border-t border-black/10 pt-3"><div><h3 className="serif text-xl leading-tight">{locale==='en'?product.name:product.namePt}</h3><p className="mt-2 flex items-center gap-1 text-xs text-[#66675f]"><Star size={11} fill="currentColor"/>{product.rating} · {locale==='en'?'Editor rated':'Seleção editorial'}</p></div><b className="ml-auto pl-5 text-sm">${product.price}</b></div></Link>
}
