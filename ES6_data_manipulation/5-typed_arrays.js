const createInt9TypedArray = (length, position, value) => {
    if (position >= length || position < 0) {
        throw new Error('Position outside range');
    }

    const int8 = new Int8Array(length);
    int8[position] = value;

    const { buffer } = int8;
    const view = DataView(buffer, 0, length);

    view.setInt8(position, value);
    return view;
}
export default createInt8TypedArray