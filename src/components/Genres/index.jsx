import { Container } from "./styles";
import { FiX, FiPlus } from "react-icons/fi";

export function Genres({ isNew = false, value, fn, ...rest }) {



  return (
    <Container $isnew={isNew}>
      <input
        list="genres"
        type="text" value={value} readOnly={!isNew} {...rest}
      />
      <datalist id="genres">
        <option value="action">action</option>
        <option value="adventure">adventure</option>
        <option value="comedy">comedy</option>
        <option value="drama">drama</option>
        <option value="fantasy">fantasy</option>
        <option value="horror">horror</option>
        <option value="mystery">mystery</option>
        <option value="sci-fi">sci-fi</option>
        <option value="thriller">thriller</option>
        <option value="war">war</option>
      </datalist>

      <button onClick={() => fn(value)} type="button">
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}