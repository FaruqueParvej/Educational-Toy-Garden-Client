const GallerySection = () => {
  return (
    <div>
      <div className="flex items-center flex-col border border-4 border-cyan-600 p-4 m-5 rounded-3xl">
        <h2 className="text-6xl text-pink-900 font-extrabold">Gallery Section</h2>
      </div>
      <div className="flex justify-center">
        <div className="h-96 carousel carousel-vertical rounded-box">
          <div className="carousel-item mx-auto h-full">
            <img src={"https://m.media-amazon.com/images/I/71HKW7kZ50L.jpg"} />
          </div>
          <div className="carousel-item h-full">
            <img
              src={
                "https://www.thesprucepets.com/thmb/GHiy6ZhC8_5zeRtMYh6hxZbNQEk=/fit-in/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/Outward-Hound-Nina-Ottosson-Brick-Puzzle-Toy-07406cb90fe147b6ad7d6a74022a014f.jpg"
              }
            />
          </div>
          <div className="carousel-item h-full">
            <img
              src={
                "https://ae01.alicdn.com/kf/HTB1abpExf9TBuNjy1zbq6xpepXaj.jpg"
              }
            />
          </div>
          <div className="carousel-item h-full">
            <img src={"https://storage.googleapis.com/loveable.appspot.com/blog/uploads/2023/04/16022951/Solar-System-Planetarium.jpg"} />
          </div>
          <div className="carousel-item h-full">
            <img src={"https://ae01.alicdn.com/kf/H683aa9da209e4a5a934179088f308659l.jpg"} />
          </div>
          <div className="carousel-item h-full">
            <img src={"https://ae01.alicdn.com/kf/Sea9c2a6d047b4414abbb0e323939e49dS.jpg"} />
          </div>
          <div className="carousel-item h-full">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOcwQvUXixDin5zrL0ADw5Wix7Gb5xCX9BwRxt1lBH_uuqH_esjT_vvPP650zdKVhv7M&usqp=CAU"} />
          </div>
        </div>
      </div>
      <p className="animate-bounce text-center text-2xl text-pink-900 ">Scroll on photos to view all the photos in th Gallery</p>
      
    </div>
  );
};

export default GallerySection;
