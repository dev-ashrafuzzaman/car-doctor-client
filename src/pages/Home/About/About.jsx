import aboutImg1 from '../../../assets/images/about_us/person.jpg'
import aboutImg2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                    <img src={aboutImg1} className=" w-3/4 rounded-lg " />
                    <img src={aboutImg2} className="w-1/2 absolute right-5 top-1/2 rounded-lg  border-8 border-white" />
                    </div>
                    <div className='lg:w-1/2 space-y-5'>
                        <h2 className='text-orange-500 font-bold text-2xl '>About Us</h2>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-warning">Get More info</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;