import PropTypes from 'prop-types';
import bgImage from '../../assets/background.jpg';

export default function FullScreenBackground({ children }) {
    return (
        <div className="bg-cover bg-center h-screen w-full flex items-center justify-center relative"
             style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60"></div>
            <div className="relative z-10 container mx-auto px-4">
                {children}
            </div>
        </div>
    );
}

FullScreenBackground.propTypes = {
    children: PropTypes.node
};
