import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
 export const MyMeals = ({text}) => {
    return (
        <div>
<p>{text}</p>
<CiEdit></CiEdit>
< MdDelete></MdDelete>
        </div>
    )
}
