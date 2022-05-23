import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = ( category ) => {

    const [state, setsState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                setTimeout( () => {

                    setsState({
                        data: imgs,
                        loading: false
                    })

                },3000);

            })

    },[ category ])

    return state; // { data:[], loading: true };
}
