import React, { Component } from 'react';
import style from './AcountStyles/LoginandRegisterStyle.module.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        password: '',
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };

  handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log('Отправлен запрос на аутентификацию:', this.state.formData);

      const { email, password } = this.state.formData;

      const response = await fetch('http://localhost:8000/accounts');
      const accountsData = await response.json();

      const account = accountsData.accounts.find(acc => acc.email === email && acc.password === password);

      if (account) {
        account.active = true;

        await fetch(`http://localhost:8000/accounts/${account.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(account),
        });

        this.setState({
          formData: {
            name: '',
            email: '',
            password: '',
          }
        });

        alert('Вы успешно вошли в свой аккаунт!');
      } else {
        alert('Неправильные учетные данные. Попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Ошибка аутентификации:', error);
    }
  };

  render() {
    return (
      <div className={style.login_form}>
        <h2 className={style.register_h2}><em>Login Form</em> </h2>
        <div className={style.violet_2}></div>
        <form onSubmit={this.handleLogin} className={style.login_content}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.formData.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email@"
            value={this.state.formData.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.formData.password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
        <div className={style.violet}></div>
        <div className={style.pink}></div>
      </div>
    );
  }
}

export default Login;
