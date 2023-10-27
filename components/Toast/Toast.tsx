"use client"
import { useToastContext } from '@/context/toastContext';

function Toast() {
    const { toastMessage, toastColor } = useToastContext();

    return (
        <>
            {
                toastMessage && (
                    <div className="toast toast-start ">
                        <div className={`alert ${toastColor}`}>
                            <span>{toastMessage}</span>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Toast