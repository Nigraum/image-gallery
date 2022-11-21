import { useEffect, useState } from "react";
import Image from "./Image";

export default function GetImages() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
      const data = await response.json()
      setImages(data)
    }

    fetchImages()
  }, [])

  return (
    <>
      {!images ?
      <h2 className="flex items-center justify-center h-screen">
        Loading...
      </h2> :
        <section>
          <h1>Recommended for you</h1>

          <div>
            {images.map ((image) => (
              <Image key={image.id} {...image} />
            ))}
          </div>
        </section>
      }
    </>
  )
}