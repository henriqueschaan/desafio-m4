import error from '../../assets/images/error.png';

type ErrorMessageProps = {
    message: string;
    onClose: () => void;
};

function ErrorMessage({ message, onClose }: ErrorMessageProps) {
    return (
        <div className="relative mb-[34px] w-[347px] min-h-[84px] bg-[#fc8621] rounded-[22px] mt-10">
            <img src={error} alt="" className="absolute top-[-24px] left-[8px]" />
            <button onClick={onClose} className="absolute top-[12px] right-[18px] text-white text-sm">⨉</button>
            <div className="text-white h-[30px] text-[20px] font-bold ml-[86px] mt-[14px]">Ops!</div>
            <div className="text-white min-h-[22px] mb-[18px] text-[12px] font-normal ml-[86px]">
                {message}
            </div>
        </div>
    );
};

export default ErrorMessage;
