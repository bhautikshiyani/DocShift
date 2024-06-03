import { IoCloseCircle , IoClose , IoCheckmarkCircle , IoInformationCircle } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useToast } from "../../hooks/useToast";


const toastTypes = {
    success: {
        icon: <IoCheckmarkCircle />,
        iconClass: "success-icon",
        progressBarClass: "success",
    },
    warning: {
        icon: <IoInformationCircle />,
        iconClass: "warning-icon",
        progressBarClass: "warning",
    },
    info: {
        icon: <IoInformationCircle />,
        iconClass: "info-icon",
        progressBarClass: "info",
    },
    error: {
        icon: <IoCloseCircle />,
        iconClass: "error-icon",
        progressBarClass: "error",
    },
};

const Toast = ({ message, type, id }) => {
    const { toastClass, progressBarClass, icon, iconClass } = toastTypes[type];
    const toast = useToast() // call useToast
    const progressRef = useRef(null);
    const timerID = useRef(null);
    const [dismissed, setDismissed] = useState(false);

    const handleDismiss = () => {
        setDismissed(true);
        setTimeout(() => {
            toast.remove(id);
        }, 400);
    };

    useEffect(() => {
        timerID.current = setTimeout(() => {
            handleDismiss();
        }, 4000);

        return () => {
            clearTimeout(timerID.current);
        };
    }, []);
    const handleMouseEnter = () => {
        clearTimeout(timerID.current);
        progressRef.current.style.animationPlayState = "paused";
    };
    const handleMouseLeave = () => {
        const remainingTime =
            (progressRef.current.offsetWidth /
                progressRef.current.parentElement.offsetWidth) *
            4000;

        progressRef.current.style.animationPlayState = "running";

        timerID.current = setTimeout(() => {
            handleDismiss();
        }, remainingTime);
    };

    return (
        <>
            <div
                className={`toast ${dismissed ? "toast-dismissed" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className={iconClass}>{icon}</span>
                <p className="toast-message">{message}</p>
                <button className="dismiss-btn" onClick={handleDismiss}>
                    <IoClose size={18} color="#aeb0d7" />
                </button>
                <div className="toast-progress">
                    <div
                        ref={progressRef}
                        className={`toast-progress-bar ${progressBarClass}`}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Toast;
