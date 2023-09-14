const createInt9TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
        throw new Error("Position outside range");
    }

    const buffer = new ArrayBuffer(length);
    const view = DataView(buffer);

    view.setInt8(position, value);
    return veiw;
}
export default createInt9TypedArray