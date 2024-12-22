function MultiRadio({ ...rest }) {
  const { className, options, value, onChange } = { ...rest };

  const radioOptions = options.map((option) => (
    <div
      key={option.key}
      className={className}
      onClick={() => onChange(option.key)}
    >
      {option.label}
      <input type="radio" checked={value === option.key} value={option.key} />
    </div>
  ));
  return (
    <div className="flex flex-row mb-3 justify-between cursor-default">
      {radioOptions}
    </div>
  );
}

export default MultiRadio;
