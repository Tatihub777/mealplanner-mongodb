import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
 export const MyMeals = ({text, updatingInput, deleteMeal}) => {
    
    return (
        <div>
<p>{text}</p>

<CiEdit onClick={updatingInput}></CiEdit>
< MdDelete onClick={deleteMeal}></MdDelete>
        </div>
    )
}
