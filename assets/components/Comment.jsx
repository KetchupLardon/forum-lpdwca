import React, { useEffect } from "react";
import { usePaginatedFetch } from "../utils/hook";

export const Comments = () => {
    const {items: users, load, loading} = usePaginatedFetch("/api/users");

    useEffect(() => {
        load()
    }, []);

    return <div>
        {loading && "Chargement..."}
        {JSON.stringify(users)}
    </div>
};