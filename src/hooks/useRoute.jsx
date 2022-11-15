import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'


export default function useRoute() {


    const params = useParams();
    const navigate = useNavigate();
    const [search, setSearch] = useSearchParams();


    return { params, navigate, searchParams: [search, setSearch] }
}
