import React from "react";

export const SignUpPage = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">性</label>
        <input id="email" type="text" name="firstName" />
        <label htmlFor="lastName">名</label>
        <input id="lastName" type="text" name="lastName" />
        <label htmlFor="email">Eメール</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="password">パスワード</label>
        <input id="password" type="password" name="password" />
        <button type="submit">新規登録</button>
      </form>
    </div>
  );
};
