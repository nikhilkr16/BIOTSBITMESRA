function Map() {
  return (
    <div className="overflow-hidden max-w-full w-full ms:h-[18rem] tb:h-[20rem] lg:h-[24rem]">
      <div id="my-map-canvas" className="h-full w-full max-w-full">
        <iframe
          className="h-full w-full border-0"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=BIT+MESRa&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
