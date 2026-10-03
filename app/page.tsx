"use client"

import { useState } from "react";
import Swal from "sweetalert2";


export default function Home() {

  const [horario, setHorario] = useState("")
  const [datas, setDatas] = useState("")
  const [corte, setCorte] = useState("")
  const [nome, setNome] = useState("")

  async function enviarPedido(){

    if(!nome.trim() || !horario.trim() || !datas.trim() || !corte.trim()){
      Swal.fire({
        title: "Atenção!",
        text: "Por favor, preencha todos os campos.",
        icon: "warning",
        confirmButtonColor: "#b45309"
      })
      return;
    }

   const response = await fetch("http://localhost:3001/cortes", {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      nome,
      horario,
      datas,
      corte
    })
   })

   const resultado = await response.json();

   if(response.ok){
    Swal.fire({
          title: 'Sucesso!',
          text: 'Agendamento realizado com sucesso!',
          icon: "success"
        });

        setCorte("")
        setDatas("")
        setNome("")
        setHorario("")

  
   }else{
    Swal.fire({
          title: 'Erro!',
          text: resultado.mensagem || 'Falha ao salvar agendamento.',
          icon: "error"
        });
      
   }

    console.log(nome, horario, datas, corte)

    

  }

  return (
    <main className="grid grid-cols-1 gap-auto"> {/*Conteiner principal*/}
      <div className="p-2 bg-stone-300 dark:bg-stone-700">
        <h1 className="text-stone-900 dark:text-zinc-200 text-3xl mt-4 font-bold">Bem-vindo à pagina de agendamentos da barbearia!</h1>
        <p className="dark:text-white text-zinc-800">Agende seu serviço aqui!</p>
      </div>
      <div className="flex items-center justify-center mt-16">
        <div className="w-full max-w-md grid grid-cols-1 bg-stone-300 p-10 dark:bg-zinc-600 gap-3 rounded">{/*Div contendo os inputs*/}
        <h2 className="font-bold">Agende aqui seu corte aqui</h2>
        <label>Nome</label>
        <input className= "border border-zinc-200 rounded p-1" type="text" onChange={(e)=>{
          setNome(e.target.value)
        }}/>
        <label>Data</label>
        <input className= "border border-zinc-200 rounded p-1" type="date" onChange={(e)=>{
          setDatas(e.target.value)
        }}/>
        <label>Horário</label>
        <input className= "border border-zinc-200 rounded p-1" type="time" onChange={(e)=>{
          setHorario(e.target.value)
        }}/>
        <label>Tipo de corte</label>
        <input className="border border-zinc-200 rounded p-1" type="text" onChange={(e)=>{
          setCorte(e.target.value)
        }}/>

        <button type="submit" onClick={enviarPedido} className="bg-zinc-400 dark:text-gray-100 rounded hover:bg-zinc-500 p-4 hover:cursor-pointer">Agendar serviço</button>
      </div>
      </div>

      
      
    </main>
    
  );
}
