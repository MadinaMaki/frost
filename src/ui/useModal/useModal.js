import {useState} from "react";

function useModal() {
    const [visible, setVisible] = useState(false);
    return [
        visible,
        () => setVisible(true),
        () => setVisible(false)
    ];
}

export default useModal;