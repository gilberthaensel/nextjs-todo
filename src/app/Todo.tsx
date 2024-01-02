import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import React from "react";

async function getTodos() {
    const res = await prisma.todo.findMany();
    
    return res;
}

async function toggleTodo(id: string, complete: boolean) {
    "use server";

    await prisma.todo.update({
        data: {
            complete,
        },
        where: {
            id,
        },
    });
}

const Todo = async () => {
    const todos = await getTodos();

    return (
        <ul className="pl-4">
            {todos.map((todo) => {
                return (
                    <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
                );
            })}
        </ul>
    );
};

export default Todo;
