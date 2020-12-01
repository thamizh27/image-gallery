import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Loader from "./components/Loader";
import NoResult from "./components/NoResult";
import Search from "./components/Search";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${query}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.hits);
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [query]);

  return (
    <div>
      <Header />
      <Search searchText={(text) => setQuery(text)} />
      {!isLoading && images.length === 0 && <NoResult />}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-7 sm:grid-cols-none sm:w-9/12 sm:m-auto sm:mt-5">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
