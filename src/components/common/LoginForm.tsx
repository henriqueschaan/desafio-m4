import React, { useState } from 'react';

type LoginFormProps = {
    onSearch: (username: string) => Promise<void>;
};

function LoginForm({ onSearch }: LoginFormProps) {
    const [username, setUsername] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSearch(username);
    };

    return (
        <form onSubmit={handleSubmit}>
            <span className="text-sm self-start">Usuário</span>
            <input
                type="text"
                placeholder="Digite aqui seu usuário GitHub         ✉"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="py-[10px] px-[14px] mt-[9px] border rounded w-full text-[15px] truncate"
            />
            <button type="submit" className="h-[43px] mt-[40px] bg-[#05478A] text-white rounded w-full">
                Entrar
            </button>
        </form>
    );
};

export default LoginForm;
