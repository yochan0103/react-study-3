import { PrimaryBuntton } from "./components/atoms/button/PrimaryButton";
import { SecondaryBuntton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryBuntton>テスト</PrimaryBuntton>
      <SecondaryBuntton>検索</SecondaryBuntton>
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
}
