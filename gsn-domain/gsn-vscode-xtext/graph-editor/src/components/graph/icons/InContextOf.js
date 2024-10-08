import PropTypes from 'prop-types';
import { COLORS } from '../theme';

InContextOf.propTypes = {
    style: PropTypes.object,
    isRef: PropTypes.bool,
};

export default function InContextOf({ style, isRef, ...props }) {
    return (
        <svg viewBox="0.0 0.0 180 120" xmlns="http://www.w3.org/2000/svg" style={style} {...props}>
            <defs>
                <marker
                    id="arrow"
                    markerWidth="4"
                    markerHeight="4"
                    refX="10"
                    refY="10"
                    orient="auto"
                    viewBox="0 0 20 20"
                >
                    <path d="M0,0 L18,10 L0,18 Z" stroke={COLORS.Edge} fill="#fff" strokeWidth="3" />
                </marker>
            </defs>
            {isRef && (
                <text x="85" y="48" fontSize="14" fontWeight="bold" fill="black">
                    ref
                </text>
            )}
            <line
                x1="10"
                y1="58"
                x2="160"
                y2="58"
                opacity={isRef ? 0.6 : 1}
                stroke={COLORS.Edge}
                strokeDasharray={isRef ? '6, 6' : '16, 16'}
                strokeWidth="6"
                markerEnd="url(#arrow)"
            />
        </svg>
    );
}
