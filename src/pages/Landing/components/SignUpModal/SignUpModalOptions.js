function SignUpModalOptions() {
  const dateOfBirthOptions = Array(31)
    .fill('')
    .map((_item, index) => {
      return { key: index + 1, label: index + 1 };
    });

  const monthOptions = Array.from({ length: 12 }, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString('en', {
      month: 'short',
    });
  }).map((month, index) => {
    return {
      label: month,
      key: index,
    };
  });

  const yearOptions = Array(119)
    .fill('')
    .map((_item, index) => {
      return { key: index + 1, label: 2023 - parseInt(index) };
    });

  const genderOptions = [
    {
      key: 'female',
      label: 'Female',
    },
    {
      key: 'male',
      label: 'Male',
    },
    {
      key: 'custom',
      label: 'Custom',
    },
  ];

  const pronounOptions = [
    {
      key: 'she',
      label: `She : "Wish her a happy birthday!"`,
    },
    {
      key: 'he',
      label: `He : "Wish him a happy birthday!"`,
    },
    {
      key: 'they',
      label: `They : "Wish them a happy birthday!"`,
    },
  ];

  return {
    dateOfBirthOptions,
    monthOptions,
    yearOptions,
    genderOptions,
    pronounOptions,
  };
}

export { SignUpModalOptions as options };
