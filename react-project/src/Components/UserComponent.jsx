import React from 'react'
import ApiController from "../Apis/ApiController";
const UserComponent = () => {
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
  return (
    <div>UserComponent</div>
  )
}

export default UserComponent