import logos from '../assets/Logos.png'



const Contactpage = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-center py-10">Contact Us</p>
      <section>
        <section className="bg-[#5937E0] rounded-2xl p-5 text-white">
          <p>Book your car</p><br />
        </section>
        <br />
      </section>
      <br />
      <br />
      <img src={logos} className="m-auto" alt="" />
    </div>
  );
}

export default Contactpage