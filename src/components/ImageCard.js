const ImageCard = ({ image }) => {
  return (
    <div className="max-w-sm m-auto shadow-lg rounded-lg overflow-hidden">
      <img src={image.webformatURL} alt="" />
      <div className="mx-3 pb-3">
        <h1 className="text-xl font-bold mt-3 sm:text-lg sm:font-semibold">
          Powered By {image.user}
        </h1>
        <div className="mt-4 flex justify-between">
          <span className="bg-yellow-100 rounded-full py-1 sm:px-2 md:px-3 sm:text-xs md:text-base">
            Likes: {image.likes}
          </span>
          <span className="bg-yellow-100 rounded-full py-1 sm:px-2 md:px-3 sm:text-xs md:text-base">
            Views: {image.views}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
