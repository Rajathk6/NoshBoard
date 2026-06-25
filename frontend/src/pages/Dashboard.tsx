import { useEffect, useState } from "react";
import { getDishes, updateDishes } from "../api/api";
import type { Dish } from "../types/dish";
import DishCard from "../component/dishcard";
import socket from "../socket/socket";

const Dashboard = () => {
    const [dishes, setDishes] = useState<Dish[]>([]);

    async function fetchDishes() {
        try {
            const response = await getDishes();
            setDishes(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleToggle(
    dishId: string,
    isPublished: boolean
) {
    try {
        await updateDishes(dishId, isPublished);
    } catch (error) {
        console.error(error);
    }
}
    useEffect(() => {

    socket.on("dish-updated", (updatedDish) => {

        setDishes((prev) =>
            prev.map((dish) =>
                dish.dishId === updatedDish.dishId
                    ? updatedDish
                    : dish
            )
        );

    });

    return () => {
        socket.off("dish-updated");
    };

}, []);

    useEffect(() => {
        fetchDishes();
    }, []);

    return (
    <div className="dashboard">
        <h1>Nosh Dashboard</h1>

        <div className="dish-grid">
            {dishes.map((dish) => (
                <DishCard
                    key={dish.id}
                    dish={dish}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    </div>
);
};

export default Dashboard;