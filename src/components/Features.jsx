import featuredImg from '../assets/card.png'

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl max-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="lg:w-1/4">
                <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3 ">Why we are better than others</h3>
                <p className="text-base text-tartiary">A simple paragraph is comparised of three major components. the first sentence, which is often a declarative sentence, is called the "topic sentence"</p>
            </div>
            {/* featured cards */}
            <div className="w-full lg:w-3/4">
                <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300'>
                    <div>
                        <img src={featuredImg} alt="" />
                        <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Conventient Study Schedule</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features