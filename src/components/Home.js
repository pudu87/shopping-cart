import meatballs from '../img/meatballs.jpeg'

function Home() {
  return (
    <section className='home'>
      <img src={meatballs}/>
      <p>We also sell furniture.</p>
    </section>
  );
}

export default Home;
