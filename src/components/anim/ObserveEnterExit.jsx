import { useEffect, useRef } from "react"

export default function ObserveEnterExit({ children, onExit, onEnter, threshold = 0.5 }) {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                onEnter?.()
            } else {
                onExit?.()
            }
        }, { threshold })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref}>
            {children}
        </div>
    )
}