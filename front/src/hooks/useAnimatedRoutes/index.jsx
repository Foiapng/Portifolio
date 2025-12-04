import { useState, useEffect } from "react";

const useAnimateRoutes = () => {
    const [animationClass, setAnimationClass] = useState('route-enter')

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setAnimationClass('')
        }, 500)

        return () => {
            clearTimeout(timeoutId)
        }
    })

    return animationClass
}

export default useAnimateRoutes;