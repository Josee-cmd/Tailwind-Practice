import propTypes from 'prop-types'
export const Buttons = (props) => {
    const { label, style } = props;
    return (
        <button
            style={{
                width: '14rem',
                height:'2.9rem',
                fontSize: '16px',
                background: '#22C55E',
                color: '#fff',
                borderRadius: '10px',
                fontWeight: 'bold',
                ...style,
            }}
        >
            {label}
        </button>
    )
}
Buttons.propTypes = {
    label: propTypes.string.isRequired,
    style: propTypes.object

}