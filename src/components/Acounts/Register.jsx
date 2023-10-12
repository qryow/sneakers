import React, { Component } from 'react';
import axios from 'axios';
import style from './AcountStyles/LoginandRegisterStyle.module.css'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        active: false
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

  funcRegister = async (e) => {
    e.preventDefault();

    if (this.state.formData.password !== this.state.formData.confirmPassword) {
      alert('Пароль и подтверждение пароля не совпадают');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/accounts', this.state.formData);
      console.log('ай маладес все хорошо:', response.data);

      this.setState({
        formData: {
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
        },
      });
    } catch (error) {
      console.error('ты еблан у тебя тут ошибка же есть:', error);
    }
  };

  render() {
    return (
      <>
      <div className={style.register_form}>
      <h2 className={style.register_h2}><em>Register Form</em> </h2>
      <div className={style.violet_2}></div>
        <form onSubmit={this.funcRegister} className={style.register_content}>
          <input
            type="email"
            name="email"
            placeholder="email@"
            value={this.state.formData.email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={this.state.formData.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.formData.password}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Password confirm"
            value={this.state.formData.confirmPassword}
            onChange={this.handleChange}
          />
          <button type="submit">Register</button>
        </form>
        <div className={style.violet}></div>
        <div className={style.pink}></div>
      </div>
      </>
    );
  }
}

export default Register;
