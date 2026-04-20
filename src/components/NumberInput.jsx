function NumberInput({ number, setNumber }) {
  const handleChange = (e) => setNumber(parseInt(e.target.value));

  return (
    <input type="number" value={number} onChange={handleChange} />
  );
}

export default NumberInput;
