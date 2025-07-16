const sponsors = [
  { imgUrl: "pizzahut.png", Name: "Pizza Hut" },
  { imgUrl: "kfc.png", Name: "KFC" },
  { imgUrl: "bakerfresh.jpg", Name: "Baker's Fresh" },
  { imgUrl: "givemycert.png", Name: "GiveMyCertificate" },
  { imgUrl: "wafflicious.png", Name: "Wafflicious" },
  { imgUrl: "balaji.png", Name: "Balaji Waffers" },
  { imgUrl: "easydiner.png", Name: "EasyDiner" },
];

const SponsorMarquee = () => {
  return (
    <div className="relative flex overflow-x-hidden mb-20 ms:mt-8 tb:mt-10 xl:mt-12">
      <div className="animate-marquee whitespace-nowrap flex ms:gap-8 sm:gap-12 tb:gab-16 lg:gap-24 xl:gap-36">
        {[...sponsors, ...sponsors].map((sponsor, i) => (
          <SponsorCard key={i} imgUrl={sponsor.imgUrl} Name={sponsor.Name} />
        ))}
      </div>
    </div>
  );
};

const SponsorCard = ({ imgUrl, Name }) => {
  return (
    <div className="w-max">
      <img
        src={imgUrl}
        alt={ Name }
        className="object-cover mx-auto rounded-full ms:w-20 ms:h-20 sm:w-24 sm:h-24 ff:w-30 ff:h-30 tb:w-36 tb:h-36 lg:w-48 lg:h-48 xl:w-56 xl:h-56 dxl:w-64 dxl:h-64 txl:w-72 txl:h-72 aspect-square ms:mb-2 xl:mb-4 dxl:mb-6"
      />
      <div className="flex font-bold text-center justify-evenly ms:text-xs ff:text-md sm:text-lg xl:text-xl dxl:text-2xl">
        {Name}
      </div>
    </div>
  )
}

export default SponsorMarquee;

