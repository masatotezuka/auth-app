import React from "react";

export const LoginPage = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">Eメール</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="password">パスワード</label>
        <input id="password" type="password" name="password" />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};
