import PropTypes from "prop-types";
import { HiArrowRightCircle } from "react-icons/hi2";

export function ServiceCard({ icon, title, description }) {
    return (
        <div className={'w-full bg-primaryColor rounded-lg p-10 space-y-4 text-white shadow-lg'}>
            <div className={'text-6xl'}>
                { icon }
            </div>

            <div className={'text-xl font-bold'}>
                { title }
            </div>

            <div className={'text-md text-wrap'}>
                { description }
            </div>

            <div className={'text-tertiaryColor flex items-center space-x-4'}>
                <HiArrowRightCircle className={'text-3xl'} />
                <span className={'text-md'}>Learn more</span>
            </div>
        </div>
    )
}

ServiceCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}