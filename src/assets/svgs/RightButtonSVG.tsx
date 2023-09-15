function RightButtonSVG({ color = "#575759" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect x="0.5" y="0.5" width="24.8264" height="24.8264" rx="4.5" stroke={color} />
            <path d="M12.2366 8.98309L15.9723 12.7188C16.3813 13.1279 16.359 13.7976 15.9237 14.1785L12.2366 17.4047" stroke={color} strokeLinecap="round" />
            <path d="M7.74516 13.4746H16.1667" stroke={color} strokeLinecap="round" />
        </svg>
    )
}

export default RightButtonSVG;