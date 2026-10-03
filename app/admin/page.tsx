"use client"

import Swal from "sweetalert2"
import { useState } from "react"
import { useEffect } from "react"
import { METHODS } from "http"

export default function admin(){

    const [agendamentos, setAgendamentos] = useState([])

   async function exibirAgendamentos(){
        try {
            const response = await fetch("http://localhost:3001/cortes", {
                headers:{
                    "Content-Type":"application/json"
                }
                
            })
            const dados = await response.json()

            setAgendamentos(dados)

            
            

        } catch (error) {
            Swal.fire({
                title:"Erro!",
                text:"Falha ao mostrar agendamentos.",
                icon:"error"
            })

            console.log(error)
        }

        
    }

    async function cancelarAgendamentos(id: number){
        try {
            const response = await fetch(`http://localhost:3001/cortes/${id}`, {
                method: "DELETE",
            }
        )

        if(response.ok){
            Swal.fire({
                title:"Sucesso!",
                text:"Agendamento cancelado.",
                icon:"success"
            })
        }else{
            Swal.fire({
                title:"Atenção!",
                text:"Não foi possível cancelar este agendamento.",
                icon:"warning"
            })
        }

        exibirAgendamentos();
        
        } catch (error) {
            console.error(error)

            Swal.fire({
                title:"Erro!",
                text:"Falha ao cancelar o serviço.",
                icon:"error"
            })
            
        }
    }

    useEffect(() => {
                exibirAgendamentos();
            }, [])

    
    return(
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1">

                <h1 className="font-bold text-3xl dark:text-stone-50">Página de administrador</h1>

                <div>
                    <h1 className="font-bold italic ">Agendamentos</h1>
                </div>

                {agendamentos.length === 0 ?(
                    <p className="bg-gray-300 p-5 rounded border shadow ">Nenhum agendamento encontrado.</p>
                ) : (
                    agendamentos.map((item: any) => (
                        <div key={item.id} className="border p-4 mb-3 rounded bg-zinc-100 dark:bg-zinc-800">
                            <p><strong>Nome:</strong> {item.nome}</p>
                             <p><strong>Tipo de corte:</strong> {item.corte}</p>
                            <p><strong>Dia/Hora:</strong> {item.datas} - {item.horario}</p>
                            <button className="bg-red-300 p-2 rounded font-medium hover:cursor-pointer hover:bg-red-400" onClick={()=>{cancelarAgendamentos(item.id)}}>Cancelar serviço</button>
                        </div>
                    ))
                )}

                </div>
                </div>

    )}