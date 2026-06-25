import type { Dish } from "../types/dish";

interface DishCardProps {
    dish: Dish;
    onToggle: (dishId: string, isPublished: boolean) => void;
}

const DishCard = ({ dish, onToggle }: DishCardProps) => {
    return (
        <div className="dish-card">
            <img
                src={dish.imageURL}
                alt={dish.dishName}
                className="dish-image"
            />

            <div className="dish-content">
                <h2>{dish.dishName}</h2>

                <p>Dish ID: {dish.dishId}</p>

                <p>
                    Status:
                    <strong>
                        {dish.isPublished ? " Published" : " Unpublished"}
                    </strong>
                </p>

                <button
                    onClick={() => onToggle(dish.dishId, !dish.isPublished)} >
                    {dish.isPublished ? "Unpublish" : "Publish"} 
                </button>
            </div>
        </div>
    );
};

export default DishCard;