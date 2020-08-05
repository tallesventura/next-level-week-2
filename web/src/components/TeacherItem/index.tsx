import React from 'react';

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/14003158?s=400&u=ac417e9d6f64f8ffc43847f52790069b69d58f2b&v=4"
          alt="Talles Oliveira"
        />
        <div>
          <strong>Talles Oliveira</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac massa quis justo placerat pulvinar. Ut at elit quis lacus
        maximus vehicula et et mi. Nunc ultrices lacus a metus rhoncus gravida. In eu aliquam erat, sed volutpat elit. Aenean pharetra
        tincidunt dictum. Praesent nec mollis diam. Fusce commodo auctor gravida. Proin tincidunt viverra fermentum. Duis condimentum a
        ex feugiat egestas.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
