import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Slide({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, translateX: 90 },
                visible: { opacity: 1, translateX: 0 },
            }}
            transition={{
                type: "spring",
                duration: 0.2,
                damping: 8,
                delay: delay,
                stiffness: 100,
            }}
            initial="hidden"
            animate={controls}
            className={className}
        >
            {children}
        </motion.div>
    );
}
