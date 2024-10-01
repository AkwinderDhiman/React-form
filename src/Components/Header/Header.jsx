import logoImg from '../../assets/logo.jpg';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>React Forms</h1>
    </header>
  );
}
