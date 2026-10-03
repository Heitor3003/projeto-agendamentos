"use client"

import Image from "next/image"

export default function sobre(){
    return(
        <div className="flex ml-60 mt-30 gap-70">
            <div className="bg-gray-400 dark:bg-zinc-700 w-full max-w-md p-6 pb-11 pt-11 rounded border border-black dark:border-white mt-16">
                <h1 className="font-bold ">SOBRE NÓS</h1>

                <div className="text-2xl">
                <p>Somos uma barbearia extremamente conceituada, com 26 anos de história e uma equipe famosa por sua hospitalidade, gentileza e cordialidade.
                    Não perca tempo, agende já o seu corte e seja transformado como nunca antes!
                    <p className="font-semibold">
                        Contatos
                    </p>
                    <p>
                        Email: barbearia@gmail.com
                    </p>
                    <p>
                        Telefone: 00 1234-5678
                    </p>
                </p>
            </div>
            </div>

            <Image
                src={"/licensed-image.jpg"}
                alt="logo barbearia"
                width={600}
                height={600}
                className="rounded shadow"
            />
        </div>
    )
}