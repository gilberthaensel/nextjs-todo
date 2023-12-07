import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";
import React from "react";

async function getTodos() {
    return await prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
    "use server";

    await prisma.todo.update({
        data: {
            complete: true,
        },
        where: {
            id,
        },
    });
}

const page = async () => {
    const todos = await getTodos();

    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">Todos</h1>
                <Link
                    className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-wthin:bg-slate-700 outline-none"
                    href="/new"
                >
                    Go to new
                </Link>
            </header>
            <ul className="pl-4">
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            toggleTodo={toggleTodo}
                        />
                    );
                    return <li key={todo.id}>{todo.title}</li>;
                })}
            </ul>
        </>
    );
};

export default page;
