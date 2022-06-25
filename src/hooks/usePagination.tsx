import qs from 'query-string';
import { useEffect, useState } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

export default function usePagination (){
    const location = useLocation()
    const navigate = useNavigate()

    const [actualPage, setActualPage] = useState(
        getActualPge() || 1
    )

    function getActualPge(){
        const queryParams = qs.parse(location.search)
        const page = queryParams.page

        return page ? Number(page) : undefined
    }

    useEffect(() => {
        const queryParams = qs.parse(location.search)

        navigate.push({
            search: qs.stringify({
                ...queryParams,
                page: actualPage
            })
        })
    }, [actualPage])

    return{
        setActualPage,
        actualPage
    }
}