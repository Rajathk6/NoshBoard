import { useEffect, useState } from "react";
import { getDishes } from "../api/api";
import type { Dish } from "../types/dish";

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

    useEffect(() => {
        fetchDishes();
    }, []);

    return (
        <div>
            <h1>Nosh Dashboard</h1>

            {dishes.map((dish) => (
                <div key={dish.id}>
                    {dish.dishName}
                </div>
            ))}
        </div>
    );
};

export default Dashboard;