import PropTypes from "prop-types";

export function SectionLabel({ title, description, titleColor = 'primaryColor', descriptionColor = 'gray-700' }) {
    return (
        <div className={'space-y-1 py-10'}>
            <h2 className={`text-4xl font-bold text-${titleColor}`}> {title} </h2>
            <p className={`text-sm text-${descriptionColor}`}> {description} </p>
        </div>
    )
}

SectionLabel.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    titleColor: PropTypes.string,
    descriptionColor: PropTypes.string
}