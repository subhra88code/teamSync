import { useQuery } from "@tanstack/react-query"
import { getAllEmployees } from "../api/employeeApis"
import { useState } from "react";

export let useEmployee = ()=>{
    const [page, setPage] = useState(1);
    let {data , isPending} = useQuery({
        queryKey: ["employees"],
        queryFn: getAllEmployees,
        staleTime: 100000,
    })


      const handlePageChange = (newPage) => {
    if (newPage < 1) return;

    if (newPage > data?.pagination?.totalPages) return;

    setPage(newPage);
  };

  let handleSearchFilters = (name, value) => {
    setPage(1);

    setFilters({ ...filters, [name]: value });
  };
    return {
        isPending,
        data,
        handlePageChange
    }
}