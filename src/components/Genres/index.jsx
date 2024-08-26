import { Container } from "./styles";
import { FiX, FiPlus } from "react-icons/fi";

export function Genres({ isNew = false, value, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}