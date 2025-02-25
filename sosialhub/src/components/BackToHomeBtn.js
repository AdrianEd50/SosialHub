import { useNavigate } from "react-router-dom";

const BackToHomeButton = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate("/")} className="back-home-btn">
            Tilbake til Hjem
        </button>
    );
};

export default BackToHomeButton;