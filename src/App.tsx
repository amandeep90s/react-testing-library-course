import "./App.css";

import { User, getUser } from "./getUser";
import { useEffect, useState } from "react";

import CustomInput from "./CustomInput";

function App() {
  const [text, setText] = useState("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      {user && <p>Username: {user.name}</p>}
      <CustomInput value={text} onChange={handleChange}>
        Search
      </CustomInput>
      <p>You typed: {text || ""}</p>
    </div>
  );
}

export default App;
