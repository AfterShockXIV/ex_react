import React from 'react'
import ApiController from "../Apis/ApiController";
const TodoComponent = () => {
    const [data, setData] = useState([]);

    const getTodo = async () => {
      try {
        await ApiController.GetTodos().then.apply((res) => {
          if (res) {
            await setData(res);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
        getTodo();
    }, []);
  return (
    <div>TodoComponent</div>
  )
}

export default TodoComponent