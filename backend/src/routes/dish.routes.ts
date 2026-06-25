// backend/src/routes/prisma.ts

import { Router } from "express";
import prisma from "../prisma";
import { io } from "../server";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

// GET /api/dishes
router.get("/dishes", async (req, res) => {
  try {
    const dishes = await prisma.dish.findMany({
      orderBy: {
        dishId: "asc",
      },
    });
    res.json(dishes);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Failed to fetch dishes" });
  }
});

// GET /api/dishes/:dishId
router.get("/dishes/:dishId", async (req, res) => {
  try {
    const { dishId } = req.params;
    const dish = await prisma.dish.findUnique({
      where: {
        dishId,
      },
    });
    if (!dish) {
      return res.status(404).json({ error: "Dish not found" });
    }
    res.json(dish);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Failed to fetch dish" });
  }
});

// POST /api/dishes
router.post("/dishes", async (req, res) => {
  try {
    const val = req.body;
    console.log(req.body);

    const format = val.map((dish: any) => ({
      dishName: dish.dishName,
      dishId: dish.dishId,
      imageURL: dish.imageURL,
      isPublished: dish.isPublished,
    }));

    const dish = await prisma.dish.createMany({
      data: format,
    });

    res.status(201).json(dish);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create dish" });
  }
});

// PATCH /api/dishes/:dishId
router.patch("/dishes/:dishId", async (req, res) => {
  try {
    const { dishId } = req.params;
    const { isPublished } = req.body;

    const updatedDish = await prisma.dish.update({
      where: {
        dishId,
      },
      data: {
        isPublished,
      },
    });

    io.emit("dish-updated", updatedDish);
    res.json(updatedDish);
  } catch (error) {
    console.error(error);
    res.status(204).json({ error: "Failed to update dish" });
  }
});

router.delete("/dishes/:dishId", async (req, res) => {
  try {
    const { dishId } = req.params;
    const deleteDish = await prisma.dish.delete({
      where: {
        dishId,
      },
    });
    res.json(deleteDish);
  } catch (error) {
    console.error(error);
    res.status(204).json({ error: "Failed to delete dish" });
  }
});

export default router;
