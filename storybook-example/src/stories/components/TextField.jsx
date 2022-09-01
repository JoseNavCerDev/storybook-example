import './text-field.css';

import propTypes from  'prop-types';

export const TextField = ({ size, typeTextField, ...props }) => {
    return(
        <input
            type={'text'}
            className={`${typeTextField}` + ` ${size}` + ' general'}
            foc
            {...props}
        >
        </input>
    );
}

TextField.propTypes = {
    size: propTypes.oneOf(['s', 'm', 'l', 'fw']),
    typeTextField: propTypes.oneOf(['primary', 'secondary', 'dark'])
}

TextField.defaultProps = {
    size: 's',
    typeTextField: 'primary'
}


