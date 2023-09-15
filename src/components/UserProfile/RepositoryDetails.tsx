import { Repository } from '../../types/Repository';
import x from '../../assets/images/x.png'

function RepositoryDetails({ repo, onClose }: { repo: Repository; onClose: () => void }) {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-[30px] font-bold mb-[66px] pl-[0.14%] whitespace-nowrap overflow-hidden text-ellipsis">
                    Especificações
                </h2>
            </div>
            <div className="bg-white px-8 pt-[40px] pb-[44px] rounded-[10px] shadow-custom w-[60%] mx-auto max-w-[686px] max-h-[622px]">
                <div className="flex justify-between border-b border-[#BDBDBD] pb-[20px]">
                    <h3 className="text-[15px] font-bold pl-[17px]">{repo.name}</h3>
                    <button onClick={onClose} className="text-[36px] text-[#BDBDBD]"><img src={x} alt="" /></button>
                </div>
                <div className="bg-[#F7F7F7] mt-[20px] mb-[25px] rounded-[11px] py-[11px] px-[18px] mx-[17px]">
                    <p className="text-[#6A6F73]">Link</p>
                    <p className="text-[#202E49] underline truncate"><a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.html_url}
                    </a></p>
                </div>
                <div className="bg-[#F7F7F7] mb-[25px] rounded-[11px] py-[11px] px-[18px] mx-[17px] overflow-hidden">
                    <p className="text-[#6A6F73]">Privacidade</p>
                    <p>{repo.private ? 'Privado' : 'Público'}</p>
                </div>
                <div className="bg-[#F7F7F7] mb-[25px] rounded-[11px] py-[11px] px-[18px] mx-[17px] overflow-hidden">
                    <p className="text-[#6A6F73]">Linguagem</p>
                    <p>{repo.language ? repo.language : '---'}</p>
                </div>
                <div className="bg-[#F7F7F7] rounded-[11px] py-[11px] px-[18px] mx-[17px] max-h-[179px] overflow-auto">
                    <p className="text-[#6A6F73]">Descrição</p>
                    <p>{repo.description ? repo.description : '---'}</p>
                </div>
            </div>
        </div>
    );
}

export default RepositoryDetails;
