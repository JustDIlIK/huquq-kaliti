import { useState, useCallback } from "react";

const usePopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const show = useCallback(() => setShowPopup(true), []);
    const hide = useCallback(() => setShowPopup(false), []);
    const toggle = useCallback(() => setShowPopup((prev) => !prev), []);

    const showPopupWithTimeout = useCallback((timeout ) => {
        show();
        setTimeout(hide, timeout);
    }, [show, hide]);

    return { showPopup, showPopupWithTimeout, show, hide, toggle };
}

export default usePopup;