import { User } from '../types/User';
import { Repository } from '../types/Repository';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserProfile from '../components/UserProfile/UserProfile';
import RepositoryDetails from '../components/UserProfile/RepositoryDetails';
import logo2 from '../assets/images/logo2.png';
import LoadingSVG from '../assets/svgs/LoadingSVG';

function UserProfilePage() {
    const { username } = useParams<{ username: string }>();
    const [userData, setUserData] = useState<User | null>(null);
    const [userRepos, setUserRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

    useEffect(() => {
        async function fetchUserData() {
            setLoading(true);
            try {
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);

                const userData = await userResponse.json();
                const reposData = await reposResponse.json();

                setUserData(userData);
                setUserRepos(reposData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [username]);

    function handleRepoClick(repo: Repository) {
        setSelectedRepo(repo);
    };

    function handleCloseRepoDetails() {
        setSelectedRepo(null);
    };

    return (
        <div className="h-[100%] overflow-auto min-w-[345px]">
            <div className="bg-white h-[88px] px-[4.44%] flex items-center">
                <Link to="/" className="py-[10px]">
                    <img src={logo2} alt="" />
                </Link>
            </div>
            <div style={{ height: 'calc(100% - 88px)' }} className="flex justify-center bg-[#ECEFF5]">
                <div className="bg-white px-[3.75%] pt-[59.39px] my-[36px] rounded-[10px] shadow-custom w-[90.2%] h-[857px]">
                    {loading ? (<LoadingSVG height="h-[100%]" />) : (
                        <div>
                            {selectedRepo ? (
                                <RepositoryDetails repo={selectedRepo} onClose={handleCloseRepoDetails} />
                            ) : (
                                userData && <UserProfile user={userData} repos={userRepos} onRepoClick={handleRepoClick} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

};

export default UserProfilePage;