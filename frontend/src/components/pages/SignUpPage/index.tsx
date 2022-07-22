import React from "react";

export const SignUpPage = () => {
  return (
    <div>
      <form>
        <label htmlFor="firstName">性</label>
        <input id="firstName" type="text" name="firstName" />
        <label htmlFor="lastName">名</label>
        <input id="lastName" type="text" name="lastName" />
        <label htmlFor="email_register">Eメール</label>
        <input id="email_register" type="email" name="email" />
        <label htmlFor="password_register">パスワード</label>
        <input id="password_register" type="password" name="password" />
        <button type="submit">新規登録</button>
      </form>
    </div>
  );
};
