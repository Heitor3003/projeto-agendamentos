"use client"

import Image from "next/image"

export default function sobre(){
    return(
        <div className="flex ml-60 mt-30">
            <div className="bg-gray-400 dark:bg-zinc-700 w-full max-w-md p-6 pb-11 pt-11 rounded border border-black dark:border-white mt-16">
                <h1 className="font-bold ">SOBRE NÓS</h1>

                <div className="text-2xl">
                <p>Somos uma barbearia extremamente conceituada, com 26 anos de história e uma equipe famosa por sua hospitalidade, gentileza e cordialidade.
                    Não perca tempo, agende já o seu corte e seja transformado como nunca antes!
                </p>
            </div>
            </div>

        </div>
    )
}