import { useState } from 'react';
import logo1 from '../assets/images/logo1.png';
import LoadingSVG from '../assets/svgs/LoadingSVG';
import ErrorMessage from '../components/common/ErrorMessage';
import LoginForm from '../components/common/LoginForm';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSearch = async (username: string) => {
        if (!username.trim()) {
            setErrorMessage('Por favor insira um username do GitHub.');
            return;
        }
        setLoading(true);
        try {
            const userResponse = await fetch(`https://api.github.com/users/${username}`);

            if (!userResponse.ok) {
                throw new Error('Não conseguimos identificar sua conta.');
            }

            navigate(`/user/${username}`);
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage('Ocorreu um erro inesperado. Tente novamente.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen flex flex-col sm:flex-row">
            <div className="sm:px-16 md:w-[130%] md:px-0 bg-[#05478A] flex items-center justify-center">
                <img src={logo1} alt="" className="my-4"/>
            </div>
            {loading ? (
                <LoadingSVG height="h-[100vh] px-7" />
            ) : (
                <div className="flex flex-col items-center w-full min-w-[286px] px-7">
                    <div className="h-[46.03%] flex items-end">
                        {errorMessage ? (
                            <ErrorMessage message={errorMessage} onClose={() => setErrorMessage(null)} />
                        ) : (
                            <h2 className="text-[40px] font-bold mb-[39px] mt-[59px] sm:mt-0">Entrar</h2>
                        )}
                    </div>
                    <div className="w-full flex flex-col items-center max-w-[318px]">
                        <LoginForm onSearch={handleSearch} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
