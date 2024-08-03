import headshot from '../assets/headshot.jpg';

const About = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row h-full bg-gold md:mt-16 lg:mt-36">
        <div className="w-auto md:w-1/2 h-full my-8 md:p-24 text-center">
           <img className='w-full max-w-full my-auto ' src={headshot} />
           
        </div>
        <div className="w-auto p-16 lg:p-24 text-left text-white flex-1 lg:px-16">
          <h1 className='my-8'>ABOUT</h1>
          <p className='mb-4 text-2xl'>
            <span className='text-4xl'>Brian Burchill</span>, Founder of Klarity is a native of New York. He
            embarked on his restaurant career more than 37 years ago in various
            restaurants and roles throughout NYC, starting from dishwasher to
            managing/overseeing Nightclubs. His true passion for the restaurant
            industry was unveiled during his time studying theatre at the
            American Academy of Dramatic Arts in Manhattan. Over the course of
            eight years, he gained valuable experience working under Eli Zabar,
            a prominent figure in New York&#39;s restaurant scene. Brian started
            as a server and quickly ascended to the role of General Manager,
            overseeing operations at two of Zabar&#39;s establishments
            simultaneously. This exposure sparked his enthusiasm for the
            restaurant field, and he played a pivotal role in launching and
            managing several of Zabar&#39;s ventures, shaping his approach to
            running successful restaurants through what he terms &quot;The
            Performance,&quot; drawing on his theatrical background. This
            concept has been fundamental to his achievements.
          </p>
          <p className='mb-4 text-2xl'>
            Transitioning into entrepreneurship, Brian created &amp; co-founded
            Famous Toastery a breakfast and lunch restaurant outside Charlotte,
            NC. His entrepreneurial acumen led to the establishment of a
            franchise system that expanded to encompass 40 Famous Toastery
            restaurants. In each establishment, Brian served as Chief Operating
            Officer, Chief Culture Officer, consultant, director, and mentor,
            guiding them towards excellence. Renowned for his goal-oriented
            strategic leadership and innovative vision, Brian boasts a proven
            track record in managing diverse products from conception to market
            launch and profitable commercialization.
          </p>
          <p className='mb-4 text-2xl'>
            Brian&#39;s entrepreneurial spirit is characterized by an
            open-minded approach and readiness to tackle challenges with
            patience and perseverance. Noteworthy is his keen ability to discern
            and rectify seemingly minor day-to-day practices that significantly
            impact operational success.
          </p>
        </div>
        
      </div>
    </>
  );
};

export default About;
