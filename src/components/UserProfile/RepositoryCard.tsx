import { Repository } from '../../types/Repository';

type RepositoryCardProps = {
    repo: Repository;
    onRepoClick: (repo: Repository) => void;
};

function RepositoryCard({ repo, onRepoClick }: RepositoryCardProps) {
    return (
        <div key={repo.id} className="rounded-lg shadow-custom cursor-pointer" onClick={() => onRepoClick(repo)}>
            <h2 className="text-[#202E49] pl-[49px] pt-[32px] pb-[28px] text-lg font-semibold border-b border-[#0070E0] truncate">{repo.name}</h2>
            <div className="py-[11px] px-[18px] mx-[40px] mt-[33px] mb-[22px] text-xs bg-[#F7F7F7] rounded-[11px] h-[56px]">
                <p className="text-[#6A6F73]">Link</p>
                <p className="text-[#202E49] underline truncate">
                    <a href={repo.html_url} onClick={(e) => e.stopPropagation()}>{repo.html_url}</a>
                </p>
            </div>
            <div className="py-[11px] px-[18px] mx-[40px] mb-[49px] text-xs bg-[#F7F7F7] rounded-[11px] h-[56px]">
                <p className="text-[#6A6F73]">Descrição</p>
                <p className="text-[#202E49] truncate">{repo.description ? repo.description : "---"}</p>
            </div>
        </div>
    );
};

export default RepositoryCard;
