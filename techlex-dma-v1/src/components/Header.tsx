import { HeaderEnum } from "../common/enums/header.enum";

export default function Header() {
  const headerNames = Object.values(HeaderEnum);

  return (
    <header className="m-5">
      <nav>
        <ul className="flex items-center justify-center">
          {headerNames.map((item) => (
            <li className="m-3 text-gray-200 text-[1.1rem]">{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
