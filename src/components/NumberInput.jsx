function NumberInput({ number, setNumber }) {
  const handleChange = (e) => setNumber(e.target.valueAsNumber);

  return (
    <input type="number" value={number} onChange={handleChange} />
  );
}

export default NumberInput;
