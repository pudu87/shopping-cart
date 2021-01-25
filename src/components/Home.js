import meatballs from '../img/meatballs.jpeg'
import iceCream from '../img/ice-cream.jpeg'
import daimCake from '../img/daim-cake.jpeg'

function Home() {
  return (
    <section className='home'>
      <div className='banner'>
        <div 
          className='image-1'
          style={ { backgroundImage: `url(${daimCake})` } } >
        </div>
        <div 
          className='image-2'
          style={ { backgroundImage: `url(${meatballs})` } } >
        </div>
        <div 
          className='image-3'
          style={ { backgroundImage: `url(${iceCream})` } } >
        </div>
        <p className='p-1'>
          Your favourite Scandinavian restaurant...
        </p>
        <p className='p-2'>
          ...now also sells furniture!
        </p>
        <p className='p-3'>
          Check our shop!
        </p>
      </div>
    </section>
  );
}

export default Home;
