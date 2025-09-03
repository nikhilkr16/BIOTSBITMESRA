import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { TeamCardBig, TeamCardSmall } from '../components/TeamCard'

function Team() {
  return (
    <div id="team">
      <Navbar />
      <div className=" w-full overflow-hidden text-center ms:mt-6">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold text-gray-800 relative inline-block">
          FACULTY ADVISOR
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>

        <div className="w-[90%] max-w-xs mx-auto ms:p-2 sm:p-3 tb:p-4 flex justify-center ms:mb-6 tb:mb-8 lg:mb-10">
        <TeamCardBig
          src={'fac_adv.jpeg'}
          position={'FACULTY ADVISOR'}
          name={'Dr. Dinesh Prasad'}
          link={''}
        />
      </div>

      <div className=" w-full overflow-hidden text-center mt-6">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold text-gray-800 relative inline-block">
          LEADERSHIP BODY
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>

      <div className="w-[90%] max-w-xs mx-auto ms:p-2 sm:p-3 tb:p-4 flex justify-center ms:mb-2">
        <TeamCardBig
          src={'pres.png'}
          position={'PRESIDENT'}
          name={'Ritik Raj'}
        />
      </div>

      <div className="w-[90%] max-w-2xl mx-auto ms:p-2 sm:p-3 tb:p-4 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 ff:gap-32 ms:mb-2">
        <TeamCardBig
          src={'EkikaKumar_JointSec.jpg'}
          position={'VICE PRESIDENT'}
          name={'Ekika Kumar'}
        />
        <TeamCardBig
          src={'vice_pres.jpg'}
          position={'VICE PRESIDENT'}
          name={'Komal Rani'}
        />
      </div>

      <div className="w-[90%] max-w-6xl mx-auto ms:p-2 sm:p-3 tb:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10 md:gap-12 ms:mb-6 tb:mb-8 lg:mb-10">
        <TeamCardBig src={'dir_of_med_dev.jpeg'} position={'DIRECTOR OF MEDIA DEVELOPMENT'} name={'Muaaz Murshid'} size="large" />
        <TeamCardBig src={'AdyaPandey_ExeMember.jpg'} position={'DIRECTOR OF EVENT & STRATEGIC PLANNING'} name={'Adya Pandey'} size="large" />
        <TeamCardBig src={'dir_of_cont_dev.jpg'} position={'DIRECTOR OF CONTENT DEVELOPMENT'} name={'Sanjana Kumari'} size="large" />
        <TeamCardBig src={'NikhilKumar_TechCord.png'} position={'DIRECTOR OF TECHNOLOGY & WEB PRESENCE'} name={'Nikhil Kumar'} size="large" />
        <TeamCardBig src={'dir_of_comm_and_pub_rel.jpg'} position={'DIRECTOR OF COMMUNICATIONS & PUBLIC RELATIONS'} name={'Divya Barnwal'} size="large" />
      </div>

      <div className=" w-full overflow-hidden text-center ms:mt-6">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold text-gray-800 relative inline-block">
          EXECUTIVE BODY
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>

      <div className="w-[90%] max-w-6xl mx-auto ms:p-2 sm:p-3 tb:p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 ms:mb-6 tb:mb-8 lg:mb-10">
        <TeamCardSmall src={'gen_sec1.jpg'} position={'GENERAL SECRETARY'} name={'Prathama Barman'} />
        <TeamCardSmall src={'gen_sec2.jpg'} position={'GENERAL SECRETARY'} name={'Aman Sharma'} />
        <TeamCardSmall src={'joint_sec1.jpg'} position={'JOINT SECRETARY'} name={'Ronit Rawani'} />
        <TeamCardSmall src={'joint_sec2.jpg'} position={'JOINT SECRETARY'} name={'Sakshi Shyama'} />
        <TeamCardSmall src={'tres.jpg'} position={'TREASURER'} name={'Purushottam Kumar'} />
        <TeamCardSmall src={'joint_tres.jpg'} position={'JOINT TREASURER'} name={'Shubhayu Mukherjee'} />
        <TeamCardSmall src={'head_of_event_ops.jpg'} position={'HEAD OF EVENT OPERATIONS'} name={'Shruti Suman'} />
        <TeamCardSmall src={'head_of_creat_prod.jpg'} position={'HEAD OF CREATIVE PRODUCTION'} name={'Apurva Aryan'} />
        <TeamCardSmall src={'head_of_edit_cont.jpg'} position={'HEAD OF EDITORIAL CONTENT'} name={'Tanish Gupta'} />
        <TeamCardSmall src={'head_webm.jpg'} position={'HEAD WEBMASTER'} name={'Purnendu'} />
        <TeamCardSmall src={'head_of_spons_and_part.jpg'} position={'HEAD OF SPONSORSHIP AND PARTNERSHIPS'} name={'Kanak Khadikar'} />
        <TeamCardSmall src={'head_of_pub_eng.jpg'} position={'HEAD OF PUBLIC ENGAGEMENT'} name={'Komal Kumari'} />
      </div>
      <Footer />
    </div>
  )
}

export default Team
