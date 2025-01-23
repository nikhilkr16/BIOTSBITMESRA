import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { TeamCardBig, TeamCardSmall } from '../components/TeamCard'

function Team() {
  return (
    <div id="team">
      <Navbar />
      <div className=" w-full overflow-hidden text-center ms:my-6 tb:my-8 lg:my-10">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
          EXECUTIVE BODY
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>

      <div className="w-[90%] mx-auto ms:p-2 sm:p-3 tb:p-4 ms:grid ms:grid-cols-2 tb:flex ms:gap-4 sm:gap-6 tb:gap-8 justify-evenly ms:mb-6 tb:mb-8">
        <TeamCardBig
          src={'AditiSingh_President.png'}
          position={'PRESIDENT'}
          name={'Aditi Singh'}
          link={'https://www.linkedin.com/in/aditi-singh-3a5ba524b/'}
        />
        <TeamCardBig
          src={'CHINMAYPATADE_JointPresident.jpg'}
          position={'JOINT PRESIDENT'}
          name={'Chinmay Patade'}
          link={'https://www.linkedin.com/in/chinmay-patade-9a9b06222/'}
        />
      </div>
      <div className="w-[90%] mx-auto ms:p-2 sm:p-3 tb:p-4 grid ms:grid-cols-2 tb:grid-cols-3 lg:grid-cols-4 ms:gap-4 sm:gap-6 tb:gap-8 justify-evenly ms:mb-6 tb:mb-8">
        <TeamCardSmall
          src={'AkshatRaj_VicePres.png'}
          position={'VICE PRESIDENT'}
          name={'Akshat Raj Sharma'}
          link={'https://www.linkedin.com/in/akshat-raj-sharma-245714248/'}
        />
        <TeamCardSmall
          src={'AyushKumar_VicePres.jpg'}
          position={'VICE PRESIDENT'}
          name={'Ayush Kumar'}
          link={'https://www.linkedin.com/in/ayushsinghhrcc-1b22751b7/'}
        />
        <TeamCardSmall
          src={'Abhinav_EventsHead.jpg'}
          position={'EVENT HEAD'}
          name={'Abhinav Dashwant'}
          link={'https://www.linkedin.com/in/abhinav-dashwant-2b6ba424b/'}
        />
        <TeamCardSmall
          src={'LakshyaMishra_CreativeHead.jpg'}
          position={'CREATIVE HEAD'}
          name={'Lakshya Mishra'}
        />
        <TeamCardSmall
          src={'avatar.jpg'}
          position={'CONTENT HEAD'}
          name={'Shreya Suman'}
        />
        <TeamCardSmall
          src={'AryanRajsaxena_TechHead.jpg'}
          position={'TECHNICAL HEAD'}
          name={'Aryan Raj'}
          link={'https://www.linkedin.com/in/aryan-raj-7b1100227/'}
        />
        <TeamCardSmall
          src={'Aditi_PublicityHead.jpg'}
          position={'PUBLICITY HEAD'}
          name={'Aditi'}
          link={'https://www.linkedin.com/in/aditi-b19829225/'}
        />
      </div>
      <div className="w-[90%] mx-auto ms:p-2 sm:p-3 tb:p-4 grid ms:grid-cols-2 tb:grid-cols-3 lg:grid-cols-4 ms:gap-4 sm:gap-6 tb:gap-8 justify-evenly ms:mb-6 tb:mb-8">
        <TeamCardSmall
          src={'RitikRaj_GenSec.jpg'}
          position={'GENERAL SECRETARY'}
          name={'Ritik Raj'}
          link={'http://linkedin.com/in/ritikraj0005'}
        />
        <TeamCardSmall
          src={'EkikaKumar_JointSec.jpg'}
          position={'JOINT SECRETARY'}
          name={'Ekika Kumari'}
          link={'https://www.linkedin.com/in/ekika-kumar/'}
        />
        <TeamCardSmall
          src={'AdityaIngale_Treasurer.jpg'}
          position={'TREASURER'}
          name={'Aditya Ingale'}
          link={'https://www.linkedin.com/in/aditya-ingale-4a84441b0/'}
        />
        <TeamCardSmall
          src={'KomalRani_EventCoord.jpg'}
          position={'EVENT COORDINATOR'}
          name={'Komal Rani'}
          link={'https://www.linkedin.com/in/komal-rani-3892422a9/'}
        />
        <TeamCardSmall
          src={'HarshVerma_CreativeCoord.jpg'}
          position={'CREATIVE COORDINATOR'}
          name={'Harsh Verma'}
        />
        <TeamCardSmall
          src={'MuaazMurshid_CreativeCoord.jpeg'}
          position={'CREATIVE COORDINATOR'}
          name={'Muaaz Murshid'}
        />
        <TeamCardSmall
          src={'NikhilKumar_TechCord.png'}
          position={'TECHNICAL COORDINATOR'}
          name={'Nikhil Kumar'}
          link={'https://www.linkedin.com/in/nikhilkr16/'}
        />
        <TeamCardSmall
          src={'AdyaPandey_ExeMember.jpg'}
          position={'EXECUTIVE MEMBER'}
          name={'Adya Pandey'}
          link={'https://www.linkedin.com/in/adya-pandey-264789286/'}
        />
        <TeamCardSmall
          src={'RishabhRaj_ExeMember.jpg'}
          position={'EXECUTIVE MEMBER'}
          name={'Rishabh Raj'}
          link={'https://www.linkedin.com/in/rishabhraj659/'}
        />
        <TeamCardSmall
          src={'SaketKumar_ExeMember.jpg'}
          position={'EXECUTIVE MEMBER'}
          name={'Saket Kumar'}
        />
        <TeamCardSmall
          src={'avatar.png'}
          position={'PUBLICITY COORDINATOR'}
          name={'Archeet Bandhul'}
          link={'https://www.linkedin.com/in/archeet-bandhul-7816b32b1/'}
        />
        <TeamCardSmall
          src={'SanjanaKumari_ExeMember.jpg'}
          position={'EXECUTIVE MEMBER'}
          name={'Sanjana Kumari'}
        />
        <TeamCardSmall
          src={'avatar.jpg'}
          position={'EXECUTIVE MEMBER'}
          name={'Priyanka Sharma'}
        />
        <TeamCardSmall
          src={'avatar.png'}
          position={'EXECUTIVE MEMBER'}
          name={'Swarnim Raj'}
        />
        <TeamCardSmall
          src={'avatar.jpg'}
          position={'EXECUTIVE MEMBER'}
          name={'Lara Brijkaushly'}
        />
        <TeamCardSmall
          src={'avatar.jpg'}
          position={'EXECUTIVE MEMBER'}
          name={'Divya Barnwal'}
        />
        <TeamCardSmall
          src={'avatar.png'}
          position={'EXECUTIVE MEMBER'}
          name={'Aviroop Shi'}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Team
