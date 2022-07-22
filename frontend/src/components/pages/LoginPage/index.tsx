import React from "react";

export const LoginPage = () => {
  return (
    <div>
      <form>
        <label htmlFor="email_login">Eメール</label>
        <input id="email_login" type="email" name="email" />
        <label htmlFor="password_login">パスワード</label>
        <input id="password_login" type="password" name="password" />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};
