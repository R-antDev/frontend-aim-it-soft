import PropTypes from 'prop-types';

export default function FullScreenBackground({children}) {
    return (
        <div className="bg-cover bg-center h-screen w-full flex items-center justify-center relative"
             style={{backgroundImage: "url('src/assets/bg-3.jpg')"}}>

            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-30"></div>

            <div className="relative z-10 container">
                {children}
            </div>
        </div>
    )
}

FullScreenBackground.propTypes = {
    children: PropTypes.node
}
