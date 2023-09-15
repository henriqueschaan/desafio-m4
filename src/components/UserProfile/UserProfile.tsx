import { User } from '../../types/User';
import { Repository } from '../../types/Repository';
import UserProfileHeader from './UserProfileHeader';
import UserRepositoriesList from './UserRepositoriesList';

type UserProfileProps = {
    user: User;
    repos: Repository[];
    onRepoClick: (repo: Repository) => void;
};

function UserProfile({ user, repos, onRepoClick }: UserProfileProps) {
    return (
        <div>
            <h1 className="text-[30px] font-bold mb-[47.66px] pl-[0.14%] whitespace-nowrap overflow-hidden text-ellipsis">
                Informações do Perfil
            </h1>
            <UserProfileHeader user={user} />
            <UserRepositoriesList repos={repos} onRepoClick={onRepoClick} />
        </div>
    );
};

export default UserProfile;