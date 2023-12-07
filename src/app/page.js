'use client'
import React, { useState } from 'react';
import { sin } from '../module/generador.js';

const Page = () => {
  const [valor, setValor] = useState('');

  function llamada() {
    const nocomments = valor.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "").trim();
    console.log(nocomments);
    const expresiones = nocomments.split('\n').filter(exp => exp.trim() !== '');  // Filtra líneas en blanco
    const Regex = /[a-zA-Z]/g; 
    if (!Regex.test(expresiones)) {
      const resultados = expresiones.map(expr => {
        const resultado = sin(expr).join(' ');
        return expr + '=   ' + resultado;
      });
      setValor(resultados.join('\n'));
    } else { 
      setValor('No puedes ingresar caracteres de este tipo');
    }    
  }
  
  return (
    <div style={{ height: '100vh', 
    display: 'flex', flexDirection: 'column',
    background: 'url("https://img1.picmix.com/output/stamp/thumb/8/1/1/2/322118_09641.gif")', // Ajusta la ruta de la imagen de fondo
    backgroundSize: '150px',
    backgroundPosition: 'center', }}>
      {/* Barra Superior */}

      
      <div
  style={{
    backgroundColor: '#9dbcbc',
    padding: '1px',
    textAlign: 'center',
    color: 'black',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px', // Ajusta la altura del contenedor según tus necesidades
  }}
>
  <div>
    <img
      src="https://ov13-engine.flamingtext.com/netfu/tmp28006/coollogo_com-27650221.png"
      alt="Analizador Sintáctico Logo"
      style={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        margin: '0 auto', // Ajustado para centrar horizontalmente la imagen
      }}
    />
  </div>
</div>

      {/* Contenido Principal */}
      <main
  style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    
  }}
>
  <section>
  <h3 style={{ textAlign: 'center', marginBottom: '20px', background: '#9dbcbc', padding: '10px', borderRadius: '8px' }}>
  Bienvenido, introduce la cantidad a operar en la siguiente área de texto.
</h3>
    <textarea
      value={valor}
      onChange={(e) => setValor(e.target.value)}
      style={{
        width: '100%',
        padding: '10px',
        boxSizing: 'border-box',
        marginBottom: '20px',
        border: '10px solid #ddd',
        borderRadius: '4px',
        borderColor: '#9dbcbc',
      }}
    ></textarea>
    <h3 style={{ textAlign: 'center', marginBottom: '20px', background: '#9dbcbc', padding: '10px', borderRadius: '8px' }}>
  Para empezar, haz click en analizar.
  
</h3>
<h3 style={{ textAlign: 'center', marginBottom: '20px', background: '#9dbcbc', padding: '10px', borderRadius: '8px' }}>
  
  Para borrar, haz click en Limpiar.
</h3>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button
        onClick={llamada}
        style={{
          textAlign: 'center',
          padding: '15px',
          backgroundColor: '#9dbcbc',
          color: 'black',
          borderColor: 'black',
          borderRadius: '10px',
          cursor: 'pointer',
          marginLeft: '10px',
        }}
      >
        Analizar
      </button>
      <button
    onClick={() => setValor('')} // Función para limpiar el área de texto
    style={{
      textAlign: 'center',
      padding: '15px',
      backgroundColor: '#9dbcbc',
      color: 'black',
      borderColor: 'black',
      borderRadius: '10px',
      cursor: 'pointer',
      marginLeft: '10px',
    }}
  >
    Limpiar
  </button>
    </div>
  </section>
</main>

      {/* Pie de Página */}
      <footer
        style={{
          backgroundColor: '#9dbcbc',
          padding: '40px',
          textAlign: 'center',
          color: 'black',
        }}
      >
        
        © 2023 Proyecto elaborado por: Juan Iran Lopez Mercado
      </footer>
    </div>
  );
};

export default Page;
