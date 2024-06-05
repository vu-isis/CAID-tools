import PropTypes from 'prop-types';
import { COLORS } from '../theme';

Justification.propTypes = {
    style: PropTypes.object,
    strokeWidth: PropTypes.number,
};

export default function Justification({ style, strokeWidth = 4, ...props }) {
    return (
        <svg viewBox="0.0 0.0 180 120" xmlns="http://www.w3.org/2000/svg" style={style} {...props}>
            <ellipse
                cx="90"
                cy="60"
                rx={90 - strokeWidth / 2}
                ry={60 - strokeWidth / 2}
                fill="none"
                strokeWidth={strokeWidth}
                stroke={COLORS.Justification}
            />
            <text x="162" y="114" fontSize="18" fontWeight="bold" fill="black">
                J
            </text>
        </svg>
    );
}
