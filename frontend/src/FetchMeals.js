import axios from 'axios';

const getAllMeals = (setMeal) => {
    axios.get("https://meal-plan-zkhb.onrender.com")
    .then(({data}) => {console.log(data)
        setMeal(data);
    })
}
const addMeal = (title, setTitle, setMeal) => {
    axios.post(`https://meal-plan-zkhb.onrender.com/saveMeals`, {title})
    .then((data)=> {
        console.log(data)
        setTitle("")
        getAllMeals(setMeal)
    })
    
}


const deleteMeal = (_id, setMeal) => {
    axios.post(`https://meal-plan-zkhb.onrender.com/deleteMeal`, {_id})
    .then((data)=> {
        console.log(data)
        getAllMeals(setMeal)

    })
}

const editMeal = (mealId, title, setMeal, setTitle, setEditing) => {
    axios.post(`https://meal-plan-zkhb.onrender.com/editMeal`, {_id: mealId, title })
    .then((data)=> {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllMeals(setMeal)

    })
}
export {getAllMeals, addMeal, deleteMeal, editMeal};