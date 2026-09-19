import { useState } from 'react'
import './App.css'

export default function App () {
  //guardar senha gerada (começa vazia)
  const [password, setPassword] = useState ('')
//guardamos o texto do botao de copiar - começa com Copiar 
  const [copyText, setCopyText] = useState ('Copiar')

  //Função para gerar senha aleatoria
  function generatPassword () {
    //definir caracteres permitidos
    const chars = "'1234567890-=!@#$%\"'*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.:/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"

    let newPassword = ''
    const passwordLength = 12 //tamanho da senha
    //sorteia caracteres aleatorios dentro da string chars
    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random()*chars.length)
      newPassword += chars[randomNumber]
    }
    //atualiza a senha no estado e muda o texto p/ Copiar de novo
    setPassword(newPassword)
    setCopyText("Copiar")
  }
  //funcao p/ copiar p/ area de transf
  function copyToClipboard() {
    if (!password) return; //se nao tiver senha gerada, nao faz nada

    window.navigator.clipboard.writeText(password) //metodo do compu p/ copiar 

    setCopyText("Copiado!") //muda o texto p/ Copiado
  }
  //estrutura visual
  return(
    <div className='container'>
      <h1>Gerador de Senhas</h1>

      <div className='buttonGroup'>
        <button onClick={generatPassword}>Gerar!</button> 
        <button onClick={copyToClipboard}>{copyText}</button>
      </div>

      {password && <p className='passwordDisplay'>{password}</p>}
    </div>
  )
}