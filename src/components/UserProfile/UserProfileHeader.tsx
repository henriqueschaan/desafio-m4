import { User } from '../../types/User';

type UserProfileHeaderProps = {
    user: User;
};

function UserProfileHeader({ user }: UserProfileHeaderProps) {
    if (!user) {
        return <div>Loading user data...</div>;
    }

    return (
        <div className="inline-flex items-center border rounded-[18px] h-[178px] pl-[30px] pr-[37px] py-[26px] mb-[74.34px] w-full">
            <img src={user.avatar_url} alt="User Avatar" className="w-32 h-32 mr-[43px] rounded-[11px]" />
            <div className="overflow-auto max-h-[139.5px]">
                <p className="text-[#6A6F73]">Nome</p>
                <p className="font-bold text-[13px]">{user.name ? user.name : '---'}</p>
                <p className="text-[#6A6F73]">Bio</p>
                <p className="">{user.bio ? user.bio : "---"}</p>
            </div>
        </div>
    );
};

export default UserProfileHeader;