import React from "react";
import ApiController from "../Apis/ApiController";
const Commentcomponent = () => {
    const [data, setData] = useState([]);

    const getComment = async () => {
      try {
        await ApiController.GetComments().then.apply((res) => {
          if (res) {
            await setData(res);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
        getComment();
    }, []);
  return <div>Commentcomponent</div>;
};

export default Commentcomponent;
