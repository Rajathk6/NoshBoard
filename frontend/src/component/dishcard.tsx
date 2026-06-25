import type { Dish } from "../types/dish";

interface DishCardProps {
    dish: Dish;
}

const DishCard = ({ dish }: DishCardProps) => {
    return (
        <div className="dish-card">
            <img
                src={dish.imageUrl}
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

                <button>
                    {dish.isPublished ? "Unpublish" : "Publish"}
                </button>
            </div>
        </div>
    );
};

export default DishCard;