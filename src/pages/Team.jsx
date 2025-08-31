import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { TeamCardBig, TeamCardSmall } from '../components/TeamCard'

function Team() {
  return (
    <div id="team">
      <Navbar />
      <div className=" w-full overflow-hidden text-center ms:my-6 tb:my-8 lg:my-10">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold text-gray-800 relative inline-block">
          EXECUTIVE BODY
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>

        <div className="ms:w-[55%] ff:w-[40%] tb:w-[90%] lg:w-[90%] mx-auto ms:p-2 sm:p-3 tb:p-4 ms:grid ms:grid-cols-1 lg:grid-cols-2 tb:flex ms:gap-4 sm:gap-6 tb:gap-8 justify-evenly ms:mb-6 tb:mb-8">
        <TeamCardBig
          src={'fac_adv.jpeg'}
          position={'FACULTY ADVISOR'}
          name={'Dr. Dinesh Prasad'}
          link={''}
        />
      </div>

      <div className="w-[90%] mx-auto ms:p-2 sm:p-3 tb:p-4 ms:grid ms:grid-cols-2 tb:flex ms:gap-4 sm:gap-6 tb:gap-8 justify-evenly ms:mb-6 tb:mb-8">
        <TeamCardBig
          src={'pres.png'}
          position={'PRESIDENT'}
          name={'Ritik Raj'}
        />
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

      <div className="w-[90%] mx-auto ms:p-2 sm:p-3 tb:p-4 grid ms:grid-cols-2 tb:grid-cols-3 lg:grid-cols-4 ms:gap-4 sm:gap-6 tb:gap-8 justify-evenly ms:mb-6 tb:mb-8">
        <TeamCardSmall src={'dir_of_med_dev.jpeg'} position={'DIRECTOR OF MEDIA DEVELOPMENT'} name={'Muaaz Murshid'} />
        <TeamCardSmall src={'AdyaPandey_ExeMember.jpg'} position={'DIRECTOR OF EVENT & STRATEGIC PLANNING'} name={'Adya Pandey'} />
        <TeamCardSmall src={'dir_of_cont_dev.jpg'} position={'DIRECTOR OF CONTENT DEVELOPMENT'} name={'Sanjana Kumari'} />
        <TeamCardSmall src={'NikhilKumar_TechCord.png'} position={'DIRECTOR OF TECHNOLOGY & WEB PRESENCE'} name={'Nikhil Kumar'} />
        <TeamCardSmall src={'dir_of_comm_and_pub_rel.jpg'} position={'DIRECTOR OF COMMUNICATIONS & PUBLIC RELATIONS'} name={'Divya Barnwal'} />
      </div>

      <div className="w-[90%] mx-auto ms:p-2 sm:p-3 tb:p-4 grid ms:grid-cols-2 tb:grid-cols-3 lg:grid-cols-4 ms:gap-4 sm:gap-6 tb:gap-8 justify-evenly ms:mb-6 tb:mb-8">
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
