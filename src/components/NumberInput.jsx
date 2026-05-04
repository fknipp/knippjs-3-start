import TextField from '@mui/material/TextField';

function NumberInput({ number, setNumber }) {
  const handleChange = (e) => setNumber(parseInt(e.target.value));

  return (
    <TextField type="number" value={number} onChange={handleChange} />
  );
}

export default NumberInput;
