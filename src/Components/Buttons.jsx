import propTypes from 'prop-types'
export const Buttons = (props) => {
    const { label, style } = props;
    return (
        <button
            style={{
                width: '14rem',
                height:'2.9rem',
                fontSize: '20px',
                background: '#22C55E',
                color: '#fff',
                borderRadius: '10px',
                ...style,
            }}
        >
            {label}
        </button>
    )
}
Buttons.propTypes = {
    label: propTypes.string,
    style: propTypes.object

}