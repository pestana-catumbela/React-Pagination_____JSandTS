import { useState } from "react";

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export default function usePhotos (pageLimit: number){
    const [photos, setPhotos] = useState<Photo[]>([])

    function fetchPhotos (page: number){
        const virtualPage = ((page - 1) * pageLimit) <= 0 ? 0 : ((page - 1) * pageLimit)

        fetch(`https://jsonplaceholder.typicode.com/photos?_start=${virtualPage}&_limit=${pageLimit}`)
        .then(res => res.json())
        .then(data => setPhotos(data))
        .catch(window.alert)
    }

    return{
        fetchPhotos,
        photos
    }
}