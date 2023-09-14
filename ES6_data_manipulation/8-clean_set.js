const cleanSet = (set, startstring) => {
    const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

    return filteredValues.join('-');
};

export default cleanSet;