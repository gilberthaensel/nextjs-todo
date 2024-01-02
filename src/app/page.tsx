import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "./loading";
import Todo from "./Todo";

const page = async () => {
    return (
        <div>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">Todos</h1>
                <Link
                    className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-wthin:bg-slate-700 outline-none"
                    href="/new"
                >
                    Go to new
                </Link>
            </header>
            <Suspense fallback={<h1>Loading todo...</h1>}>
                <Todo />
            </Suspense>
        </div>
    );
};

export default page;
