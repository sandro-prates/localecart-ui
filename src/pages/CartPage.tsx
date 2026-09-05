import {ArrowRight,Minus,Plus,ShoppingBag,Trash2} from 'lucide-react'
import {Link} from 'react-router-dom'
import {products} from '../data/products'
import {useStore} from '../store/Store'

export function CartPage(){
  const{locale,cart,update,remove,subtotal}=useStore()
  if(!cart.length)return <div className="empty"><ShoppingBag size={38}/><h1>{locale==='en'?'Your cart is empty':'Seu carrinho está vazio'}</h1><p>{locale==='en'?'Discover useful things made to stay.':'Descubra objetos úteis feitos para durar.'}</p><Link className="btn-dark" to="/">{locale==='en'?'Explore products':'Explorar produtos'}</Link></div>
  return <div className="mx-auto max-w-7xl px-4 py-10 md:px-8"><p className="eyebrow">{locale==='en'?'Your selection':'Sua seleção'}</p><h1>{locale==='en'?'Shopping cart':'Carrinho'}</h1><div className="mt-9 grid gap-10 lg:grid-cols-[1fr_380px]"><div className="divide-y">{cart.map(item=>{
    const product=products.find(p=>p.id===item.productId)
    if(!product)return null
    return <article className="flex gap-4 py-6 first:pt-0" key={item.productId+item.variant}><Link to={`/product/${product.id}`} className="h-32 w-28 shrink-0 overflow-hidden rounded-xl" style={{background:product.color}}><img className="h-full w-full scale-[1.8] object-cover" style={{objectPosition:product.position}} src="/collection.png" alt={product.name}/></Link><div className="flex flex-1 flex-col"><div className="flex justify-between gap-4"><div><Link className="font-bold" to={`/product/${product.id}`}>{locale==='en'?product.name:product.namePt}</Link><p className="mt-1 text-sm text-slate-500">{item.variant}</p></div><b>${product.price*item.quantity}</b></div><div className="mt-auto flex items-center"><div className="quantity"><button aria-label="Decrease" onClick={()=>update(product.id,item.quantity-1)}><Minus/></button><span>{item.quantity}</span><button aria-label="Increase" onClick={()=>update(product.id,item.quantity+1)}><Plus/></button></div><button onClick={()=>remove(product.id)} className="ml-auto flex items-center gap-1 text-xs font-bold text-slate-500"><Trash2 size={15}/>{locale==='en'?'Remove':'Remover'}</button></div></div></article>
  })}</div><Summary subtotal={subtotal}/></div></div>
}

function Summary({subtotal}:{subtotal:number}){
  const{locale}=useStore()
  const shipping=subtotal>=100?0:8
  return <aside className="h-fit rounded-2xl bg-[#f1f2f4] p-6"><h2 className="text-xl">{locale==='en'?'Order summary':'Resumo do pedido'}</h2><div className="mt-6 space-y-4 text-sm"><p className="flex justify-between"><span>Subtotal</span><b>${subtotal.toFixed(2)}</b></p><p className="flex justify-between"><span>{locale==='en'?'Shipping':'Frete'}</span><b>{shipping===0?(locale==='en'?'Free':'Grátis'):'$8.00'}</b></p><p className="flex justify-between border-t pt-4 text-base"><b>Total</b><b>${(subtotal+shipping).toFixed(2)}</b></p></div><Link to="/checkout" className="btn-dark mt-6 w-full">{locale==='en'?'Continue to checkout':'Continuar'}<ArrowRight size={17}/></Link><p className="mt-4 text-center text-xs text-slate-500">{locale==='en'?'Taxes calculated at checkout':'Impostos calculados no checkout'}</p></aside>
}
