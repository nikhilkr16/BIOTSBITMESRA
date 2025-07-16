const Speakers = [
  {
    id: 1,
    imgUrl: "speaker_abhishek_choudhary.jpg",
    Name: "Abhishek Choudhary",
    Description: [
      "Director, Nanobiz India Pvt. Ltd",
      "India Patent (IN/PA-1578)",
      "Vice President(Strategy),",
      "India Japan Business Council"
    ]
  },
  {
    id: 2,
    imgUrl: "speaker_nitesh_prasad.jpg",
    Name: "Nitesh Prashad",
    Description: [
      "@corporate.wala.youtuber",
      "Instagram: 581K Followers",
      "Career Guidance Expert, Academic Coach",
      "Former PwC & Microsoft Professional"
    ]
  },
  {
    id: 3,
    imgUrl: "speaker_rahul_thakur.jpg",
    Name: "Rahul Thakur",
    Description: [
      "Researcher at Upenn",
      "NIIMBL",
      "Rutgers University, USA"
    ]
  },
  {
    id: 4,
    imgUrl: "speaker_ishita.jpg",
    Name: "Ishita Shreshtha",
    Description: [
      "PhD student at Toronto Metropolitan University",
      "iBEST Trainee at University Health Network"
    ]
  },
]

const SpeakerSection = () => {
  return (
    <div className="flex justify-evenly mt-10">
      <div className="ms:grid ms:grid-cols-1 tb:grid-cols-2 xl:flex xl:justify-evenly">
        { Speakers.map((speaker) => {
          return (
            <div id={speaker.id}>
              <Speaker imgUrl={speaker.imgUrl} Name={speaker.Name} Description={speaker.Description} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Speaker = ({ imgUrl, Name, Description }) => {
  return (
    <div className="tb:mx-10 ms:mb-8 xl:mb-10 dxl:mb-6">
      <img
        src={imgUrl}
        alt={ Name }
        className="mx-auto ms:w-56 ms:h-56 lg:w-48 lg:h-48 xl:w-56 xl:h-56 dxl:w-64 dxl:h-64 txl:w-72 txl:h-72 aspect-square rounded-full object-cover ms:mb-2 xl:mb-4 dxl:mb-6"
      />
      <div className="flex justify-evenly text-center font-bold ms:text-md ff:text-lg xl:text-xl dxl:text-2xl">
        {Name}
      </div>
      {
        Description.map((text)=>{
          return (
            <div className="flex justify-evenly text-center text-bold ms:text-sm tb:text-md dxl:text-lg txl:text-xl">
              {text}
            </div>
          )
        })
      }

    </div>
 
  )
}

export default SpeakerSection;
