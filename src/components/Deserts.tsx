 import data from '../../data.json'
import DesertItem from './DesertItem'

function Deserts() {
  return (
   <section className='lg:basis-3/4'>
    <h1>Deserts</h1>
    <div className='grid grid-cols-1 grid-rows-9 gap-3 sm:grid-cols-2 sm:grid-rows-5 lg:grid-cols-3 lg:grid-rows-3'>
        {data.map(item => <DesertItem key={item.name} imgThumb={item.image.thumbnail} imgDesktop={item.image.desktop } imgMobile={item.image.mobile} category={item.category} name={item.name} price={item.price}/>)}
    </div>
   </section>
  )
}

export default Deserts