import React from 'react'
import ApiController from "../Apis/ApiController";
const AlbumComponent = () => {
    const [data, setData] = useState([]);

    const getAlbums = async () => {
      try {
        await ApiController.GetAlbums().then.apply((res) => {
          if (res) {
            await setData(res);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
        getAlbums();
    }, []);
  
    
  return (
    <div>AlbumComponent</div>
  )
}

export default AlbumComponent