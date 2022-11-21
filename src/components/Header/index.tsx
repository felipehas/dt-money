import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal: onOpenNewTransctionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransctionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
