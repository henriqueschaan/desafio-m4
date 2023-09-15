interface Props {
    height?: string;
  }

function LoadingSVG(Props: Props) {
    return (
        <div className={`flex flex-col items-center justify-center w-full ${Props.height}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="38.5" stroke="#0070E0" strokeWidth="3" />
                <g className="animate-spin origin-center">
                    <circle cx="40" cy="40" r="20.5" stroke="#0070E0" strokeWidth="5" strokeLinecap="round" strokeDasharray="20 20" />
                </g>
            </svg>

            <span className="text-3xl font-bold text-[#303030] mt-[46px]">Carregando...</span>
        </div>
    )
};

export default LoadingSVG;