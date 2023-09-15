import { useEffect, useState } from 'react';
import { Repository } from '../../types/Repository';
import RepositoryCard from './RepositoryCard';
import LeftButtonSVG from '../../assets/svgs/LeftButtonSVG';
import RightButtonSVG from '../../assets/svgs/RightButtonSVG';

type UserRepositoriesListProps = {
    repos: Repository[];
    onRepoClick: (repo: Repository) => void;
};

function UserRepositoriesList({ repos, onRepoClick }: UserRepositoriesListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage, setReposPerPage] = useState(3);

    useEffect(() => {
        const updateReposPerPage = () => {
            if (window.innerWidth <= 640) {
                setReposPerPage(1);
            } else if (window.innerWidth <= 768) {
                setReposPerPage(2);
            } else {
                setReposPerPage(3);
            }
        };

        updateReposPerPage();

        window.addEventListener('resize', updateReposPerPage);

        return () => {
            window.removeEventListener('resize', updateReposPerPage);
        };
    }, []);

    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
    const totalPages = Math.ceil(repos.length / reposPerPage);

    return (
        <div>
            <h1 className="text-[30px] font-bold pl-[0.14%]">Repositórios</h1>
            {totalPages ?
                <div>
                    <div className="flex items-center justify-end">
                        <span className="mr-4">{currentPage} de {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="mr-[5.27px]"
                        >
                            {currentPage === 1 ? <LeftButtonSVG color='#C4C4C4' /> : <LeftButtonSVG />}
                        </button>
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            {currentPage === totalPages ? <RightButtonSVG color='#C4C4C4' /> : <RightButtonSVG />}
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2.63%] h-[293px] px-[0.7%] mt-[17.17px]">
                        {currentRepos.map((repo) => (
                            <RepositoryCard key={repo.id} repo={repo} onRepoClick={onRepoClick} />
                        ))}
                    </div>
                </div> : <div className="flex justify-center items-center h-[335.71px]">Esta conta não possui repositórios.</div>
            }
        </div>
    );
};

export default UserRepositoriesList;
