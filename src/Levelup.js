import levelup from './levelup.svg';
function Levelup () {

   return (
      <section className="container">
         <div className="left">
            <img src={levelup} alt="man-typing" className='levelup'/>
         </div>

         <div className="right">
            <h2>Level up that skill</h2>
            <p>Gain more knowledge and experience to reach a higher performance standard and become better and more proficient in that skill</p>

            <h2>Explore new skill</h2>
            <p>Get started with a new skill to widen the horizons digitally. Take advantage of this opportunity right away.</p>
            <button className='btn'>Get started</button>
         </div>
      </section>
   )
}
export default Levelup;